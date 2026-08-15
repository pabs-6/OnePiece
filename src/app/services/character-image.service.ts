import { Injectable } from '@angular/core';
import { Observable, of, forkJoin, from } from 'rxjs';
import { map, catchError, tap, mergeMap, toArray } from 'rxjs/operators';
import { Character, CHARACTERS } from '../data/characters';
import { WIKI_ALIASES } from '../data/wiki-aliases';

const WIKI_API = 'https://onepiece.fandom.com/api.php';
const BATCH_SIZE = 50;
const SEARCH_CONCURRENCY = 5;
const CACHE_KEY = 'op-wiki-images-v3';
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

const FILE_SUFFIXES = [
  '_Anime_Post_Timeskip_Infobox.png',
  '_Anime_Infobox.png',
  '_Manga_Infobox.png',
  '_Infobox.png'
];

const BLOCKED_TITLES = new Set([
  'One Piece in France', 'One Piece in Portugal', 'One Piece Wiki',
  'Tightrope Walking Funan Bros', 'Yeti Cool Brothers', 'Five Elders',
  'Yakuza Kasen', 'Sekai wa Hitori ja Nakatta', 'Uta no Uta: ONE PIECE FILM RED',
  'Episode 39', 'Kuri Kuri no Mi', 'Goro Goro no Mi', 'One Piece', 'CP9',
  'Donquixote Pirates', 'Vegapunk', 'Some', 'Ace\'s Great Blackbeard Search'
]);

const BLOCKED_PATTERNS = [/no Mi/i, /Episode \d+/i, /FILM/i, /One Piece in /i, /Wiki$/i, /^Z$/];

@Injectable({ providedIn: 'root' })
export class CharacterImageService {
  private memoryCache = new Map<string, string>();
  private pendingResolves = new Map<string, Observable<string | null>>();

  constructor() {
    this.loadPersistedCache();
  }

  enrichCharacters(characters: Character[]): Observable<Character[]> {
    const staticImgs = new Set(CHARACTERS.map(c => c.img));
    const toResolve = characters.filter(c => !staticImgs.has(c.img) && this.needsResolution(c));
    if (toResolve.length === 0) return of(characters);

    return this.resolveBatch(toResolve.map(c => ({ id: c.id, name: c.name }))).pipe(
      map(imageMap => characters.map(c => {
        const resolved = imageMap.get(c.id);
        return resolved ? { ...c, img: resolved } : c;
      }))
    );
  }

  resolveImage(name: string): Observable<string | null> {
    const cacheKey = this.normalizeKey(name);
    const cached = this.memoryCache.get(cacheKey);
    if (cached) return of(cached);

    const pending = this.pendingResolves.get(cacheKey);
    if (pending) return pending;

    const request$ = from(this.resolveImageUrl(name)).pipe(
      tap(url => {
        if (url) this.memoryCache.set(cacheKey, url);
        this.persistCache();
        this.pendingResolves.delete(cacheKey);
      }),
      catchError(() => {
        this.pendingResolves.delete(cacheKey);
        return of(null);
      })
    );

    this.pendingResolves.set(cacheKey, request$);
    return request$;
  }

  private needsResolution(char: Character): boolean {
    if (char.img.startsWith('data:') || char.img.startsWith('/img/')) return false;
    if (char.img.includes('static.wikia.nocookie.net')) return false;
    return char.img.includes('Special:FilePath/') || !char.img;
  }

  private resolveBatch(entries: { id: number; name: string }[]): Observable<Map<number, string>> {
    const result = new Map<number, string>();

    const phase1Batches: { id: number; name: string; pageTitle: string }[][] = [];
    const prepared = entries.map(e => ({
      id: e.id,
      name: e.name,
      pageTitle: this.getWikiPageTitle(e.name)
    }));

    for (let i = 0; i < prepared.length; i += BATCH_SIZE) {
      phase1Batches.push(prepared.slice(i, i + BATCH_SIZE));
    }

    const phase1$ = forkJoin(
      phase1Batches.map(batch => from(this.batchPageImages(batch.map(e => ({ id: e.id, name: e.name, title: e.pageTitle })))))
    ).pipe(
      map(batchResults => {
        for (const batchMap of batchResults) {
          for (const [id, url] of batchMap) result.set(id, url);
        }
        return result;
      })
    );

    return phase1$.pipe(
      mergeMap(() => {
        const unresolved = entries.filter(e => !result.has(e.id));
        if (unresolved.length === 0) return of(result);

        return from(unresolved).pipe(
          mergeMap(entry => from(this.resolveImageUrl(entry.name)).pipe(
            map(url => ({ id: entry.id, name: entry.name, url }))
          ), SEARCH_CONCURRENCY),
          toArray(),
          map(fallbacks => {
            for (const { id, name, url } of fallbacks) {
              if (url && !result.has(id)) {
                result.set(id, url);
                this.memoryCache.set(this.normalizeKey(name), url);
              }
            }
            this.persistCache();
            return result;
          })
        );
      }),
      catchError(() => of(result))
    );
  }

  /** Full resolution chain for one character. */
  private async resolveImageUrl(name: string): Promise<string | null> {
    const cacheKey = this.normalizeKey(name);
    const cached = this.memoryCache.get(cacheKey);
    if (cached) return cached;

    const titles = this.getWikiPageTitles(name);
    for (const title of titles) {
      const url = await this.fetchPageImage(title);
      if (url) return url;
    }

    const searchTitle = await this.openSearchTitle(name);
    if (searchTitle && !titles.includes(searchTitle)) {
      const url = await this.fetchPageImage(searchTitle);
      if (url) return url;
    }

    const fileUrl = await this.fetchFileImage(name);
    if (fileUrl) return fileUrl;

    return null;
  }

  private async batchPageImages(
    entries: { id: number; name: string; title: string }[]
  ): Promise<Map<number, string>> {
    const result = new Map<number, string>();
    const titleToEntries = new Map<string, { id: number; name: string }[]>();

    for (const entry of entries) {
      if (!titleToEntries.has(entry.title)) titleToEntries.set(entry.title, []);
      titleToEntries.get(entry.title)!.push({ id: entry.id, name: entry.name });
    }

    const params = new URLSearchParams({
      action: 'query',
      titles: [...titleToEntries.keys()].join('|'),
      prop: 'pageimages',
      format: 'json',
      pithumbsize: '600',
      origin: '*'
    });

    try {
      const data = await fetch(`${WIKI_API}?${params}`).then(r => r.json());
      const pages = data.query?.pages || {};
      const resolvedIds = new Set<number>();

      for (const page of Object.values(pages) as any[]) {
        if (page.missing !== undefined || !page.thumbnail?.source) continue;
        const matched = titleToEntries.get(page.title) || [];
        for (const entry of matched) {
          if (!resolvedIds.has(entry.id)) {
            result.set(entry.id, page.thumbnail.source);
            resolvedIds.add(entry.id);
            this.memoryCache.set(this.normalizeKey(entry.name), page.thumbnail.source);
          }
        }
      }
    } catch { /* continue to fallback phase */ }

    return result;
  }

  private async fetchPageImage(title: string): Promise<string | null> {
    const params = new URLSearchParams({
      action: 'query',
      titles: title,
      prop: 'pageimages',
      format: 'json',
      pithumbsize: '600',
      origin: '*'
    });

    try {
      const data = await fetch(`${WIKI_API}?${params}`).then(r => r.json());
      const pages = data.query?.pages || {};
      for (const page of Object.values(pages) as any[]) {
        if (page.missing !== undefined) continue;
        if (page.thumbnail?.source) return page.thumbnail.source;
      }
    } catch { /* ignore */ }
    return null;
  }

  /** Fandom opensearch — finds pages when the API name differs from the wiki title. */
  private async openSearchTitle(name: string): Promise<string | null> {
    const search = name.split('/')[0].trim();
    const params = new URLSearchParams({
      action: 'opensearch',
      search,
      limit: '8',
      format: 'json',
      origin: '*'
    });

    try {
      const data = await fetch(`${WIKI_API}?${params}`).then(r => r.json());
      const titles: string[] = data[1] || [];
      for (const title of titles) {
        if (!this.isValidSearchResult(title)) continue;
        const url = await this.fetchPageImage(title);
        if (url) return title;
      }
    } catch { /* ignore */ }
    return null;
  }

  private isValidSearchResult(title: string): boolean {
    if (!title || title.includes('/')) return false;
    if (BLOCKED_TITLES.has(title)) return false;
    if (BLOCKED_PATTERNS.some(p => p.test(title))) return false;
    if (title.length <= 2) return false;
    return true;
  }

  private async fetchFileImage(name: string): Promise<string | null> {
    const base = this.getWikiFileBase(name);
    for (const suffix of FILE_SUFFIXES) {
      const params = new URLSearchParams({
        action: 'query',
        titles: `File:${base}${suffix}`,
        prop: 'imageinfo',
        iiprop: 'url',
        format: 'json',
        origin: '*'
      });

      try {
        const data = await fetch(`${WIKI_API}?${params}`).then(r => r.json());
        const pages = data.query?.pages || {};
        for (const page of Object.values(pages) as any[]) {
          if (page.missing !== undefined) continue;
          const url = page.imageinfo?.[0]?.url;
          if (url) return url;
        }
      } catch { /* try next suffix */ }
    }
    return null;
  }

  private getWikiPageTitles(name: string): string[] {
    const clean = name.split('/')[0].trim();
    const titles = new Set<string>();

    const aliasKey = this.normalizeKey(name);
    if (WIKI_ALIASES[aliasKey]) titles.add(WIKI_ALIASES[aliasKey]);

    titles.add(this.getWikiPageTitle(clean));

    const withDots = clean.replace(/\b([A-Z])\b(?=\s+[A-Z])/g, '$1.');
    titles.add(withDots);

    return [...titles];
  }

  private getWikiPageTitle(name: string): string {
    const clean = name.split('/')[0].trim();
    const aliasKey = this.normalizeKey(name);
    if (WIKI_ALIASES[aliasKey]) return WIKI_ALIASES[aliasKey];
    return clean.replace(/\b([A-Z])\b(?=\s+[A-Z])/g, '$1.');
  }

  private getWikiFileBase(name: string): string {
    let clean = name.split('/')[0].trim().replace(/ /g, '_');
    clean = clean.replace(/_([A-Z])_/g, '_$1._');
    return clean.replace(/[^\w.]/g, '_');
  }

  private normalizeKey(name: string): string {
    return name.split('/')[0].trim().toLowerCase();
  }

  private loadPersistedCache(): void {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return;
      const { ts, data } = JSON.parse(raw);
      if (Date.now() - ts > CACHE_TTL_MS) return;
      for (const [k, v] of Object.entries(data)) {
        this.memoryCache.set(k, v as string);
      }
    } catch { /* ignore */ }
  }

  private persistCache(): void {
    try {
      const data: Record<string, string> = {};
      for (const [k, v] of this.memoryCache) data[k] = v;
      localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
    } catch { /* ignore quota */ }
  }
}

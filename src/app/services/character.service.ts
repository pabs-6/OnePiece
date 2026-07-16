import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { CHARACTERS, Character } from '../data/characters';

export type { Character };

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private http = inject(HttpClient);
  private apiUri = 'https://api.api-onepiece.com/v2/characters/en';
  private cachedCharacters$: Observable<Character[]> | null = null;

  getAll(): Observable<Character[]> {
    if (this.cachedCharacters$) {
      return this.cachedCharacters$;
    }

    this.cachedCharacters$ = this.http.get<any[]>(this.apiUri).pipe(
      map(apiChars => this.mapAndMergeCharacters(apiChars)),
      catchError(error => {
        console.error('Error loading characters from API, falling back to static database:', error);
        return of(CHARACTERS);
      }),
      shareReplay(1)
    );

    return this.cachedCharacters$;
  }

  getBySlug(slug: string): Observable<Character | undefined> {
    return this.getAll().pipe(
      map(characters => characters.find(c => c.slug === slug))
    );
  }

  private mapAndMergeCharacters(apiChars: any[]): Character[] {
    const staticMap = new Map<string, Character>();
    CHARACTERS.forEach(c => {
      staticMap.set(this.normalizeName(c.name), c);
      staticMap.set(c.slug, c);
    });

    return apiChars.map(apiChar => {
      const name = apiChar.name;
      const slug = this.generateSlug(name);
      const wikiName = this.getWikiName(name);
      const img = `https://onepiece.fandom.com/wiki/Special:FilePath/${wikiName}_Anime_Infobox.png`;

      // Try to find a matching static character
      const staticChar = this.findMatchingStaticCharacter(name, slug, staticMap);

      // Normalization of bounty
      let bounty = 'Desconocida';
      if (apiChar.bounty) {
        bounty = apiChar.bounty.replace(/\./g, ',');
      }

      // Normalization of devil fruit
      let devil_fruit = 'Ninguna';
      if (apiChar.fruit) {
        devil_fruit = apiChar.fruit.roman_name || apiChar.fruit.name || 'Ninguna';
      }

      // Normalization of crew
      let crew = 'Ninguna';
      if (apiChar.crew) {
        crew = this.normalizeCrewName(apiChar.crew.roman_name || apiChar.crew.name || '');
      }

      // Normalization of role
      let role = apiChar.job || 'Pirata';

      if (staticChar) {
        // Merge! Prefer static values for rich metadata, but discard static img and face
        return {
          id: apiChar.id,
          name: staticChar.name,
          slug: staticChar.slug,
          role: staticChar.role || role,
          epithet: staticChar.epithet || '',
          bounty: bounty !== 'Desconocida' ? bounty : staticChar.bounty,
          devil_fruit: staticChar.devil_fruit !== 'Ninguna' ? staticChar.devil_fruit : devil_fruit,
          crew: staticChar.crew || crew,
          img: img, // Discard static image, use constructed API-based wiki URL
          color: staticChar.color,
          border: staticChar.border,
          description: staticChar.description,
          power_level: staticChar.power_level,
          haki: staticChar.haki || []
        };
      } else {
        // Create new character entry from API data
        const color = 'from-slate-700 to-slate-900';
        const border = 'border-slate-600';
        
        // Estimate power level from bounty
        let power_level = 50;
        const cleanBounty = bounty.replace(/[^0-9]/g, '');
        if (cleanBounty) {
          const bountyVal = parseInt(cleanBounty, 10);
          if (bountyVal >= 3000000000) power_level = 95;
          else if (bountyVal >= 1000000000) power_level = 90;
          else if (bountyVal >= 500000000) power_level = 85;
          else if (bountyVal >= 100000000) power_level = 75;
          else if (bountyVal >= 10000000) power_level = 60;
        }

        let desc = `Personaje de One Piece. Rol: ${role}.`;
        if (crew && crew !== 'Ninguna') {
          desc += ` Miembro de: ${crew}.`;
        }
        if (devil_fruit && devil_fruit !== 'Ninguna') {
          desc += ` Comió la fruta del diablo ${devil_fruit}.`;
        }

        return {
          id: apiChar.id,
          name,
          slug,
          role,
          epithet: '',
          bounty,
          devil_fruit,
          crew,
          img, // Use constructed API-based wiki URL
          color,
          border,
          description: desc,
          power_level,
          haki: []
        };
      }
    });
  }

  private getWikiName(name: string): string {
    // Take only the first meaningful name part if there's a slash (e.g. "Baggy / Le Clown" → "Baggy")
    let cleanName = name.split('/')[0].trim();
    // Replace spaces with underscores
    let wikiName = cleanName.replace(/ /g, '_');
    // Normalize middle initials: single letter between underscores gets a dot (e.g. D → D.)
    wikiName = wikiName.replace(/_([A-Z])_/g, '_$1._');
    // Remove any remaining invalid URL characters except underscores and dots
    wikiName = wikiName.replace(/[^\w.]/g, '_');
    return wikiName;
  }

  private normalizeName(name: string): string {
    return name.toLowerCase()
      .replace(/[.\s\-\/']/g, '')
      .replace(/[^a-z0-9]/g, '');
  }

  private generateSlug(name: string): string {
    return name.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private findMatchingStaticCharacter(name: string, slug: string, staticMap: Map<string, Character>): Character | undefined {
    const normApi = this.normalizeName(name);
    
    // 1. Direct normalized name check
    let match = staticMap.get(normApi);
    if (match) return match;

    // 2. Direct slug check
    match = staticMap.get(slug);
    if (match) return match;

    // 3. Scan static characters for containing matches
    for (const [key, staticChar] of staticMap.entries()) {
      const normStatic = this.normalizeName(staticChar.name);
      if (normApi.includes(normStatic) || normStatic.includes(normApi)) {
        return staticChar;
      }
    }
    return undefined;
  }

  private normalizeCrewName(crewName: string): string {
    const nameLower = crewName.toLowerCase();
    
    if (nameLower.includes('chapeau de paille') || nameLower.includes('mugiwara no ichimi')) {
      return 'Piratas del Sombrero de Paja';
    }
    if (nameLower.includes('blackbeard') || nameLower.includes('kurohige')) {
      return 'Piratas de Barbanegra';
    }
    if (nameLower.includes('le roux') || nameLower.includes('akagami')) {
      return 'Piratas del Pelirrojo';
    }
    if (nameLower.includes('hundred beasts') || nameLower.includes('hyakujū') || nameLower.includes('bestias')) {
      return 'Piratas de las Bestias';
    }
    if (nameLower.includes('big mom') || nameLower.includes('biggu mamu')) {
      return 'Piratas de Big Mom';
    }
    if (nameLower.includes('buggy') || nameLower.includes('cross guild')) {
      return 'Cross Guild';
    }
    if (nameLower.includes('barto club')) {
      return 'Barto Club';
    }
    if (nameLower.includes('hermosos') || nameLower.includes('beautiful') || nameLower.includes('cavendish')) {
      return 'Piratas Hermosos';
    }
    if (nameLower.includes('happo')) {
      return 'Armada Happo';
    }
    if (nameLower.includes('giant') || nameLower.includes('gigantes')) {
      return 'Nuevos Piratas Gigantes de Elbaf';
    }
    if (nameLower.includes('tontatta') || nameLower.includes('tonta corps')) {
      return 'Tonta Corps (Tontatta)';
    }
    if (nameLower.includes('bellamy')) {
      return 'Piratas de Bellamy';
    }
    if (nameLower.includes('foxy')) {
      return 'Piratas de Foxy';
    }
    if (nameLower.includes('caribou')) {
      return 'Piratas de Caribou';
    }
    if (nameLower.includes('marine') || nameLower.includes('kaigun')) {
      return 'Marina';
    }
    if (nameLower.includes('révolutionnaire') || nameLower.includes('revolucionario')) {
      return 'Ejército Revolucionario';
    }
    if (nameLower.includes('baroque works')) {
      return 'Baroque Works';
    }
    if (nameLower.includes('cp0') || nameLower.includes('cp9') || nameLower.includes('cipher pol')) {
      return 'CP0';
    }
    if (nameLower.includes('impel down')) {
      return 'Impel Down';
    }
    if (nameLower.includes('ryugu')) {
      return 'Reino de Ryugu';
    }
    if (nameLower.includes('arabasta') || nameLower.includes('alabasta')) {
      return 'Reino de Arabasta';
    }
    if (nameLower.includes('wano')) {
      return 'Aliado Wano';
    }
    if (nameLower.includes('dressrosa')) {
      return 'Aliado Dressrosa';
    }

    // Default: clean format of the crew name from API
    return crewName.split('|')[0].trim();
  }
}

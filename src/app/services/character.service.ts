import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay, switchMap } from 'rxjs/operators';
import { CHARACTERS, Character } from '../data/characters';
import { CharacterImageService } from './character-image.service';

export type { Character };

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private http = inject(HttpClient);
  private imageService = inject(CharacterImageService);
  private apiUri = 'https://api.api-onepiece.com/v2/characters/en';
  private cachedCharacters$: Observable<Character[]> | null = null;

  getAll(): Observable<Character[]> {
    if (this.cachedCharacters$) {
      return this.cachedCharacters$;
    }

    this.cachedCharacters$ = this.http.get<any[]>(this.apiUri).pipe(
      map(apiChars => this.mapAndMergeCharacters(apiChars)),
      switchMap(chars => this.imageService.enrichCharacters(chars)),
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
      const wikiName = this.getWikiFileBase(name);
      const staticChar = this.findMatchingStaticCharacter(name, slug, staticMap);

      const img = staticChar?.img
        || `https://onepiece.fandom.com/wiki/Special:FilePath/${wikiName}_Anime_Post_Timeskip_Infobox.png`;

      const bounty = this.formatBounty(apiChar.bounty, staticChar?.bounty);
      const devil_fruit = this.resolveDevilFruit(apiChar, staticChar);
      const crew = this.resolveCrew(apiChar, staticChar);
      const role = this.translateRole(apiChar.job || staticChar?.role || 'Pirata');
      const status = this.translateStatus(apiChar.status);
      const size = apiChar.size || undefined;
      const age = this.translateAge(apiChar.age);
      const fruit_type = apiChar.fruit?.type || undefined;
      const fruit_description = apiChar.fruit?.description || undefined;
      const fruit_img = apiChar.fruit?.filename || undefined;

      if (staticChar) {
        return {
          id: apiChar.id,
          name: staticChar.name,
          slug: staticChar.slug,
          role: staticChar.role || role,
          epithet: staticChar.epithet || '',
          bounty,
          devil_fruit,
          crew: staticChar.crew || crew,
          img,
          face: staticChar.face,
          color: staticChar.color,
          border: staticChar.border,
          description: staticChar.description,
          power_level: staticChar.power_level,
          haki: staticChar.haki || [],
          size,
          age,
          status,
          fruit_type,
          fruit_description,
          fruit_img
        };
      }

      const color = 'from-slate-700 to-slate-900';
      const border = 'border-slate-600';
      const power_level = this.estimatePowerLevel(bounty);
      const description = this.buildDescription(name, role, crew, devil_fruit, size, age, status, fruit_description);

      return {
        id: apiChar.id,
        name: name.split('/')[0].trim(),
        slug,
        role,
        epithet: '',
        bounty,
        devil_fruit,
        crew,
        img,
        color,
        border,
        description,
        power_level,
        haki: [],
        size,
        age,
        status,
        fruit_type,
        fruit_description,
        fruit_img
      };
    });
  }

  private formatBounty(apiBounty: string | null | undefined, staticBounty?: string): string {
    if (apiBounty) return apiBounty.replace(/\./g, ',');
    return staticBounty || 'Desconocida';
  }

  private resolveDevilFruit(apiChar: any, staticChar?: Character): string {
    if (staticChar?.devil_fruit && staticChar.devil_fruit !== 'Ninguna') return staticChar.devil_fruit;
    if (apiChar.fruit?.roman_name) return apiChar.fruit.roman_name;
    if (apiChar.fruit?.name) return apiChar.fruit.name;
    return 'Ninguna';
  }

  private resolveCrew(apiChar: any, staticChar?: Character): string {
    if (staticChar?.crew) return staticChar.crew;
    if (apiChar.crew) return this.normalizeCrewName(apiChar.crew.roman_name || apiChar.crew.name || '');
    return 'Ninguna';
  }

  private buildDescription(
    name: string, role: string, crew: string, devil_fruit: string,
    size?: string, age?: string, status?: string, fruitDesc?: string
  ): string {
    const parts: string[] = [`${name.split('/')[0].trim()} es un personaje de One Piece.`];
    parts.push(`Rol: ${role}.`);
    if (size) parts.push(`Altura: ${size}.`);
    if (age) parts.push(`Edad: ${age}.`);
    if (status) parts.push(`Estado: ${status}.`);
    if (crew && crew !== 'Ninguna') parts.push(`Pertenece a ${crew}.`);
    if (devil_fruit && devil_fruit !== 'Ninguna') {
      parts.push(`Usuario de la Fruta del Diablo ${devil_fruit}.`);
      if (fruitDesc) parts.push(fruitDesc.slice(0, 200) + (fruitDesc.length > 200 ? '…' : ''));
    }
    return parts.join(' ');
  }

  private estimatePowerLevel(bounty: string): number {
    const cleanBounty = bounty.replace(/[^0-9]/g, '');
    if (!cleanBounty) return 50;
    const bountyVal = parseInt(cleanBounty, 10);
    if (bountyVal >= 3000000000) return 95;
    if (bountyVal >= 1000000000) return 90;
    if (bountyVal >= 500000000) return 85;
    if (bountyVal >= 100000000) return 75;
    if (bountyVal >= 10000000) return 60;
    return 50;
  }

  private translateRole(job: string): string {
    const map: Record<string, string> = {
      'Captain': 'Capitán', 'Right-hand man': 'Brazo Derecho', 'Navigator': 'Navegante',
      'Sniper': 'Francotirador', 'Cook': 'Cocinero', 'Doctor': 'Médico',
      'Archaeologist': 'Arqueóloga', 'Shipwright': 'Carpintero', 'Musician': 'Músico',
      'Helmsman': 'Timonel', 'Swordsman': 'Espadachín', 'First Mate': 'Primer Oficial',
      'Chairman': 'Presidente', 'Admiral': 'Almirante', 'Vice Admiral': 'Vicealmirante',
      'Commander': 'Comandante', 'Officer': 'Oficial', 'Member': 'Miembro',
      'Pirate': 'Pirata', 'Marine': 'Marine', 'Revolutionary': 'Revolucionario'
    };
    return map[job] || job;
  }

  private translateStatus(status: string | null | undefined): string | undefined {
    if (!status) return undefined;
    const map: Record<string, string> = {
      'living': 'Vivo', 'vivant': 'Vivo', 'dead': 'Muerto', 'mort': 'Muerto',
      'unknown': 'Desconocido', 'inconnu': 'Desconocido'
    };
    return map[status.toLowerCase()] || status;
  }

  private translateAge(age: string | null | undefined): string | undefined {
    if (!age) return undefined;
    return age.replace(/\s*ans\s*$/i, ' años');
  }

  private getWikiFileBase(name: string): string {
    let cleanName = name.split('/')[0].trim();
    let wikiName = cleanName.replace(/ /g, '_');
    wikiName = wikiName.replace(/_([A-Z])_/g, '_$1._');
    return wikiName.replace(/[^\w.]/g, '_');
  }

  private normalizeName(name: string): string {
    return name.toLowerCase()
      .replace(/[.\s\-\/']/g, '')
      .replace(/[^a-z0-9]/g, '');
  }

  private generateSlug(name: string): string {
    return name.split('/')[0].trim().toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private findMatchingStaticCharacter(name: string, slug: string, staticMap: Map<string, Character>): Character | undefined {
    const normApi = this.normalizeName(name);
    let match = staticMap.get(normApi);
    if (match) return match;
    match = staticMap.get(slug);
    if (match) return match;
    for (const [, staticChar] of staticMap.entries()) {
      const normStatic = this.normalizeName(staticChar.name);
      if (normApi.includes(normStatic) || normStatic.includes(normApi)) return staticChar;
    }
    return undefined;
  }

  private normalizeCrewName(crewName: string): string {
    const nameLower = crewName.toLowerCase();
    if (nameLower.includes('chapeau de paille') || nameLower.includes('mugiwara no ichimi')) return 'Piratas del Sombrero de Paja';
    if (nameLower.includes('blackbeard') || nameLower.includes('kurohige')) return 'Piratas de Barbanegra';
    if (nameLower.includes('le roux') || nameLower.includes('akagami')) return 'Piratas del Pelirrojo';
    if (nameLower.includes('hundred beasts') || nameLower.includes('hyakujū') || nameLower.includes('bestias')) return 'Piratas de las Bestias';
    if (nameLower.includes('big mom') || nameLower.includes('biggu mamu')) return 'Piratas de Big Mom';
    if (nameLower.includes('buggy') || nameLower.includes('baggy') || nameLower.includes('cross guild')) return 'Cross Guild';
    if (nameLower.includes('barto club')) return 'Barto Club';
    if (nameLower.includes('hermosos') || nameLower.includes('beautiful') || nameLower.includes('cavendish')) return 'Piratas Hermosos';
    if (nameLower.includes('happo')) return 'Armada Happo';
    if (nameLower.includes('giant') || nameLower.includes('gigantes')) return 'Nuevos Piratas Gigantes de Elbaf';
    if (nameLower.includes('tontatta') || nameLower.includes('tonta corps')) return 'Tonta Corps (Tontatta)';
    if (nameLower.includes('bellamy')) return 'Piratas de Bellamy';
    if (nameLower.includes('foxy')) return 'Piratas de Foxy';
    if (nameLower.includes('caribou')) return 'Piratas de Caribou';
    if (nameLower.includes('marine') || nameLower.includes('kaigun')) return 'Marina';
    if (nameLower.includes('révolutionnaire') || nameLower.includes('revolucionario')) return 'Ejército Revolucionario';
    if (nameLower.includes('baroque works')) return 'Baroque Works';
    if (nameLower.includes('cp0') || nameLower.includes('cp9') || nameLower.includes('cipher pol')) return 'CP0';
    if (nameLower.includes('impel down')) return 'Impel Down';
    if (nameLower.includes('ryugu')) return 'Reino de Ryugu';
    if (nameLower.includes('arabasta') || nameLower.includes('alabasta')) return 'Reino de Arabasta';
    if (nameLower.includes('wano')) return 'Aliado Wano';
    if (nameLower.includes('dressrosa')) return 'Aliado Dressrosa';
    return crewName.split('|')[0].trim();
  }
}

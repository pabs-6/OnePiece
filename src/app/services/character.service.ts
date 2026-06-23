import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CHARACTERS, Character } from '../data/characters';

export type { Character };

@Injectable({ providedIn: 'root' })
export class CharacterService {
  getAll(): Observable<Character[]> {
    return of(CHARACTERS);
  }

  getBySlug(slug: string): Observable<Character | undefined> {
    return this.getAll().pipe(map(characters => characters.find(c => c.slug === slug)));
  }
}

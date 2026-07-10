import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SHIPS, Ship } from '../data/ships';

export type { Ship };

@Injectable({ providedIn: 'root' })
export class ShipsService {
  getAll(): Observable<Ship[]> {
    return of([...SHIPS].sort((a, b) => a.order - b.order));
  }

  getBySlug(slug: string): Observable<Ship | undefined> {
    return this.getAll().pipe(map(ships => ships.find(s => s.slug === slug)));
  }
}

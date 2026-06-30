import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JOURNEY_LOCATIONS, JourneyLocation } from '../data/journey';

export type { JourneyLocation };

@Injectable({ providedIn: 'root' })
export class JourneyService {
  getAll(): Observable<JourneyLocation[]> {
    return of([...JOURNEY_LOCATIONS].sort((a, b) => a.order - b.order));
  }

  getBySlug(slug: string): Observable<JourneyLocation | undefined> {
    return this.getAll().pipe(map(locations => locations.find(l => l.slug === slug)));
  }
}

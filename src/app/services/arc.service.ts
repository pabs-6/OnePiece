import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ARCS, Arc } from '../data/arcs';

export type { Arc };

@Injectable({ providedIn: 'root' })
export class ArcService {
  getAll(): Observable<Arc[]> {
    return of([...ARCS].sort((a, b) => a.order - b.order));
  }

  getBySlug(slug: string): Observable<Arc | undefined> {
    return this.getAll().pipe(map(arcs => arcs.find(a => a.slug === slug)));
  }

  getById(id: string): Observable<Arc | undefined> {
    return this.getAll().pipe(map(arcs => arcs.find(a => a.id === id)));
  }

  getBySagaId(sagaId: string): Observable<Arc[]> {
    return this.getAll().pipe(map(arcs => arcs.filter(a => a.sagaId === sagaId)));
  }
}

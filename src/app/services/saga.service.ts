import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SAGAS, Saga } from '../data/sagas';

export type { Saga };

@Injectable({ providedIn: 'root' })
export class SagaService {
  getAll(): Observable<Saga[]> {
    return of([...SAGAS].sort((a, b) => a.order - b.order));
  }

  getBySlug(slug: string): Observable<Saga | undefined> {
    return this.getAll().pipe(map(sagas => sagas.find(s => s.slug === slug)));
  }

  getById(id: string): Observable<Saga | undefined> {
    return this.getAll().pipe(map(sagas => sagas.find(s => s.id === id)));
  }
}

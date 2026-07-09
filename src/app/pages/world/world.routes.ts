import { Routes } from '@angular/router';

export const WORLD_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./world-hub/world-hub.component').then(m => m.WorldHubComponent) },
  { path: 'journey', loadComponent: () => import('./journey/journey.component').then(m => m.JourneyComponent) },
  { path: 'sagas', loadComponent: () => import('./sagas/sagas.component').then(m => m.SagasComponent) },
  { path: 'movies', loadComponent: () => import('./movies/movies.component').then(m => m.MoviesComponent) },
  { path: 'soundtrack', loadComponent: () => import('./soundtrack/soundtrack.component').then(m => m.SoundtrackComponent) },
];

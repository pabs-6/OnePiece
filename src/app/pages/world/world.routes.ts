import { Routes } from '@angular/router';

export const WORLD_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./world-hub/world-hub.component').then(m => m.WorldHubComponent) },
  { path: 'journey', loadComponent: () => import('./journey/journey.component').then(m => m.JourneyComponent) },
];

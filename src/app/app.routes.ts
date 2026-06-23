import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'characters', loadComponent: () => import('./pages/characters/characters.component').then(m => m.CharactersComponent) },
  { path: 'characters/:slug', loadComponent: () => import('./pages/characters/character-detail/character-detail.component').then(m => m.CharacterDetailComponent) },
  { path: 'factions', loadComponent: () => import('./pages/factions/factions.component').then(m => m.FactionsComponent) },
  { path: 'fruits', loadComponent: () => import('./pages/fruits/fruits.component').then(m => m.FruitsComponent) },
  { path: 'theories', loadComponent: () => import('./pages/theories/theories.component').then(m => m.TheoriesComponent) },
  { path: '**', redirectTo: '' }
];

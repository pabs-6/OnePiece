import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'characters', loadComponent: () => import('./pages/characters/characters.component').then(m => m.CharactersComponent) },
  { path: 'characters/:slug', loadComponent: () => import('./pages/characters/character-detail/character-detail.component').then(m => m.CharacterDetailComponent) },
  { path: 'factions', loadComponent: () => import('./pages/factions/factions.component').then(m => m.FactionsComponent) },
  { path: 'fruits', loadComponent: () => import('./pages/fruits/fruits.component').then(m => m.FruitsComponent) },
  { path: 'wanted', loadComponent: () => import('./pages/wanted/wanted.component').then(m => m.WantedComponent) },
  { path: 'versus', loadComponent: () => import('./pages/versus/versus.component').then(m => m.VersusComponent) },
  { path: 'haki-meito', loadComponent: () => import('./pages/haki-meito/haki-meito.component').then(m => m.HakiMeitoComponent) },
  { path: 'theories', loadComponent: () => import('./pages/theories/theories.component').then(m => m.TheoriesComponent) },
  { path: 'world', loadChildren: () => import('./pages/world/world.routes').then(m => m.WORLD_ROUTES) },
  { path: '**', redirectTo: '' }
];

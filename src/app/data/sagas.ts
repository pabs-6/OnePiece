export interface Saga {
  id: string;
  slug: string;
  name: string;
  order: number;
}

export const SAGAS: Saga[] = [
  { id: 'east-blue-saga', slug: 'east-blue-saga', name: 'Saga de East Blue', order: 1 },
  { id: 'alabasta-saga', slug: 'alabasta-saga', name: 'Saga de Alabasta', order: 2 },
  { id: 'skypiea-saga', slug: 'skypiea-saga', name: 'Saga de Skypiea', order: 3 },
  { id: 'water-seven-saga', slug: 'water-seven-saga', name: 'Saga de Water Seven', order: 4 },
  { id: 'thriller-bark-saga', slug: 'thriller-bark-saga', name: 'Saga de Thriller Bark', order: 5 },
  { id: 'marineford-saga', slug: 'marineford-saga', name: 'Saga de la Guerra de Marineford', order: 6 },
  { id: 'fishman-island-saga', slug: 'fishman-island-saga', name: 'Saga de la Isla Gyojin', order: 7 },
  { id: 'dressrosa-saga', slug: 'dressrosa-saga', name: 'Saga de Dressrosa', order: 8 },
  { id: 'whole-cake-island-saga', slug: 'whole-cake-island-saga', name: 'Saga de Whole Cake Island', order: 9 },
  { id: 'wano-saga', slug: 'wano-saga', name: 'Saga de Wano Kuni', order: 10 },
  { id: 'egghead-saga', slug: 'egghead-saga', name: 'Saga de Egghead', order: 11 },
  { id: 'elbaf-saga', slug: 'elbaf-saga', name: 'Saga de Elbaf', order: 12 },
];

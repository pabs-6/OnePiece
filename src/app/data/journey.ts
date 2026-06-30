export type OceanTheme = 'east-blue' | 'grand-line' | 'skypiea' | 'florian-triangle' | 'underwater' | 'new-world';

export interface JourneyLocation {
  id: string;
  slug: string;
  name: string;
  sea: string;
  arcId: string;
  order: number;
  /** Parada principal de la etapa vs. localización intermedia/secundaria. */
  major: boolean;
  /** Ambientación del océano/cielo/fondo marino que rodea esta parada,
   *  para que el componente visual pueda variar color y efectos por región. */
  oceanTheme: OceanTheme;
  /** IDs (de characters.ts) de los tripulantes que van a bordo al salir de esta parada.
   *  Varía con la historia: reclutamientos, la salida temporal de Usopp en Water Seven/Enies Lobby,
   *  o la separación del grupo en Amazon Lily/Impel Down/Marineford/Rusukaina. */
  crewIds: number[];
  image?: string;
  description?: string;
}

const w = (filename: string) => `https://onepiece.fandom.com/wiki/Special:FilePath/${filename}`;

// Ruta curada de las GRANDES etapas del viaje de los Mugiwara (no una wiki exhaustiva):
// se eliminaron sub-localizaciones sin peso visual/emocional propio y se fusionaron
// las que representan la misma zona (Alubarna -> Alabasta, Mock Town -> Jaya,
// Upper Yard -> Skypiea, Water Seven 2ª visita eliminada, Florian Triangle -> Thriller Bark).
//
// Las 8 islas de entrenamiento del timeskip y las ramas de la separación de Whole Cake
// se eliminaron a propósito: esas separaciones se representarán más adelante como
// eventos visuales / líneas secundarias, no como paradas del timeline principal.
export const JOURNEY_LOCATIONS: JourneyLocation[] = [
  // ===== EAST BLUE ===== (1 Luffy, 2 Zoro, 3 Nami, 4 Usopp, 5 Sanji se van uniendo arco a arco)
  { id: 'foosha-village', slug: 'foosha-village', name: 'Foosha Village', sea: 'East Blue', arcId: 'east-blue', order: 1, major: true, oceanTheme: 'east-blue', image: '/img/journey/fooshaVillage.png', crewIds: [1] },
  { id: 'shells-town', slug: 'shells-town', name: 'Shells Town', sea: 'East Blue', arcId: 'east-blue', order: 2, major: false, oceanTheme: 'east-blue', image: '/img/journey/shellsTown.png', crewIds: [1, 2] },
  { id: 'orange-town', slug: 'orange-town', name: 'Orange Town', sea: 'East Blue', arcId: 'east-blue', order: 3, major: false, oceanTheme: 'east-blue', image: '/img/journey/orangeTown.png', crewIds: [1, 2, 3] },
  { id: 'syrup-village', slug: 'syrup-village', name: 'Syrup Village', sea: 'East Blue', arcId: 'east-blue', order: 4, major: true, oceanTheme: 'east-blue', image: '/img/journey/syrupVillage.png', crewIds: [1, 2, 3, 4] },
  { id: 'baratie', slug: 'baratie', name: 'Baratie', sea: 'East Blue', arcId: 'east-blue', order: 5, major: true, oceanTheme: 'east-blue', image: '/img/journey/baratie.png', crewIds: [1, 2, 3, 4, 5] },
  { id: 'arlong-park', slug: 'arlong-park', name: 'Arlong Park', sea: 'East Blue', arcId: 'east-blue', order: 6, major: true, oceanTheme: 'east-blue', image: '/img/journey/arlongPark.png', crewIds: [1, 2, 3, 4, 5] },
  { id: 'loguetown', slug: 'loguetown', name: 'Loguetown', sea: 'East Blue', arcId: 'east-blue', order: 7, major: true, oceanTheme: 'east-blue', image: '/img/journey/logueTown.png', crewIds: [1, 2, 3, 4, 5] },

  // ===== ENTRADA AL GRAND LINE =====
  { id: 'reverse-mountain', slug: 'reverse-mountain', name: 'Reverse Mountain', sea: 'Grand Line - Paradise', arcId: 'alabasta', order: 8, major: false, oceanTheme: 'grand-line', image: '/img/journey/reverseMountain.png', crewIds: [1, 2, 3, 4, 5] },
  { id: 'twin-cape', slug: 'twin-cape', name: 'Twin Cape (Laboon)', sea: 'Grand Line - Paradise', arcId: 'alabasta', order: 9, major: true, oceanTheme: 'grand-line', image: '/img/journey/cabosGemelos.png', crewIds: [1, 2, 3, 4, 5] },

  // ===== ALABASTA ===== (6 Chopper se une en Drum Island, 7 Robin al final de Alabasta)
  { id: 'whiskey-peak', slug: 'whiskey-peak', name: 'Whiskey Peak', sea: 'Grand Line - Paradise', arcId: 'alabasta', order: 10, major: false, oceanTheme: 'grand-line', image: '/img/journey/whiskeyPeak.png', crewIds: [1, 2, 3, 4, 5] },
  { id: 'little-garden', slug: 'little-garden', name: 'Little Garden', sea: 'Grand Line - Paradise', arcId: 'alabasta', order: 11, major: false, oceanTheme: 'grand-line', image: '/img/journey/littleGarden.png', crewIds: [1, 2, 3, 4, 5] },
  { id: 'drum-island', slug: 'drum-island', name: 'Drum Island', sea: 'Grand Line - Paradise', arcId: 'alabasta', order: 12, major: true, oceanTheme: 'grand-line', crewIds: [1, 2, 3, 4, 5, 6] },
  { id: 'alabasta', slug: 'alabasta', name: 'Alabasta', sea: 'Grand Line - Paradise', arcId: 'alabasta', order: 13, major: true, oceanTheme: 'grand-line', image: w('Arabasta_Kingdom_Infobox.png'), crewIds: [1, 2, 3, 4, 5, 6, 7] },

  // ===== SKYPIEA =====
  { id: 'jaya', slug: 'jaya', name: 'Jaya', sea: 'Grand Line - Paradise', arcId: 'skypiea', order: 14, major: true, oceanTheme: 'grand-line', crewIds: [1, 2, 3, 4, 5, 6, 7] },
  { id: 'skypiea', slug: 'skypiea', name: 'Skypiea', sea: 'Grand Line - Paradise', arcId: 'skypiea', order: 15, major: true, oceanTheme: 'skypiea', image: w('Skypiea_Infobox.png'), crewIds: [1, 2, 3, 4, 5, 6, 7] },

  // ===== WATER SEVEN ===== (Usopp deja temporalmente la tripulación durante Enies Lobby)
  { id: 'long-ring-long-land', slug: 'long-ring-long-land', name: 'Long Ring Long Land', sea: 'Grand Line - Paradise', arcId: 'water-seven-enies-lobby', order: 16, major: false, oceanTheme: 'grand-line', crewIds: [1, 2, 3, 4, 5, 6, 7] },
  { id: 'water-seven', slug: 'water-seven', name: 'Water Seven', sea: 'Grand Line - Paradise', arcId: 'water-seven-enies-lobby', order: 17, major: true, oceanTheme: 'grand-line', image: w('Water_7_Infobox.png'), crewIds: [1, 2, 3, 4, 5, 6, 7] },
  { id: 'enies-lobby', slug: 'enies-lobby', name: 'Enies Lobby', sea: 'Grand Line - Paradise', arcId: 'water-seven-enies-lobby', order: 18, major: true, oceanTheme: 'grand-line', crewIds: [1, 2, 3, 5, 6, 7] },

  // ===== THRILLER BARK (representa también el Florian Triangle) ===== Usopp regresa; 8 Franky y 9 Brook se unen
  { id: 'thriller-bark', slug: 'thriller-bark', name: 'Thriller Bark', sea: 'Grand Line - Paradise', arcId: 'thriller-bark', order: 19, major: true, oceanTheme: 'florian-triangle', image: w('Thriller_Bark_Infobox.png'), crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9] },

  // ===== SUMMIT WAR ===== (la tripulación se separa: solo Luffy llega hasta Marineford)
  { id: 'sabaody-archipelago', slug: 'sabaody-archipelago', name: 'Sabaody Archipelago', sea: 'Grand Line - Paradise', arcId: 'marineford', order: 20, major: true, oceanTheme: 'grand-line', crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { id: 'amazon-lily', slug: 'amazon-lily', name: 'Amazon Lily', sea: 'Grand Line - Paradise', arcId: 'marineford', order: 21, major: true, oceanTheme: 'grand-line', crewIds: [1] },
  { id: 'impel-down', slug: 'impel-down', name: 'Impel Down', sea: 'Grand Line - Paradise', arcId: 'marineford', order: 22, major: true, oceanTheme: 'grand-line', crewIds: [1] },
  { id: 'marineford', slug: 'marineford', name: 'Marineford', sea: 'Grand Line - Paradise', arcId: 'marineford', order: 23, major: true, oceanTheme: 'grand-line', image: w('Marine_Headquarters_Infobox.png'), crewIds: [1] },
  { id: 'rusukaina', slug: 'rusukaina', name: 'Rusukaina', sea: 'Grand Line - Paradise', arcId: 'marineford', order: 24, major: false, oceanTheme: 'grand-line', crewIds: [1] },

  // ===== REUNIÓN ===== (la tripulación completa se reagrupa)
  { id: 'sabaody-archipelago-reunion', slug: 'sabaody-archipelago-reunion', name: 'Sabaody Archipelago (Reencuentro)', sea: 'Grand Line - Paradise', arcId: 'fishman-island', order: 25, major: true, oceanTheme: 'grand-line', crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9] },

  // ===== NUEVO MUNDO ===== (10 Jinbe se incorpora desde Fish-Man Island)
  { id: 'fishman-island', slug: 'fishman-island', name: 'Fish-Man Island', sea: 'Grand Line - New World', arcId: 'fishman-island', order: 26, major: true, oceanTheme: 'underwater', image: w('Fish-Man_Island_Infobox.png'), crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { id: 'punk-hazard', slug: 'punk-hazard', name: 'Punk Hazard', sea: 'Grand Line - New World', arcId: 'dressrosa', order: 27, major: false, oceanTheme: 'new-world', crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { id: 'dressrosa', slug: 'dressrosa', name: 'Dressrosa', sea: 'Grand Line - New World', arcId: 'dressrosa', order: 28, major: true, oceanTheme: 'new-world', image: w('Dressrosa_Infobox.png'), crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { id: 'zou', slug: 'zou', name: 'Zou', sea: 'Grand Line - New World', arcId: 'whole-cake-island', order: 29, major: true, oceanTheme: 'new-world', crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },

  // ===== WHOLE CAKE =====
  { id: 'whole-cake-island', slug: 'whole-cake-island', name: 'Whole Cake Island', sea: 'Grand Line - New World', arcId: 'whole-cake-island', order: 30, major: true, oceanTheme: 'new-world', image: w('Whole_Cake_Island_Infobox.png'), crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },

  // ===== WANO =====
  { id: 'wano-country', slug: 'wano-country', name: 'Wano Country', sea: 'Grand Line - New World', arcId: 'wano-kuni', order: 31, major: true, oceanTheme: 'new-world', image: w('Wano_Country_Infobox.png'), crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },

  // ===== FINAL SAGA =====
  { id: 'egghead', slug: 'egghead', name: 'Egghead', sea: 'Grand Line - New World', arcId: 'egghead', order: 32, major: true, oceanTheme: 'new-world', image: w('Egghead_Infobox.png'), crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { id: 'elbaf', slug: 'elbaf', name: 'Elbaf', sea: 'Grand Line - New World', arcId: 'elbaf', order: 33, major: true, oceanTheme: 'new-world', crewIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
];

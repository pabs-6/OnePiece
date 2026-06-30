export interface Arc {
  id: string;
  slug: string;
  name: string;
  sagaId: string;
  order: number;
  chapterRange: { start: number; end?: number };
  color?: string;
  icon?: string;
  description?: string;
}

// chapterRange es provisional: hay capítulos de chapters.ts que caen fuera de estos
// rangos (ej. Sabaody Archipiélago, Zou) porque hoy es 1 saga = 1 arco. Se revisará
// al migrar chapters.ts.
export const ARCS: Arc[] = [
  {
    id: 'east-blue', slug: 'east-blue', name: 'East Blue', sagaId: 'east-blue-saga', order: 1,
    chapterRange: { start: 1, end: 100 }, color: 'from-blue-700 to-blue-950', icon: '⚓',
    description: 'El inicio del viaje. Luffy recluta a Zoro, Nami, Usopp y Sanji. El arco de Arlong establece los temas emocionales de toda la serie.'
  },
  {
    id: 'alabasta', slug: 'alabasta', name: 'Alabasta', sagaId: 'alabasta-saga', order: 2,
    chapterRange: { start: 101, end: 217 }, color: 'from-amber-700 to-amber-950', icon: '🏜️',
    description: 'El Gran Line comienza. La princesa Vivi y la batalla contra Crocodile en el desierto. Primera gran revelación del Gobierno Mundial.'
  },
  {
    id: 'skypiea', slug: 'skypiea', name: 'Skypiea', sagaId: 'skypiea-saga', order: 3,
    chapterRange: { start: 218, end: 302 }, color: 'from-yellow-600 to-orange-950', icon: '☁️',
    description: 'Una isla en las nubes con dioses y campanas. Oda siembra las semillas del Haki y la historia de Joy Boy 400 años antes.'
  },
  {
    id: 'water-seven-enies-lobby', slug: 'water-seven-enies-lobby', name: 'Water 7 / Enies Lobby', sagaId: 'water-seven-saga', order: 4,
    chapterRange: { start: 303, end: 441 }, color: 'from-cyan-700 to-slate-950', icon: '🌊',
    description: 'El arco de la traición y la redención. Robin y el Gobierno Mundial. La icónica declaración de guerra de Luffy.'
  },
  {
    id: 'thriller-bark', slug: 'thriller-bark', name: 'Thriller Bark', sagaId: 'thriller-bark-saga', order: 5,
    chapterRange: { start: 442, end: 490 }, color: 'from-violet-800 to-black', icon: '💀',
    description: 'El arco de Brook, los zombies y Moria. Zoro demuestra su lealtad suprema absorbiendo el dolor de Luffy en silencio.'
  },
  {
    id: 'marineford', slug: 'marineford', name: 'Marineford', sagaId: 'marineford-saga', order: 6,
    chapterRange: { start: 550, end: 580 }, color: 'from-red-700 to-red-950', icon: '⚔️',
    description: 'La guerra más devastadora del manga. La muerte de Ace sacude al mundo. Luffy pierde todo y debe reconstruirse.'
  },
  {
    id: 'fishman-island', slug: 'fishman-island', name: 'Timeskip + Fishman Island', sagaId: 'fishman-island-saga', order: 7,
    chapterRange: { start: 598, end: 653 }, color: 'from-teal-700 to-teal-950', icon: '🐠',
    description: 'Dos años de entrenamiento. Los Mugiwaras regresan más fuertes. La promesa de Joy Boy y la Reina Poseidón se revelan.'
  },
  {
    id: 'dressrosa', slug: 'dressrosa', name: 'Dressrosa', sagaId: 'dressrosa-saga', order: 8,
    chapterRange: { start: 700, end: 801 }, color: 'from-pink-700 to-rose-950', icon: '🌹',
    description: 'El Reino de los Juguetes y Doflamingo. Luffy usa Gear 4 por primera vez. Sabo regresa de entre los muertos.'
  },
  {
    id: 'whole-cake-island', slug: 'whole-cake-island', name: 'Whole Cake Island', sagaId: 'whole-cake-island-saga', order: 9,
    chapterRange: { start: 825, end: 902 }, color: 'from-fuchsia-700 to-purple-950', icon: '🎂',
    description: 'El territorio de Big Mom. Los orígenes de Sanji se revelan. Luffy sobrevive imposibles y derrota a Katakuri.'
  },
  {
    id: 'wano-kuni', slug: 'wano-kuni', name: 'Wano Kuni', sagaId: 'wano-saga', order: 10,
    chapterRange: { start: 909, end: 1057 }, color: 'from-red-800 to-yellow-950', icon: '🗡️',
    description: 'El arco más largo y épico. Kaido cae. El Gear 5 y la forma de Nika cambian todo. El Siglo Vacío comienza a abrirse.'
  },
  {
    id: 'egghead', slug: 'egghead', name: 'Egghead', sagaId: 'egghead-saga', order: 11,
    chapterRange: { start: 1058, end: 1112 }, color: 'from-indigo-700 to-indigo-950', icon: '🤖',
    description: 'La isla del futuro y Vegapunk. Los Gorosei revelan sus formas monstruosas. La transmisión global sacude al mundo entero.'
  },
  {
    id: 'elbaf', slug: 'elbaf', name: 'Elbaf', sagaId: 'elbaf-saga', order: 12,
    chapterRange: { start: 1113 }, color: 'from-green-700 to-emerald-950', icon: '🌲',
    description: 'La tierra prometida de los gigantes. Los secretos de Shanks, el destino de Usopp y el camino al One Piece se acercan.'
  },
];

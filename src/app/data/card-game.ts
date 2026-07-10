export interface CardGameDeck {
  id: number;
  code: string;
  name: string;
  color: string;
  icon: string;
  gradient: string;
  leader: string;
  description: string;
  order: number;
}

export const CARD_GAME_DECKS: CardGameDeck[] = [
  {
    id: 1, code: 'ST-01', name: 'Straw Hat Crew', color: 'Rojo', icon: '🔴', gradient: 'from-red-700 to-red-950',
    leader: 'Monkey D. Luffy',
    description: 'El mazo inicial por excelencia, centrado en la tripulación original de Sombrero de Paja.',
    order: 1
  },
  {
    id: 2, code: 'ST-02', name: 'Worst Generation', color: 'Verde', icon: '🟢', gradient: 'from-green-700 to-green-950',
    leader: 'Trafalgar Law',
    description: 'Reúne a los Piratas Heart y a varios miembros de la Peor Generación bajo el mando del Cirujano de la Muerte.',
    order: 2
  },
  {
    id: 3, code: 'ST-03', name: 'The Seven Warlords of the Sea', color: 'Azul', icon: '🔵', gradient: 'from-blue-700 to-blue-950',
    leader: 'Crocodile',
    description: 'Los antiguos Shichibukai, corsarios que operaron bajo el amparo del Gobierno Mundial.',
    order: 3
  },
  {
    id: 4, code: 'ST-04', name: 'Animal Kingdom Pirates', color: 'Morado', icon: '🟣', gradient: 'from-purple-700 to-purple-950',
    leader: 'Kaido',
    description: 'El temible ejército de usuarios Zoan que dominó Wano bajo el puño de la Criatura más fuerte del mundo.',
    order: 4
  },
  {
    id: 5, code: 'ST-06', name: 'Absolute Justice', color: 'Azul', icon: '🔵', gradient: 'from-blue-800 to-slate-950',
    leader: 'Smoker',
    description: 'La Marina y su doctrina de Justicia Absoluta, con Smoker liderando la persecución de los Sombrero de Paja.',
    order: 5
  },
  {
    id: 6, code: 'ST-09', name: 'Yamato', color: 'Morado', icon: '🟣', gradient: 'from-indigo-700 to-purple-950',
    leader: 'Yamato',
    description: 'La hija de Kaido, decidida a vivir como Kozuki Oden y liberar a Wano de su padre.',
    order: 6
  },
  {
    id: 7, code: 'ST-13', name: 'The Three Brothers', color: 'Rojo', icon: '🔴', gradient: 'from-orange-700 to-red-950',
    leader: 'Luffy / Ace / Sabo',
    description: 'Los tres hermanos unidos por un mismo vaso de sake: Luffy, Ace y Sabo.',
    order: 7
  },
  {
    id: 8, code: 'ST-14', name: '3D2Y', color: 'Rojo', icon: '🔴', gradient: 'from-red-800 to-black',
    leader: 'Monkey D. Luffy',
    description: 'El Luffy renovado tras los dos años de entrenamiento junto a Rayleigh, listo para el Nuevo Mundo.',
    order: 8
  },
];

export interface CardGameMechanic {
  name: string;
  icon: string;
  description: string;
}

export const CARD_GAME_MECHANICS: CardGameMechanic[] = [
  { name: 'Líder', icon: '👑', description: 'La carta que define el mazo y el color permitido; empieza siempre en el campo de batalla.' },
  { name: 'DON!!', icon: '💥', description: 'El recurso que se adjunta a personajes o al líder para potenciar su ataque.' },
  { name: 'Vida', icon: '❤️', description: 'Cartas boca abajo que actúan de escudo; al recibir daño se revelan y pasan a la mano.' },
  { name: 'Trigger', icon: '⚡', description: 'Efecto oculto en una carta de Vida que se activa al ser revelada, dando ventaja extra.' },
];

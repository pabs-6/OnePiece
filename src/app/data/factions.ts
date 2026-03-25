export interface Faction {
  id: number;
  name: string;
  type: string;
  jolly_roger: string;
  color: string;
  bg_gradient: string;
  leader: string;
  description: string;
  key_members: string[];
}

const w = (filename: string) => `https://onepiece.fandom.com/wiki/Special:FilePath/${filename.replace(/'/g, '%27')}`;

export const FACTIONS: Faction[] = [
  {
    id: 1, name: 'Piratas del Sombrero de Paja', type: 'Tripulación Yonko',
    jolly_roger: w("Straw_Hat_Pirates'_Jolly_Roger.png"),
    color: 'text-red-500', bg_gradient: 'from-red-900/40 to-black', leader: 'Monkey D. Luffy',
    description: 'La tripulación que está cambiando el mundo, liderada por el hombre que liberará a todos.',
    key_members: ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky', 'Brook', 'Jinbe']
  },
  {
    id: 8, name: 'Piratas de Roger', type: 'Tripulación Legendaria',
    jolly_roger: w("Roger_Pirates'_Jolly_Roger.png"),
    color: 'text-yellow-600', bg_gradient: 'from-amber-900/40 to-black', leader: 'Gol D. Roger',
    description: 'La única tripulación en conquistar el Grand Line y llegar a Laugh Tale.',
    key_members: ['Roger', 'Rayleigh', 'Gaban', 'Shanks', 'Buggy', 'Oden']
  },
  {
    id: 9, name: 'Piratas de Rocks', type: 'Sujetos Históricos',
    jolly_roger: w("Rocks_Pirates'_Jolly_Roger.png"),
    color: 'text-gray-400', bg_gradient: 'from-gray-800/40 to-black', leader: 'Rocks D. Xebec',
    description: 'La tripulación más peligrosa de la historia, borrada de los registros.',
    key_members: ['Rocks', 'Whitebeard', 'Big Mom', 'Kaido', 'Shiki']
  },
  {
    id: 10, name: 'Piratas de Barbablanca', type: 'Antigua Tripulación Yonko',
    jolly_roger: w("Whitebeard_Pirates'_Jolly_Roger.png"),
    color: 'text-blue-300', bg_gradient: 'from-blue-900/40 to-black', leader: 'Edward Newgate',
    description: 'Navegaron bajo la bandera del "Hombre más fuerte del mundo".',
    key_members: ['Newgate', 'Marco', 'Ace', 'Jozu', 'Vista', 'Izo']
  },
  {
    id: 2, name: 'La Marina', type: 'Justicia Absoluta',
    jolly_roger: w('Marine_Logo.png'),
    color: 'text-blue-500', bg_gradient: 'from-blue-800/40 to-black', leader: 'Akainu',
    description: 'La fuerza militar global del Gobierno Mundial.',
    key_members: ['Akainu', 'Kizaru', 'Fujitora', 'Garp', 'Sengoku']
  },
  {
    id: 3, name: 'Ejército Revolucionario', type: 'Rebeldes',
    jolly_roger: w('Revolutionary_Army_Logo.png'),
    color: 'text-green-500', bg_gradient: 'from-green-900/40 to-black', leader: 'Monkey D. Dragon',
    description: 'Buscando derrocar el sistema corrupto de los Dragones Celestiales.',
    key_members: ['Dragon', 'Sabo', 'Ivankov', 'Kuma', 'Koala']
  },
  {
    id: 4, name: 'Cross Guild', type: 'Sindicato Yonko',
    jolly_roger: w('Cross_Guild_Jolly_Roger.png'),
    color: 'text-amber-500', bg_gradient: 'from-yellow-900/40 to-black', leader: 'Buggy',
    description: 'La peligrosa alianza que pone precio a las cabezas de la Marina.',
    key_members: ['Buggy', 'Mihawk', 'Crocodile', 'Galdino']
  },
  {
    id: 5, name: 'Piratas de Barbanegra', type: 'Tripulación Yonko',
    jolly_roger: w("Blackbeard_Pirates'_Jolly_Roger.png"),
    color: 'text-purple-600', bg_gradient: 'from-purple-900/40 to-black', leader: 'Marshall D. Teach',
    description: 'Cazadores de frutas del diablo y caos en el Nuevo Mundo.',
    key_members: ['Teach', 'Shiryu', 'Kuzan', 'Laffitte', 'Augur']
  },
  {
    id: 11, name: 'Piratas del Pelirrojo', type: 'Tripulación Yonko',
    jolly_roger: w("Red_Hair_Pirates'_Jolly_Roger.png"),
    color: 'text-red-700', bg_gradient: 'from-red-950/40 to-black', leader: 'Shanks',
    description: 'La tripulación más equilibrada y con el Haki más poderoso.',
    key_members: ['Shanks', 'Beckman', 'Roux', 'Yasopp']
  },
  {
    id: 6, name: 'Piratas de las Bestias', type: 'Antigua Tripulación Yonko',
    jolly_roger: w("Beasts_Pirates'_Jolly_Roger.png"),
    color: 'text-purple-400', bg_gradient: 'from-gray-800/40 to-black', leader: 'Kaido',
    description: 'Ejército de usuarios Zoan que dominó Wano con puño de hierro.',
    key_members: ['Kaido', 'King', 'Queen', 'Jack', 'Yamato (Ex)']
  },
  {
    id: 7, name: 'Piratas de Big Mom', type: 'Antigua Tripulación Yonko',
    jolly_roger: w("Big_Mom_Pirates'_Jolly_Roger.png"),
    color: 'text-pink-500', bg_gradient: 'from-pink-900/40 to-black', leader: 'Charlotte Linlin',
    description: 'Una familia unida por la sangre y el terror en Totto Land.',
    key_members: ['Big Mom', 'Katakuri', 'Smoothie', 'Cracker', 'Perospero']
  },
  {
    id: 12, name: 'Donquixote Family', type: 'Mafia / Sindicato',
    jolly_roger: w("Donquixote_Pirates'_Jolly_Roger.png"),
    color: 'text-pink-400', bg_gradient: 'from-rose-900/40 to-black', leader: 'Donquixote Doflamingo',
    description: 'Controlaron el bajo mundo y el reino de Dressrosa.',
    key_members: ['Doflamingo', 'Trébol', 'Diamante', 'Pica', 'Sugar']
  },
  {
    id: 13, name: 'Baroque Works', type: 'Organización Secreta',
    jolly_roger: w('Baroque_Works_Logo.png'),
    color: 'text-amber-600', bg_gradient: 'from-amber-900/40 to-black', leader: 'Sir Crocodile',
    description: 'Intentaron conquistar Arabasta desde las sombras.',
    key_members: ['Crocodile', 'Robin', 'Daz Bones', 'Bon Kurei']
  },
  {
    id: 14, name: 'CP9 / CP0', type: 'Inteligencia Naval',
    jolly_roger: w('Cipher_Pol_Logo.png'),
    color: 'text-gray-300', bg_gradient: 'from-slate-900/40 to-black', leader: 'Rob Lucci',
    description: 'Los asesinos oficiales del Gobierno Mundial.',
    key_members: ['Lucci', 'Kaku', 'Stussy', 'Kalifa']
  },
  {
    id: 15, name: 'Piratas Heart', type: 'Aliados',
    jolly_roger: w("Heart_Pirates'_Jolly_Roger.png"),
    color: 'text-yellow-500', bg_gradient: 'from-yellow-800/40 to-black', leader: 'Trafalgar Law',
    description: 'Tripulación médica liderada por el Cirujano de la Muerte.',
    key_members: ['Law', 'Bepo', 'Shachi', 'Penguin']
  },
  {
    id: 16, name: 'Piratas de Kid', type: 'Tripulación Violenta',
    jolly_roger: w("Kid_Pirates'_Jolly_Roger.png"),
    color: 'text-red-600', bg_gradient: 'from-red-800/40 to-black', leader: 'Eustass Kid',
    description: 'Piratas temidos por su brutalidad y poder magnético.',
    key_members: ['Kid', 'Killer', 'Heat', 'Wire']
  },
  {
    id: 17, name: 'Thriller Bark', type: 'Ejército de Zombies',
    jolly_roger: w("Thriller_Bark_Pirates'_Jolly_Roger.png"),
    color: 'text-green-800', bg_gradient: 'from-green-950/40 to-black', leader: 'Gecko Moria',
    description: 'Navegaban en la isla flotante más grande del mundo.',
    key_members: ['Moria', 'Perona', 'Absalom', 'Hogback']
  },
  {
    id: 18, name: 'Piratas Kuja', type: 'Guerreras Amazonas',
    jolly_roger: w("Kuja_Pirates'_Jolly_Roger.png"),
    color: 'text-pink-600', bg_gradient: 'from-rose-800/40 to-black', leader: 'Boa Hancock',
    description: 'Las poderosas guerreras de Amazon Lily.',
    key_members: ['Hancock', 'Marigold', 'Sandersonia']
  },
  {
    id: 19, name: 'Piratas del Sol', type: 'Liberación Gyojin',
    jolly_roger: w("Sun_Pirates'_Jolly_Roger.png"),
    color: 'text-red-500', bg_gradient: 'from-red-900/40 to-black', leader: 'Fisher Tiger / Jinbe',
    description: 'Luchadores por la libertad y la igualdad de los hombres pez.',
    key_members: ['Tiger', 'Jinbe', 'Arlong']
  },
  {
    id: 20, name: 'Piratas Fire Tank', type: 'Tripulación de la Peor Generación',
    jolly_roger: w("Fire_Tank_Pirates'_Jolly_Roger.png"),
    color: 'text-gray-400', bg_gradient: 'from-gray-800/40 to-black', leader: 'Capone Bege',
    description: 'Estructura similar a la mafia que utiliza la fruta fortaleza.',
    key_members: ['Capone Bege', 'Chiffon', 'Gotti', 'Vito']
  },
  {
    id: 21, name: 'Piratas de Hawkins', type: 'Tripulación de la Peor Generación',
    jolly_roger: w("Hawkins_Pirates'_Jolly_Roger.png"),
    color: 'text-yellow-600', bg_gradient: 'from-yellow-900/40 to-black', leader: 'Basil Hawkins',
    description: 'Banda que utiliza la adivinación y el vudú.',
    key_members: ['Basil Hawkins', 'Faust']
  },
  {
    id: 22, name: 'Piratas Drake', type: 'Ex-Tripulación (SWORD)',
    jolly_roger: w("Drake_Pirates'_Jolly_Roger.png"),
    color: 'text-red-700', bg_gradient: 'from-red-900/40 to-black', leader: 'X Drake',
    description: 'Infiltrados bajo la fachada de desertores.',
    key_members: ['X Drake']
  },
  {
    id: 23, name: 'Piratas On-Air', type: 'Tripulación de la Peor Generación',
    jolly_roger: w("On_Air_Pirates'_Jolly_Roger.png"),
    color: 'text-orange-500', bg_gradient: 'from-orange-900/40 to-black', leader: 'Scratchmen Apoo',
    description: 'Utilizan el poder de la música destructiva.',
    key_members: ['Scratchmen Apoo']
  },
  {
    id: 24, name: 'Piratas del Monje Caído', type: 'Tripulación de la Peor Generación',
    jolly_roger: w("Fallen_Monk_Pirates'_Jolly_Roger.png"),
    color: 'text-gray-500', bg_gradient: 'from-gray-700 to-black', leader: 'Urouge',
    description: 'Provenientes de una isla del cielo.',
    key_members: ['Urouge']
  },
  {
    id: 25, name: 'Piratas de Arlong', type: 'Tripulación Gyojin (Ex)',
    jolly_roger: w("Arlong_Pirates'_Jolly_Roger.png"),
    color: 'text-blue-600', bg_gradient: 'from-blue-900 to-black', leader: 'Arlong',
    description: 'Buscaban establecer el Imperio Gyojin en el East Blue.',
    key_members: ['Arlong', 'Hatchan', 'Chew', 'Kuroobi']
  },
  {
    id: 26, name: 'Piratas de Krieg', type: 'Flota del East Blue (Ex)',
    jolly_roger: w("Krieg_Pirates'_Jolly_Roger.png"),
    color: 'text-yellow-600', bg_gradient: 'from-yellow-900 to-black', leader: 'Don Krieg',
    description: 'Llegaron a tener 50 barcos bajo su mando.',
    key_members: ['Don Krieg', 'Gin', 'Pearl']
  },
  {
    id: 27, name: 'Piratas del Gato Negro', type: 'Piratas (Ex)',
    jolly_roger: w("Black_Cat_Pirates'_Jolly_Roger.png"),
    color: 'text-gray-400', bg_gradient: 'from-gray-800 to-black', leader: 'Kuro',
    description: 'Conocidos por su velocidad y tácticas despiadadas.',
    key_members: ['Kuro', 'Jango', 'Sham', 'Buchi']
  },
  {
    id: 28, name: 'Piratas de Buggy', type: 'Piratas (Cross Guild)',
    jolly_roger: w("Buggy_Pirates'_Jolly_Roger.png"),
    color: 'text-red-500', bg_gradient: 'from-red-900 to-black', leader: 'Buggy',
    description: 'La tripulación del "Payaso Estrella", ahora parte de Cross Guild.',
    key_members: ['Buggy', 'Alvida', 'Mohji', 'Cabaji']
  },
  {
    id: 29, name: 'Piratas Rumbar', type: 'Tripulación Histórica',
    jolly_roger: w("Rumbar_Pirates'_Jolly_Roger.png"),
    color: 'text-amber-500', bg_gradient: 'from-amber-900 to-black', leader: 'Yorki / Brook',
    description: 'Antigua tripulación que navegaba con música y alegría.',
    key_members: ['Yorki', 'Brook', 'Laboon']
  },
  {
    id: 30, name: 'Piratas del Gigante Guerrero', type: 'Tripulación Legendaria',
    jolly_roger: w("Giant_Warrior_Pirates'_Jolly_Roger.png"),
    color: 'text-red-800', bg_gradient: 'from-red-950 to-black', leader: 'Dorry y Brogy',
    description: 'Los legendarios gigantes de Elbaf que trajeron terror al mar.',
    key_members: ['Dorry', 'Brogy', 'Oimo', 'Kashi']
  }
];

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

export const FACTIONS: Faction[] = [
  {
    id: 1, name: 'Piratas del Sombrero de Paja', type: 'Tripulación Yonko',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/5/52/Straw_Hat_Pirates_Jolly_Roger.png',
    color: 'text-red-500', bg_gradient: 'from-red-900/40 to-black', leader: 'Monkey D. Luffy',
    description: 'Una de las tripulaciones piratas más famosas e infames de la actualidad. Viajan en el acorazado "Thousand Sunny".',
    key_members: ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky', 'Brook', 'Jinbe', 'Vivi (Honoraria)']
  },
  {
    id: 8, name: 'Piratas de Roger', type: 'Tripulación Legendaria',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/a/ab/Roger_Pirates_Jolly_Roger.png',
    color: 'text-yellow-600', bg_gradient: 'from-amber-900/40 to-black', leader: 'Gol D. Roger',
    description: 'Los únicos que conquistaron la última isla de Grand Line bautizada "Laugh Tale", encontrando la verdad del mundo entero y coronando a Roger como su único Rey en la mítica nave Oro Jackson.',
    key_members: ['Roger', 'Silvers Rayleigh', 'Scopper Gaban', 'Croco', 'Shanks', 'Buggy', 'Oden Kozuki', 'Inuarashi', 'Nekomamushi']
  },
  {
    id: 9, name: 'Piratas de Rocks', type: 'Sujetos Históricos Borrados',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/2/23/Rocks_Pirates_Jolly_Roger.png',
    color: 'text-gray-400', bg_gradient: 'from-gray-800/40 to-black', leader: 'Rocks D. Xebec',
    description: 'Borrados de la historia tras el oscuro Incidente de God Valley por la unión militar atípica de Roger y Garp. Esta tripulación unió a las potencias futuras más peligrosas y asesinas a fuerza brutal.',
    key_members: ['Rocks', 'Whitebeard', 'Big Mom', 'Kaido', 'Shiki', 'Capitán John', 'Ochoku']
  },
  {
    id: 10, name: 'Piratas de Barbablanca', type: 'Antigua Tripulación Yonko',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/6/65/Whitebeard_Pirates_Jolly_Roger.png',
    color: 'text-blue-300', bg_gradient: 'from-blue-900/40 to-black', leader: 'Edward Newgate (Barbablanca)',
    description: 'Anteriormente conocidos como la banda más implacable y temida navegando con flotas gigantes en el Moby Dick. Su estructura era "familiar" ya que cada división trataba a Newgate como su "Oyaji".',
    key_members: ['Newgate', 'Marco', 'Ace', 'Jozu', 'Thatch', 'Vista', 'Izo', 'Rakuyo']
  },
  {
    id: 2, name: 'La Marina', type: 'Fuerza Militar Mundial Central',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/7/7b/Marine_Logo.png',
    color: 'text-blue-500', bg_gradient: 'from-blue-800/40 to-black', leader: 'Akainu (Almirante de Flota)',
    description: 'Los encargados de mantener la Justicia Absoluta mediante sus temibles SSG (Pacifistas y Seraphim), las Flotas Navales Globales y el poder imparable de tres Almirantes.',
    key_members: ['Akainu', 'Kizaru', 'Fujitora', 'Ryokugyu', 'Garp', 'Sengoku', 'Smoker', 'Koby']
  },
  {
    id: 3, name: 'Ejército Revolucionario', type: 'Grupo Militar Rebelde Global',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/b/b3/Revolutionary_Army_Logo.png',
    color: 'text-green-500', bg_gradient: 'from-green-900/40 to-black', leader: 'Monkey D. Dragon',
    description: 'No atacan a piratas, tienen la gran tarea de liberar progresivamente y desde las raíces el abuso político y esclavista directo generado por los crueles Dragones Celestiales.',
    key_members: ['Dragon', 'Sabo', 'Ivankov', 'Kuma', 'Morley', 'Belo Betty', 'Karasu', 'Lindbergh']
  },
  {
    id: 4, name: 'Cross Guild', type: 'Sindicato / Yonko Colectivo',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/3/30/Cross_Guild_Jolly_Roger.png',
    color: 'text-amber-500', bg_gradient: 'from-yellow-900/40 to-black', leader: 'Buggy (Figura Principal)',
    description: 'El peor modelo imaginable para los oficiales. Los piratas ponen recompenas estelares y caza directa en las cabezas uniformadas del Gobierno.',
    key_members: ['Buggy', 'Dracule Mihawk', 'Sir Crocodile', 'Galdino', 'Cabaji', 'Richie']
  },
  {
    id: 5, name: 'Piratas de Barbanegra', type: 'Tripulación Yonko',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/a/a2/Blackbeard_Pirates_Jolly_Roger.png',
    color: 'text-purple-600', bg_gradient: 'from-purple-900/40 to-black', leader: 'Marshall D. Teach',
    description: 'Se especializan en saquear y exterminar para conseguir frutos místicos robados (Kurohige Hunt). Es un modelo capitaneado por 10 capitanes titánicos y con Kuzan infiltrado.',
    key_members: ['Teach', 'Shiryu', 'Kuzan', 'Burgess', 'Van Augur', 'Doc Q', 'San Juan Wolf', 'Pizarro']
  },
  {
    id: 11, name: 'Piratas del Pelirrojo', type: 'Tripulación Yonko',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/c/c5/Red_Hair_Pirates_Jolly_Roger.png',
    color: 'text-red-700', bg_gradient: 'from-red-950/40 to-black', leader: 'Shanks',
    description: 'Basa su influencia letal sin necesitar Frutas. Poseen un balanceo insuperable mediante armas bañadas en haki destructivo protegiendo directamente la Isla Elbaf de incursiones.',
    key_members: ['Shanks', 'Benn Beckman', 'Lucky Roux', 'Yasopp', 'Monster', 'Bonk Punch']
  },
  {
    id: 6, name: 'Piratas de las Bestias', type: 'Antigua Tripulación Yonko',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/2/29/Beasts_Pirates_Jolly_Roger.png',
    color: 'text-purple-400', bg_gradient: 'from-gray-800/40 to-black', leader: 'Kaido (Antiguamente)',
    description: 'Su jerarquía solo se basaba en el salvajismo individual. Las subfacciones incluían All-Stars, Tobi Roppo, Headliners cubiertos de bestias mitológicas artificiales SMILE.',
    key_members: ['Kaido', 'King', 'Queen', 'Jack', 'Ulti', 'Page One', 'Who is Who', 'Black Maria', 'Sasaki']
  },
  {
    id: 7, name: 'Piratas de Big Mom', type: 'Antigua Tripulación Yonko',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/e/ea/Big_Mom_Pirates_Jolly_Roger.png',
    color: 'text-pink-500', bg_gradient: 'from-pink-900/40 to-black', leader: 'Charlotte Linlin',
    description: 'Operaban territorialmente Totto Land con cientos de razas distintas y Homies vivientes armados. Consiste de casi absolutamente sólo ministros hijos biológicos letales.',
    key_members: ['Big Mom', 'Katakuri', 'Smoothie', 'Cracker', 'Perospero', 'Oven', 'Daifuku', 'Pudding']
  },
  {
    id: 12, name: 'Donquixote Family', type: 'Sindicato y Reyes de Dressrosa',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/2/23/Donquixote_Pirates_Jolly_Roger.png',
    color: 'text-pink-400', bg_gradient: 'from-rose-900/40 to-black', leader: 'Donquixote Doflamingo',
    description: 'Actuaron cruel y financieramente como "Joker" monopolizando todo el tráfico ilícito mercantil del SAD mediante el control dictatorial clandestino de Smile y armas para el bajo mundo.',
    key_members: ['Doflamingo', 'Rosinante', 'Trebol', 'Diamante', 'Pica', 'Sugar', 'Vergo', 'Señor Pink']
  },
  {
    id: 13, name: 'Baroque Works', type: 'Sindicato Secreto de Asesinos',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/d/df/Baroque_Works_Logo.png',
    color: 'text-amber-600', bg_gradient: 'from-amber-900/40 to-black', leader: 'Mr. 0 (Sir Crocodile)',
    description: 'Sus miembros en código jamás conocían la fachada de nadie. Provocaron minuciosamente con agentes letales la inminente e inevitable guerra sanguinaria civil total en Arabasta.',
    key_members: ['Crocodile', 'Nico Robin', 'Daz Bones (Mr. 1)', 'Bon Clay (Mr. 2)', 'Galdino (Mr. 3)', 'Miss Doublefinger']
  },
  {
    id: 14, name: 'CP9 / CP0 (Aegis)', type: 'Inteligencia Asesina Marina',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/c/c2/Cipher_Pol_Logo.png',
    color: 'text-gray-300', bg_gradient: 'from-slate-900/40 to-black', leader: 'Líderes Gorosei',
    description: 'Agentes maestros del mortífero estilo físico Rokushiki y Zoans letales con extrema inmunidad. Reportan en directo y personalmente sus infiltraciones a la máxima élite Aristocrática Celestial.',
    key_members: ['Rob Lucci', 'Kaku', 'Stussy', 'Kalifa', 'Jabura', 'Blueno', 'Guernica', 'Spandam']
  },
  {
    id: 15, name: 'Piratas Heart', type: 'Alianza y Subordinados Rookies',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/c/ca/Heart_Pirates_Jolly_Roger.png',
    color: 'text-yellow-500', bg_gradient: 'from-yellow-800/40 to-black', leader: 'Trafalgar D. Law',
    description: 'La super banda médica aliada nacida en el extinto North Blue bajo honor en la muerte traumática de Corazón, surcando con su distintivo gigantesco Polar Tang dorado en las profundidades.',
    key_members: ['Law', 'Bepo', 'Penguin', 'Shachi', 'Jean Bart', 'Ikkaku']
  },
  {
    id: 16, name: 'Piratas de Kid', type: 'Banda Rookie Violenta',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/e/ea/Kid_Pirates_Jolly_Roger.png',
    color: 'text-red-600', bg_gradient: 'from-red-800/40 to-black', leader: 'Eustass "Captain" Kid',
    description: 'Temerarios agresivos que arrasan masacrando civiles durante sus aventuras de la Peor Generación. Comprometidos fiel e implacablemente tras forjarse desde un origen común miserable y criminal.',
    key_members: ['Kid', 'Killer', 'Heat', 'Wire']
  },
  {
    id: 17, name: 'Piratas de Thriller Bark', type: 'Zombies / Extintos',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/2/2f/Thriller_Bark_Pirates_Jolly_Roger.png',
    color: 'text-green-800', bg_gradient: 'from-green-950/40 to-black', leader: 'Gecko Moria',
    description: 'El masivo e imponente barco-isla terrorífica habitada. Robaban agresivamente sombras mortales del Florian Triangle para infundirlas mágicamente en macabros soldados muertos.',
    key_members: ['Moria', 'Dr. Hogback', 'Absalom', 'Perona', 'Ryuma (Zombie)', 'Oars']
  },
  {
    id: 18, name: 'Piratas Kuja', type: 'Reino Femenino',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/9/90/Kuja_Pirates_Jolly_Roger.png',
    color: 'text-pink-600', bg_gradient: 'from-rose-800/40 to-black', leader: 'Boa Hancock',
    description: 'Las legendarias nativas feroces de Amazon Lily que jamás ven el exterior varonil salvo para saquear letalmente rodeadas del cinturón paralizador rocoso Calm Belt y serpientes enormes mortales.',
    key_members: ['Hancock', 'Marigold', 'Sandersonia', 'Marguerite', 'Nyon', 'Sweet Pea']
  },
  {
    id: 19, name: 'Piratas del Sol', type: 'Liberación Gyojin (Extinta/Separada)',
    jolly_roger: 'https://static.wikia.nocookie.net/onepiece/images/a/ab/Sun_Pirates_Jolly_Roger.png',
    color: 'text-red-500', bg_gradient: 'from-red-900/40 to-black', leader: 'Fisher Tiger / Jinbe',
    description: 'Ocultaron dramáticamente las infames cicatrices estigmatizadas de esclavos celestiales de la marca de los Tenryubitos de Mariejois, marcándose el fuego radiante protector de un tatuaje del sol carmesí.',
    key_members: ['Fisher Tiger', 'Jinbe', 'Arlong', 'Aladine', 'Macro', 'Wadatsumi', 'Koala (Temporal)']
  }
];

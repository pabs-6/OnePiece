export interface Ship {
  id: number;
  name: string;
  slug: string;
  faction: string;
  captain: string;
  type: string;
  status: string;
  image: string;
  color: string;
  description: string;
  order: number;
}

const w = (filename: string) => `https://onepiece.fandom.com/wiki/Special:FilePath/${filename}`;

export const SHIPS: Ship[] = [
  {
    id: 1, name: 'Going Merry', slug: 'going-merry', faction: 'Piratas del Sombrero de Paja', captain: 'Monkey D. Luffy',
    type: 'Carabela', status: 'Retirado (funeral vikingo en Water Seven)', image: '/img/journey/goingMerry.png',
    color: 'from-yellow-700 to-amber-950',
    description: 'El primer barco de la tripulación, regalo de Kaya. Los llevó desde el East Blue hasta Water Seven, sobreviviendo mucho más allá de sus límites gracias al cariño de la tripulación.',
    order: 1
  },
  {
    id: 2, name: 'Thousand Sunny', slug: 'thousand-sunny', faction: 'Piratas del Sombrero de Paja', captain: 'Monkey D. Luffy',
    type: 'Galeón (madera de Adam)', status: 'Activo', image: '/img/journey/thousandSunny.png',
    color: 'from-yellow-600 to-orange-800',
    description: 'Construido por Franky en Water Seven con madera de Adam, es el barco actual de los Mugiwara. Cuenta con jardín, acuario, taller y un león como mascarón de proa.',
    order: 2
  },
  {
    id: 3, name: 'Oro Jackson', slug: 'oro-jackson', faction: 'Piratas de Roger', captain: 'Gol D. Roger',
    type: 'Galeón', status: 'Desconocido', image: w('Oro_Jackson_Infobox.png'),
    color: 'from-amber-700 to-yellow-900',
    description: 'El legendario navío en el que Gold Roger y su tripulación conquistaron el Grand Line al completo, llegando hasta Laugh Tale.',
    order: 3
  },
  {
    id: 4, name: 'Moby Dick', slug: 'moby-dick', faction: 'Piratas de Barbablanca', captain: 'Edward Newgate',
    type: 'Buque insignia (forma de ballena)', status: 'Destruido en Marineford', image: w('Moby_Dick_Infobox.png'),
    color: 'from-blue-800 to-slate-950',
    description: 'Con forma de cachalote blanco, fue el hogar de la familia de Barbablanca durante décadas hasta hundirse en la Guerra de Marineford.',
    order: 4
  },
  {
    id: 5, name: 'Red Force', slug: 'red-force', faction: 'Piratas del Pelirrojo', captain: 'Shanks',
    type: 'Galeón', status: 'Activo', image: w('Red_Force_Infobox.png'),
    color: 'from-red-800 to-red-950',
    description: 'El barco de Shanks y su tripulación, presente en Fushia desde el inicio de la historia y símbolo del respeto que se ganan allá donde navegan.',
    order: 5
  },
  {
    id: 6, name: 'Polar Tang', slug: 'polar-tang', faction: 'Piratas Heart', captain: 'Trafalgar Law',
    type: 'Submarino (forma de morsa)', status: 'Activo', image: w('Polar_Tang_Infobox.png'),
    color: 'from-yellow-800 to-gray-900',
    description: 'Submarino amarillo con forma de morsa que permite a los Piratas Heart moverse bajo el agua sin ser detectados.',
    order: 6
  },
  {
    id: 7, name: 'Queen Mama Chanter', slug: 'queen-mama-chanter', faction: 'Piratas de Big Mom', captain: 'Charlotte Linlin',
    type: 'Buque insignia', status: 'Activo', image: w('Queen_Mama_Chanter_Infobox.png'),
    color: 'from-pink-800 to-purple-950',
    description: 'El imponente navío de Big Mom, decorado con motivos dulces acordes a la estética de Totto Land.',
    order: 7
  },
  {
    id: 8, name: 'Noah', slug: 'noah', faction: 'Reino de Ryugu (Histórico)', captain: 'Sin capitán (arca ancestral)',
    type: 'Arca gigante', status: 'Hundido en Fish-Man Island', image: w('Noah_Infobox.png'),
    color: 'from-stone-700 to-stone-950',
    description: 'Colosal arca construida hace 800 años para trasladar el Reino de Gyojin a la superficie. Estuvo a punto de destruir Fish-Man Island tras ser usada como arma por Hody Jones.',
    order: 8
  },
];

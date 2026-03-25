export interface Character {
  id: number;
  name: string;
  role: string;
  epithet: string;
  bounty: string;
  devil_fruit: string;
  crew: string;
  img: string;
  color: string;
  border: string;
  description: string;
  power_level: number;
  haki: string[];
}

const w = (filename: string) => `https://onepiece.fandom.com/wiki/Special:FilePath/${filename}`;

export const CHARACTERS: Character[] = [
  // MUGIWARAS
  {
    id: 1, name: 'Monkey D. Luffy', role: 'Capitán | Yonko', epithet: '"Sombrero de Paja"',
    bounty: '3,000,000,000', devil_fruit: 'Hito Hito no Mi: Modelo Nika', crew: 'Piratas del Sombrero de Paja',
    img: w('Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-600 to-red-900', border: 'border-red-500',
    description: 'El protagonista que sueña con ser el Rey de los Piratas.', power_level: 95, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 2, name: 'Roronoa Zoro', role: 'Espadachín | Vice-Capitán', epithet: '"El Cazador de Piratas"',
    bounty: '1,111,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png'), color: 'from-green-600 to-green-900', border: 'border-green-500',
    description: 'El espadachín del estilo de tres espadas. Sueña con superar a Dracule Mihawk y ser el mejor del mundo.', power_level: 91, haki: ['Kenbunshoku', 'Busoshoku', 'Haoshoku']
  },
  {
    id: 3, name: 'Nami', role: 'Navegante', epithet: '"La Gata Ladrona"',
    bounty: '366,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Nami_Anime_Post_Timeskip_Infobox.png'), color: 'from-orange-500 to-orange-800', border: 'border-orange-500',
    description: 'Ex-ladrona de piratas, ahora la brillante navegante del barco.', power_level: 70, haki: []
  },
  {
    id: 4, name: 'Usopp', role: 'Francotirador', epithet: '"Dios Usopp"',
    bounty: '500,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Usopp_Anime_Post_Timeskip_Infobox.png'), color: 'from-yellow-700 to-yellow-900', border: 'border-yellow-600',
    description: 'El francotirador cobarde del grupo cuyo sueño es convertirse en un valiente guerrero del mar.', power_level: 72, haki: ['Kenbunshoku']
  },
  {
    id: 5, name: 'Sanji', role: 'Cocinero', epithet: '"Pierna Negra"',
    bounty: '1,032,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Sanji_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-600 to-blue-900', border: 'border-blue-500',
    description: 'El cocinero y príncipe del Germa Kingdom. Pelea solo con sus piernas.', power_level: 89, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 6, name: 'Tony Tony Chopper', role: 'Médico', epithet: '"El Amante del Algodón de Azúcar"',
    bounty: '1,000', devil_fruit: 'Hito Hito no Mi', crew: 'Piratas del Sombrero de Paja',
    img: w('Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-500 to-pink-800', border: 'border-pink-500',
    description: 'Un reno que comió la fruta humana. Su sueño es crear una cura universal.', power_level: 75, haki: []
  },
  {
    id: 7, name: 'Nico Robin', role: 'Arqueóloga', epithet: '"Niña Demonio"',
    bounty: '930,000,000', devil_fruit: 'Hana Hana no Mi', crew: 'Piratas del Sombrero de Paja',
    img: w('Nico_Robin_Anime_Post_Timeskip_Infobox.png'), color: 'from-purple-600 to-purple-900', border: 'border-purple-500',
    description: 'Superviviente de Ohara y la única en el mundo capaz de leer descifrar Poneglyphs.', power_level: 82, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 8, name: 'Franky', role: 'Carpintero', epithet: '"El Cyborg"',
    bounty: '394,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Franky_Anime_Post_Timeskip_Infobox.png'), color: 'from-cyan-600 to-cyan-900', border: 'border-cyan-500',
    description: 'El genio de la construcción que creó el Thousand Sunny.', power_level: 80, haki: []
  },
  {
    id: 9, name: 'Brook', role: 'Músico', epithet: '"Rey del Soul"',
    bounty: '383,000,000', devil_fruit: 'Yomi Yomi no Mi', crew: 'Piratas del Sombrero de Paja',
    img: w('Brook_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-600 to-gray-900', border: 'border-gray-500',
    description: 'Un esqueleto resucitado por el poder de su fruta. Prometió regresar con Laboon.', power_level: 78, haki: ['Busoshoku']
  },
  {
    id: 10, name: 'Jinbe', role: 'Timonel', epithet: '"El Caballero del Mar"',
    bounty: '1,100,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Jinbe_Anime_Infobox.png'), color: 'from-blue-700 to-blue-900', border: 'border-blue-700',
    description: 'Antiguo Shichibukai y miembro de los Piratas del Sol. Renunció a los de Big Mom para seguir a Luffy.', power_level: 85, haki: ['Kenbunshoku', 'Busoshoku']
  },
  
  // YONKOS
  {
    id: 11, name: 'Shanks', role: 'Capitán | Yonko', epithet: '"El Pelirrojo"',
    bounty: '4,048,900,000', devil_fruit: 'Ninguna', crew: 'Piratas del Pelirrojo',
    img: w('Shanks_Anime_Infobox.png'), color: 'from-red-800 to-red-950', border: 'border-red-700',
    description: 'El hombre que inspiró a Luffy. Fue aprendiz en el barco de Roger y es conocido por su aplastante Haki.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 12, name: 'Marshall D. Teach', role: 'Almirante | Yonko', epithet: '"Barbanegra"',
    bounty: '3,996,000,000', devil_fruit: 'Yami Yami y Gura Gura no Mi', crew: 'Piratas de Barbanegra',
    img: w('Marshall_D._Teach_Anime_Post_Timeskip_Infobox.png'), color: 'from-indigo-900 to-black', border: 'border-indigo-700',
    description: 'El único hombre que ha asimilado el poder de dos frutas simultáneamente.', power_level: 96, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 13, name: 'Kaido', role: 'Capitán | Ex-Yonko', epithet: '"De las Bestias"',
    bounty: '4,611,100,000', devil_fruit: 'Uo Uo: Modelo Seiryu', crew: 'Piratas de las Bestias',
    img: w('Kaido_Anime_Infobox.png'), color: 'from-purple-900 to-blue-900', border: 'border-purple-700',
    description: 'La Criatura más fuerte del mundo. Gobernó violentamente Wano.', power_level: 98, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 14, name: 'Charlotte Linlin', role: 'Capitán | Ex-Yonko', epithet: '"Big Mom"',
    bounty: '4,388,000,000', devil_fruit: 'Soru Soru no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Linlin_Anime_Infobox.png'), color: 'from-pink-600 to-purple-800', border: 'border-pink-500',
    description: 'Monstruo invulnerable desde el nacimiento y gobernadora de Totto Land.', power_level: 96, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 15, name: 'Edward Newgate', role: 'Capitán | Ex-Yonko', epithet: '"Barbablanca"',
    bounty: '5,046,000,000', devil_fruit: 'Gura Gura no Mi', crew: 'Piratas de Barbablanca',
    img: w('Edward_Newgate_Anime_Infobox.png'), color: 'from-gray-300 to-gray-600', border: 'border-white',
    description: 'El hombre más fuerte del mundo y principal rival de Gol D. Roger.', power_level: 99, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 16, name: 'Gol D. Roger', role: 'Rey de los Piratas', epithet: 'Gold Roger',
    bounty: '5,564,800,000', devil_fruit: 'Ninguna', crew: 'Piratas de Roger',
    img: w('Gol_D._Roger_Anime_Infobox.png'), color: 'from-red-700 to-yellow-700', border: 'border-yellow-500',
    description: 'El primer hombre que conquistó el Grand Line y llegó a Laugh Tale.', power_level: 100, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 17, name: 'Buggy', role: 'Capitán | Yonko', epithet: '"El Payaso Estrella"',
    bounty: '3,189,000,000', devil_fruit: 'Bara Bara no Mi', crew: 'Cross Guild',
    img: w('Buggy_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-600 to-blue-600', border: 'border-red-500',
    description: 'Ex-aprendiz de Roger y líder figurativo de Cross Guild.', power_level: 40, haki: []
  },

  // MARINA & GOBIERNO
  {
    id: 18, name: 'Akainu (Sakazuki)', role: 'Almirante de Flota', epithet: '"Perro Rojo"',
    bounty: 'N/A', devil_fruit: 'Magu Magu no Mi', crew: 'Marina',
    img: w('Sakazuki_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-800 to-black', border: 'border-red-700',
    description: 'Líder absoluto de la Marina y ferviente seguidor de la Justicia Absoluta.', power_level: 96, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 19, name: 'Kizaru (Borsalino)', role: 'Almirante', epithet: '"Mono Amarillo"',
    bounty: 'N/A', devil_fruit: 'Pika Pika no Mi', crew: 'Marina',
    img: w('Borsalino_Anime_Post_Timeskip_Infobox.png'), color: 'from-yellow-500 to-yellow-800', border: 'border-yellow-400',
    description: 'Habilidoso disparando y moviéndose a la velocidad de la luz pura.', power_level: 93, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 20, name: 'Aokiji (Kuzan)', role: 'Ex-Almirante | 10mo Capitán', epithet: '"Faisán Azul"',
    bounty: 'Desconocida', devil_fruit: 'Hie Hie no Mi', crew: 'Piratas de Barbanegra',
    img: w('Kuzan_Anime_Post_Timeskip_Infobox.png'), color: 'from-cyan-500 to-blue-800', border: 'border-cyan-400',
    description: 'Antiguo almirante que abandonó la marina. Actualmente aliado con Barbanegra.', power_level: 95, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 21, name: 'Monkey D. Garp', role: 'Vice-Almirante', epithet: '"El Héroe de la Marina"',
    bounty: '3,000,000,000 (Cross Guild)', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Monkey_D._Garp_Anime_Infobox.png'), color: 'from-gray-400 to-gray-700', border: 'border-gray-500',
    description: 'El abuelo de Luffy y el rival mortal de Gold Roger. Pelea a puño limpio.', power_level: 95, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 22, name: 'Fujitora (Issho)', role: 'Almirante', epithet: '"Tigre Ciego"',
    bounty: 'N/A', devil_fruit: 'Zushi Zushi no Mi', crew: 'Marina',
    img: w('Issho_Anime_Infobox.png'), color: 'from-purple-500 to-indigo-900', border: 'border-purple-400',
    description: 'Un espadachín ciego que atrae meteoritos utilizando la enorme gravedad.', power_level: 92, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 23, name: 'Sengoku', role: 'Ex-Almirante de Flota', epithet: '"El Buda"',
    bounty: 'N/A', devil_fruit: 'Hito Hito no Mi: Daibutsu', crew: 'Marina',
    img: w('Sengoku_Anime_Post_Timeskip_Infobox.png'), color: 'from-yellow-400 to-amber-700', border: 'border-yellow-500',
    description: 'Comandante Supremo de la Marina hasta Marineford. Forma de Buda Dorado.', power_level: 94, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 24, name: 'Imu', role: 'Gobernante del Mundo', epithet: 'Creador Oculto',
    bounty: 'N/A', devil_fruit: 'Desconocida Yokai', crew: 'Gobierno Mundial',
    img: w('Imu_Anime_Infobox.png'), color: 'from-black to-gray-900', border: 'border-gray-600',
    description: 'El ser más alto en la jerarquía del mundo de One Piece, mantenido en absoluto secreto.', power_level: 100, haki: ['Desconocido']
  },

  // SHICHIBUKAI & OTROS
  {
    id: 25, name: 'Dracule Mihawk', role: 'Mejor Espadachín', epithet: '"Ojos de Halcón"',
    bounty: '3,590,000,000', devil_fruit: 'Ninguna', crew: 'Cross Guild',
    img: w('Dracule_Mihawk_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-900 to-black', border: 'border-green-800',
    description: 'El espadachín más poderoso del mundo. Cofundador del gremio Cross Guild.', power_level: 96, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 26, name: 'Crocodile', role: 'Presidente', epithet: '"Mr. 0"',
    bounty: '1,965,000,000', devil_fruit: 'Suna Suna no Mi', crew: 'Cross Guild',
    img: w('Crocodile_Anime_Infobox.png'), color: 'from-amber-600 to-amber-900', border: 'border-amber-500',
    description: 'Mente maestra organizativa de Cross Guild, capaz de desecar reinos enteros.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 27, name: 'Boa Hancock', role: 'Emperatriz', epithet: '"Princesa Serpiente"',
    bounty: '1,659,000,000', devil_fruit: 'Mero Mero no Mi', crew: 'Piratas Kuja',
    img: w('Boa_Hancock_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-500 to-rose-700', border: 'border-pink-600',
    description: 'La mujer más hermosa del mundo y líder implacable de Amazon Lily.', power_level: 87, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 28, name: 'Donquixote Doflamingo', role: 'Rey / Broker', epithet: '"Joker"',
    bounty: '340,000,000', devil_fruit: 'Ito Ito no Mi', crew: 'Donquixote Family',
    img: w('Donquixote_Doflamingo_Anime_Infobox.png'), color: 'from-pink-400 to-pink-600', border: 'border-pink-300',
    description: 'Gobernó Dressrosa y controló absolutamente todos los hilos del bajo mundo.', power_level: 88, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 29, name: 'Bartholomew Kuma', role: 'Rey (Ex)', epithet: '"El Tirano"',
    bounty: '296,000,000', devil_fruit: 'Nikyu Nikyu no Mi', crew: 'Ejército Revolucionario',
    img: w('Bartholomew_Kuma_Anime_Infobox.png'), color: 'from-gray-700 to-black', border: 'border-gray-500',
    description: 'Cedió su propio cuerpo y humanidad incansablemente a los experimentos Vegapunk.', power_level: 88, haki: ['Busoshoku']
  },
  {
    id: 31, name: 'Trafalgar D. Water Law', role: 'Capitán | Médico', epithet: '"Cirujano de la Muerte"',
    bounty: '3,000,000,000', devil_fruit: 'Ope Ope no Mi', crew: 'Piratas Heart',
    img: w('Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-700 to-gray-900', border: 'border-cyan-500',
    description: 'Supernova cirujano que partió a Big Mom y cortó enormes continentes.', power_level: 93, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 32, name: 'Eustass Kid', role: 'Capitán', epithet: '"El Magnético"',
    bounty: '3,000,000,000', devil_fruit: 'Jiki Jiki no Mi', crew: 'Piratas Kid',
    img: w('Eustass_Kid_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-700 to-orange-800', border: 'border-red-600',
    description: 'Forja chatarra masiva en armamento cañón y rieles electromagnéticos mortales.', power_level: 91, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 33, name: 'Monkey D. Dragon', role: 'Líder Supremo', epithet: '"El Peor Criminal del Mundo"',
    bounty: 'Desconocida', devil_fruit: 'Desconocida Clima', crew: 'Ejército Revolucionario',
    img: w('Monkey_D._Dragon_Anime_Infobox.png'), color: 'from-green-800 to-black', border: 'border-green-600',
    description: 'Padre de Luffy y amenaza principal revolucionaria contra toda la alta Nobleza.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 34, name: 'Sabo', role: 'Jefe de Estado Mayor', epithet: '"Emperador de las Llamas"',
    bounty: '602,000,000', devil_fruit: 'Mera Mera no Mi', crew: 'Ejército Revolucionario',
    img: w('Sabo_Anime_Infobox.png'), color: 'from-orange-600 to-red-600', border: 'border-orange-500',
    description: 'Hermano adoptivo de Luffy herederio inmediato de la fruta de fuego.', power_level: 90, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 36, name: 'Rob Lucci', role: 'Agente en Jefe', epithet: '"Asesino Perfecto"',
    bounty: 'Desconocida', devil_fruit: 'Neko Neko: Leopardo', crew: 'CP0',
    img: w('Rob_Lucci_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-700 to-gray-900', border: 'border-gray-500',
    description: 'El élite asesino más fuerte y veloz entrenado secretamente a sueldo por Mary Geoise.', power_level: 89, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 37, name: 'Charlotte Katakuri', role: 'Comandante Dulce', epithet: '"El Perfecto"',
    bounty: '1,057,000,000', devil_fruit: 'Mochi Mochi no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Katakuri_Anime_Infobox.png'), color: 'from-red-900 to-pink-900', border: 'border-pink-700',
    description: 'Ve el futuro a voluntad momentáneamente gracias a su nivel de Haki superior concentrado.', power_level: 90, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 39, name: 'Yamato', role: 'Hijo de Kaido', epithet: '"Onihime"',
    bounty: 'Desconocida', devil_fruit: 'Inu Inu: Okuchi no Makami', crew: 'Aliado Wano',
    img: w('Yamato_Anime_Infobox.png'), color: 'from-white to-blue-300', border: 'border-blue-400',
    description: 'Idolatriza eternamente a Oden, luchando encarnizadamente contra su mismísimo padre sanguinario.', power_level: 92, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 40, name: 'Silvers Rayleigh', role: 'Vice-Capitán (Ex)', epithet: '"Rey Oscuro"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Roger',
    img: w('Silvers_Rayleigh_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-500 to-gray-800', border: 'border-gray-400',
    description: 'La mano derecha indiscutible del Rey de los piratas, quien pulió vigorosamente al inexperto Sombrero de paja.', power_level: 94, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 41, name: 'Jewelry Bonney', role: 'Capitán', epithet: '"La Glotona"',
    bounty: '320,000,000', devil_fruit: 'Toshi Toshi no Mi', crew: 'Piratas Bonney',
    img: w('Jewelry_Bonney_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-400 to-rose-600', border: 'border-pink-500',
    description: 'Trágica niña adulta capaz de transmutar su cuerpo físicamente volviéndose fuerte y flexible hacia distorsionados futuros de esperanza radiante (Ej: Nika Nika).', power_level: 80, haki: []
  },
  {
    id: 44, name: 'Kozuki Oden', role: 'Espadachín Legendario', epithet: '"Daimyo"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Piratas de Roger',
    img: w('Kozuki_Oden_Anime_Infobox.png'), color: 'from-purple-500 to-red-500', border: 'border-purple-600',
    description: 'El innegable y glorioso samurai libre que causó la mayor y más temible profunda herida cruzada conocida en la inmensa bestia inmortal Kaido.', power_level: 95, haki: ['Haoshoku', 'Busoshoku', 'Kenbunshoku']
  }
];

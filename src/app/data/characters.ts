export interface Character {
  id: number;
  name: string;
  slug: string;
  role: string;
  epithet: string;
  bounty: string;
  devil_fruit: string;
  crew: string;
  img: string;
  /** Icono recortado de la cara, pensado para usos pequeños (p.ej. el bocadillo de la ruta).
   *  Si no se define, se usa `img` como alternativa. */
  face?: string;
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
    id: 1, name: 'Monkey D. Luffy', slug: 'monkey-d-luffy', role: 'Capitán | Yonko', epithet: '"Sombrero de Paja"',
    bounty: '3,000,000,000', devil_fruit: 'Hito Hito no Mi: Modelo Nika', crew: 'Piratas del Sombrero de Paja',
    img: w('Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png'), face: '/img/journey/luffy.png', color: 'from-red-600 to-red-900', border: 'border-red-500',
    description: 'El protagonista que sueña con ser el Rey de los Piratas.', power_level: 95, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 2, name: 'Roronoa Zoro', slug: 'roronoa-zoro', role: 'Espadachín | Vice-Capitán', epithet: '"El Cazador de Piratas"',
    bounty: '1,111,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png'), face: '/img/journey/zoro.png', color: 'from-green-600 to-green-900', border: 'border-green-500',
    description: 'El espadachín del estilo de tres espadas. Sueña con superar a Dracule Mihawk y ser el mejor del mundo.', power_level: 91, haki: ['Kenbunshoku', 'Busoshoku', 'Haoshoku']
  },
  {
    id: 3, name: 'Nami', slug: 'nami', role: 'Navegante', epithet: '"La Gata Ladrona"',
    bounty: '366,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Nami_Anime_Post_Timeskip_Infobox.png'), face: '/img/journey/nami.png', color: 'from-orange-500 to-orange-800', border: 'border-orange-500',
    description: 'Ex-ladrona de piratas, ahora la brillante navegante del barco.', power_level: 70, haki: []
  },
  {
    id: 4, name: 'Usopp', slug: 'usopp', role: 'Francotirador', epithet: '"Dios Usopp"',
    bounty: '500,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Usopp_Anime_Post_Timeskip_Infobox.png'), face: '/img/journey/usopp.png', color: 'from-yellow-700 to-yellow-900', border: 'border-yellow-600',
    description: 'El francotirador cobarde del grupo cuyo sueño es convertirse en un valiente guerrero del mar.', power_level: 72, haki: ['Kenbunshoku']
  },
  {
    id: 5, name: 'Sanji', slug: 'sanji', role: 'Cocinero', epithet: '"Pierna Negra"',
    bounty: '1,032,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Sanji_Anime_Post_Timeskip_Infobox.png'), face: '/img/journey/sanji.png', color: 'from-blue-600 to-blue-900', border: 'border-blue-500',
    description: 'El cocinero y príncipe del Germa Kingdom. Pelea solo con sus piernas.', power_level: 89, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 6, name: 'Tony Tony Chopper', slug: 'tony-tony-chopper', role: 'Médico', epithet: '"El Amante del Algodón de Azúcar"',
    bounty: '1,000', devil_fruit: 'Hito Hito no Mi', crew: 'Piratas del Sombrero de Paja',
    img: w('Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png'), face: '/img/journey/chopper.png', color: 'from-pink-500 to-pink-800', border: 'border-pink-500',
    description: 'Un reno que comió la fruta humana. Su sueño es crear una cura universal.', power_level: 75, haki: []
  },
  {
    id: 7, name: 'Nico Robin', slug: 'nico-robin', role: 'Arqueóloga', epithet: '"Niña Demonio"',
    bounty: '930,000,000', devil_fruit: 'Hana Hana no Mi', crew: 'Piratas del Sombrero de Paja',
    img: w('Nico_Robin_Anime_Post_Timeskip_Infobox.png'), face: '/img/journey/robin.png', color: 'from-purple-600 to-purple-900', border: 'border-purple-500',
    description: 'Superviviente de Ohara y la única en el mundo capaz de leer descifrar Poneglyphs.', power_level: 82, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 8, name: 'Franky', slug: 'franky', role: 'Carpintero', epithet: '"El Cyborg"',
    bounty: '394,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Franky_Anime_Post_Timeskip_Infobox.png'), face: '/img/journey/franky.png', color: 'from-cyan-600 to-cyan-900', border: 'border-cyan-500',
    description: 'El genio de la construcción que creó el Thousand Sunny.', power_level: 80, haki: []
  },
  {
    id: 9, name: 'Brook', slug: 'brook', role: 'Músico', epithet: '"Rey del Soul"',
    bounty: '383,000,000', devil_fruit: 'Yomi Yomi no Mi', crew: 'Piratas del Sombrero de Paja',
    img: w('Brook_Anime_Post_Timeskip_Infobox.png'), face: '/img/journey/brook.png', color: 'from-gray-600 to-gray-900', border: 'border-gray-500',
    description: 'Un esqueleto resucitado por el poder de su fruta. Prometió regresar con Laboon.', power_level: 78, haki: ['Busoshoku']
  },
  {
    id: 10, name: 'Jinbe', slug: 'jinbe', role: 'Timonel', epithet: '"El Caballero del Mar"',
    bounty: '1,100,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sombrero de Paja',
    img: w('Jinbe_Anime_Infobox.png'), face: '/img/journey/jimbei.png', color: 'from-blue-700 to-blue-900', border: 'border-blue-700',
    description: 'Antiguo Shichibukai y miembro de los Piratas del Sol. Renunció a los de Big Mom para seguir a Luffy.', power_level: 85, haki: ['Kenbunshoku', 'Busoshoku']
  },
  
  // YONKOS
  {
    id: 11, name: 'Shanks', slug: 'shanks', role: 'Capitán | Yonko', epithet: '"El Pelirrojo"',
    bounty: '4,048,900,000', devil_fruit: 'Ninguna', crew: 'Piratas del Pelirrojo',
    img: w('Shanks_Anime_Infobox.png'), color: 'from-red-800 to-red-950', border: 'border-red-700',
    description: 'El hombre que inspiró a Luffy. Fue aprendiz en el barco de Roger y es conocido por su aplastante Haki.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 12, name: 'Marshall D. Teach', slug: 'marshall-d-teach', role: 'Almirante | Yonko', epithet: '"Barbanegra"',
    bounty: '3,996,000,000', devil_fruit: 'Yami Yami y Gura Gura no Mi', crew: 'Piratas de Barbanegra',
    img: w('Marshall_D._Teach_Anime_Post_Timeskip_Infobox.png'), color: 'from-indigo-900 to-black', border: 'border-indigo-700',
    description: 'El único hombre que ha asimilado el poder de dos frutas simultáneamente.', power_level: 96, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 13, name: 'Kaido', slug: 'kaido', role: 'Capitán | Ex-Yonko', epithet: '"De las Bestias"',
    bounty: '4,611,100,000', devil_fruit: 'Uo Uo: Modelo Seiryu', crew: 'Piratas de las Bestias',
    img: w('Kaido_Anime_Infobox.png'), color: 'from-purple-900 to-blue-900', border: 'border-purple-700',
    description: 'La Criatura más fuerte del mundo. Gobernó violentamente Wano.', power_level: 98, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 14, name: 'Charlotte Linlin', slug: 'charlotte-linlin', role: 'Capitán | Ex-Yonko', epithet: '"Big Mom"',
    bounty: '4,388,000,000', devil_fruit: 'Soru Soru no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Linlin_Anime_Infobox.png'), color: 'from-pink-600 to-purple-800', border: 'border-pink-500',
    description: 'Monstruo invulnerable desde el nacimiento y gobernadora de Totto Land.', power_level: 96, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 15, name: 'Edward Newgate', slug: 'edward-newgate', role: 'Capitán | Ex-Yonko', epithet: '"Barbablanca"',
    bounty: '5,046,000,000', devil_fruit: 'Gura Gura no Mi', crew: 'Piratas de Barbablanca',
    img: w('Edward_Newgate_Anime_Infobox.png'), color: 'from-gray-300 to-gray-600', border: 'border-white',
    description: 'El hombre más fuerte del mundo y principal rival de Gol D. Roger.', power_level: 99, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 16, name: 'Gol D. Roger', slug: 'gol-d-roger', role: 'Rey de los Piratas', epithet: 'Gold Roger',
    bounty: '5,564,800,000', devil_fruit: 'Ninguna', crew: 'Piratas de Roger',
    img: w('Gol_D._Roger_Anime_Infobox.png'), color: 'from-red-700 to-yellow-700', border: 'border-yellow-500',
    description: 'El primer hombre que conquistó el Grand Line y llegó a Laugh Tale.', power_level: 100, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 17, name: 'Buggy', slug: 'buggy', role: 'Capitán | Yonko', epithet: '"El Payaso Estrella"',
    bounty: '3,189,000,000', devil_fruit: 'Bara Bara no Mi', crew: 'Cross Guild',
    img: w('Buggy_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-600 to-blue-600', border: 'border-red-500',
    description: 'Ex-aprendiz de Roger y líder figurativo de Cross Guild.', power_level: 40, haki: []
  },

  // MARINA & GOBIERNO
  {
    id: 18, name: 'Akainu (Sakazuki)', slug: 'akainu-sakazuki', role: 'Almirante de Flota', epithet: '"Perro Rojo"',
    bounty: 'N/A', devil_fruit: 'Magu Magu no Mi', crew: 'Marina',
    img: w('Sakazuki_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-800 to-black', border: 'border-red-700',
    description: 'Líder absoluto de la Marina y ferviente seguidor de la Justicia Absoluta.', power_level: 96, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 19, name: 'Kizaru (Borsalino)', slug: 'kizaru-borsalino', role: 'Almirante', epithet: '"Mono Amarillo"',
    bounty: 'N/A', devil_fruit: 'Pika Pika no Mi', crew: 'Marina',
    img: w('Borsalino_Anime_Post_Timeskip_Infobox.png'), color: 'from-yellow-500 to-yellow-800', border: 'border-yellow-400',
    description: 'Habilidoso disparando y moviéndose a la velocidad de la luz pura.', power_level: 93, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 20, name: 'Aokiji (Kuzan)', slug: 'aokiji-kuzan', role: 'Ex-Almirante | 10mo Capitán', epithet: '"Faisán Azul"',
    bounty: 'Desconocida', devil_fruit: 'Hie Hie no Mi', crew: 'Piratas de Barbanegra',
    img: w('Kuzan_Anime_Post_Timeskip_Infobox.png'), color: 'from-cyan-500 to-blue-800', border: 'border-cyan-400',
    description: 'Antiguo almirante que abandonó la marina. Actualmente aliado con Barbanegra.', power_level: 95, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 21, name: 'Monkey D. Garp', slug: 'monkey-d-garp', role: 'Vice-Almirante', epithet: '"El Héroe de la Marina"',
    bounty: '3,000,000,000 (Cross Guild)', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Monkey_D._Garp_Anime_Infobox.png'), color: 'from-gray-400 to-gray-700', border: 'border-gray-500',
    description: 'El abuelo de Luffy y el rival mortal de Gold Roger. Pelea a puño limpio.', power_level: 95, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 22, name: 'Fujitora (Issho)', slug: 'fujitora-issho', role: 'Almirante', epithet: '"Tigre Ciego"',
    bounty: 'N/A', devil_fruit: 'Zushi Zushi no Mi', crew: 'Marina',
    img: w('Issho_Anime_Infobox.png'), color: 'from-purple-500 to-indigo-900', border: 'border-purple-400',
    description: 'Un espadachín ciego que atrae meteoritos utilizando la enorme gravedad.', power_level: 92, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 23, name: 'Sengoku', slug: 'sengoku', role: 'Ex-Almirante de Flota', epithet: '"El Buda"',
    bounty: 'N/A', devil_fruit: 'Hito Hito no Mi: Daibutsu', crew: 'Marina',
    img: w('Sengoku_Anime_Post_Timeskip_Infobox.png'), color: 'from-yellow-400 to-amber-700', border: 'border-yellow-500',
    description: 'Comandante Supremo de la Marina hasta Marineford. Forma de Buda Dorado.', power_level: 94, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 24, name: 'Imu', slug: 'imu', role: 'Gobernante del Mundo', epithet: 'Creador Oculto',
    bounty: 'N/A', devil_fruit: 'Desconocida Yokai', crew: 'Gobierno Mundial',
    img: w('Imu_Anime_Infobox.png'), color: 'from-black to-gray-900', border: 'border-gray-600',
    description: 'El ser más alto en la jerarquía del mundo de One Piece, mantenido en absoluto secreto.', power_level: 100, haki: ['Desconocido']
  },

  // SHICHIBUKAI & OTROS
  {
    id: 25, name: 'Dracule Mihawk', slug: 'dracule-mihawk', role: 'Mejor Espadachín', epithet: '"Ojos de Halcón"',
    bounty: '3,590,000,000', devil_fruit: 'Ninguna', crew: 'Cross Guild',
    img: w('Dracule_Mihawk_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-900 to-black', border: 'border-green-800',
    description: 'El espadachín más poderoso del mundo. Cofundador del gremio Cross Guild.', power_level: 96, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 26, name: 'Crocodile', slug: 'crocodile', role: 'Presidente', epithet: '"Mr. 0"',
    bounty: '1,965,000,000', devil_fruit: 'Suna Suna no Mi', crew: 'Cross Guild',
    img: w('Crocodile_Anime_Infobox.png'), color: 'from-amber-600 to-amber-900', border: 'border-amber-500',
    description: 'Mente maestra organizativa de Cross Guild, capaz de desecar reinos enteros.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 27, name: 'Boa Hancock', slug: 'boa-hancock', role: 'Emperatriz', epithet: '"Princesa Serpiente"',
    bounty: '1,659,000,000', devil_fruit: 'Mero Mero no Mi', crew: 'Piratas Kuja',
    img: w('Boa_Hancock_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-500 to-rose-700', border: 'border-pink-600',
    description: 'La mujer más hermosa del mundo y líder implacable de Amazon Lily.', power_level: 87, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 28, name: 'Donquixote Doflamingo', slug: 'donquixote-doflamingo', role: 'Rey / Broker', epithet: '"Joker"',
    bounty: '340,000,000', devil_fruit: 'Ito Ito no Mi', crew: 'Donquixote Family',
    img: w('Donquixote_Doflamingo_Anime_Infobox.png'), color: 'from-pink-400 to-pink-600', border: 'border-pink-300',
    description: 'Gobernó Dressrosa y controló absolutamente todos los hilos del bajo mundo.', power_level: 88, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 29, name: 'Bartholomew Kuma', slug: 'bartholomew-kuma', role: 'Rey (Ex)', epithet: '"El Tirano"',
    bounty: '296,000,000', devil_fruit: 'Nikyu Nikyu no Mi', crew: 'Ejército Revolucionario',
    img: w('Bartholomew_Kuma_Anime_Infobox.png'), color: 'from-gray-700 to-black', border: 'border-gray-500',
    description: 'Cedió su propio cuerpo y humanidad incansablemente a los experimentos Vegapunk.', power_level: 88, haki: ['Busoshoku']
  },
  {
    id: 31, name: 'Trafalgar D. Water Law', slug: 'trafalgar-d-water-law', role: 'Capitán | Médico', epithet: '"Cirujano de la Muerte"',
    bounty: '3,000,000,000', devil_fruit: 'Ope Ope no Mi', crew: 'Piratas Heart',
    img: w('Trafalgar_D._Water_Law_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-700 to-gray-900', border: 'border-cyan-500',
    description: 'Supernova cirujano que partió a Big Mom y cortó enormes continentes.', power_level: 93, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 32, name: 'Eustass Kid', slug: 'eustass-kid', role: 'Capitán', epithet: '"El Magnético"',
    bounty: '3,000,000,000', devil_fruit: 'Jiki Jiki no Mi', crew: 'Piratas Kid',
    img: w('Eustass_Kid_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-700 to-orange-800', border: 'border-red-600',
    description: 'Forja chatarra masiva en armamento cañón y rieles electromagnéticos mortales.', power_level: 91, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 33, name: 'Monkey D. Dragon', slug: 'monkey-d-dragon', role: 'Líder Supremo', epithet: '"El Peor Criminal del Mundo"',
    bounty: 'Desconocida', devil_fruit: 'Desconocida Clima', crew: 'Ejército Revolucionario',
    img: w('Monkey_D._Dragon_Anime_Infobox.png'), color: 'from-green-800 to-black', border: 'border-green-600',
    description: 'Padre de Luffy y amenaza principal revolucionaria contra toda la alta Nobleza.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 34, name: 'Sabo', slug: 'sabo', role: 'Jefe de Estado Mayor', epithet: '"Emperador de las Llamas"',
    bounty: '602,000,000', devil_fruit: 'Mera Mera no Mi', crew: 'Ejército Revolucionario',
    img: w('Sabo_Anime_Infobox.png'), color: 'from-orange-600 to-red-600', border: 'border-orange-500',
    description: 'Hermano adoptivo de Luffy herederio inmediato de la fruta de fuego.', power_level: 90, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 36, name: 'Rob Lucci', slug: 'rob-lucci', role: 'Agente en Jefe', epithet: '"Asesino Perfecto"',
    bounty: 'Desconocida', devil_fruit: 'Neko Neko: Leopardo', crew: 'CP0',
    img: w('Rob_Lucci_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-700 to-gray-900', border: 'border-gray-500',
    description: 'El élite asesino más fuerte y veloz entrenado secretamente a sueldo por Mary Geoise.', power_level: 89, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 37, name: 'Charlotte Katakuri', slug: 'charlotte-katakuri', role: 'Comandante Dulce', epithet: '"El Perfecto"',
    bounty: '1,057,000,000', devil_fruit: 'Mochi Mochi no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Katakuri_Anime_Infobox.png'), color: 'from-red-900 to-pink-900', border: 'border-pink-700',
    description: 'Ve el futuro a voluntad momentáneamente gracias a su nivel de Haki superior concentrado.', power_level: 90, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 39, name: 'Yamato', slug: 'yamato', role: 'Hijo de Kaido', epithet: '"Onihime"',
    bounty: 'Desconocida', devil_fruit: 'Inu Inu: Okuchi no Makami', crew: 'Aliado Wano',
    img: w('Yamato_Anime_Infobox.png'), color: 'from-white to-blue-300', border: 'border-blue-400',
    description: 'Idolatriza eternamente a Oden, luchando encarnizadamente contra su mismísimo padre sanguinario.', power_level: 92, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 40, name: 'Silvers Rayleigh', slug: 'silvers-rayleigh', role: 'Vice-Capitán (Ex)', epithet: '"Rey Oscuro"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Roger',
    img: w('Silvers_Rayleigh_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-500 to-gray-800', border: 'border-gray-400',
    description: 'La mano derecha indiscutible del Rey de los piratas, quien pulió vigorosamente al inexperto Sombrero de paja.', power_level: 94, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 41, name: 'Jewelry Bonney', slug: 'jewelry-bonney', role: 'Capitán', epithet: '"La Glotona"',
    bounty: '320,000,000', devil_fruit: 'Toshi Toshi no Mi', crew: 'Piratas Bonney',
    img: w('Jewelry_Bonney_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-400 to-rose-600', border: 'border-pink-500',
    description: 'Trágica niña adulta capaz de transmutar su cuerpo físicamente volviéndose fuerte y flexible hacia distorsionados futuros de esperanza radiante (Ej: Nika Nika).', power_level: 80, haki: []
  },
  {
    id: 44, name: 'Kozuki Oden', slug: 'kozuki-oden', role: 'Espadachín Legendario', epithet: '"Daimyo"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Piratas de Roger',
    img: w('Kozuki_Oden_Anime_Infobox.png'), color: 'from-purple-500 to-red-500', border: 'border-purple-600',
    description: 'El innegable y glorioso samurai libre que causó la mayor y más temible profunda herida cruzada conocida en la inmensa bestia inmortal Kaido.', power_level: 95, haki: ['Haoshoku', 'Busoshoku', 'Kenbunshoku']
  },
  // SUPERNOVAS & ALLIANCE
  {
    id: 45, name: 'Killer', slug: 'killer', role: 'Combatiente', epithet: '"Masacre"',
    bounty: '200,000,000', devil_fruit: 'Ninguna (SMILE fallida)', crew: 'Piratas de Kid',
    img: w('Killer_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-400 to-blue-600', border: 'border-blue-400',
    description: 'La mano derecha de Kid. Usa guadañas giratorias unidas a sus brazos.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 46, name: 'Capone Bege', slug: 'capone-bege', role: 'Capitán', epithet: '"Padre"',
    bounty: '350,000,000', devil_fruit: 'Shiro Shiro no Mi', crew: 'Piratas Fire Tank',
    img: w('Capone_Bege_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-700 to-gray-900', border: 'border-gray-600',
    description: 'Un pirata tipo mafia cuyo cuerpo es literalmente una fortaleza viviente.', power_level: 82, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 47, name: 'Basil Hawkins', slug: 'basil-hawkins', role: 'Capitán', epithet: '"El Mago"',
    bounty: '320,000,000', devil_fruit: 'Wara Wara no Mi', crew: 'Piratas de Hawkins',
    img: w('Basil_Hawkins_Anime_Post_Timeskip_Infobox.png'), color: 'from-yellow-600 to-yellow-800', border: 'border-yellow-500',
    description: 'Usa cartas de tarot para predecir el futuro y muñecos de paja para desviar el daño.', power_level: 80, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 48, name: 'X Drake', slug: 'x-drake', role: 'Capitán', epithet: '"Bandera Roja"',
    bounty: '222,000,000', devil_fruit: 'Ryu Ryu: Alosaurio', crew: 'SWORD (Marina)',
    img: w('X_Drake_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-800 to-red-950', border: 'border-red-700',
    description: 'Un contraalmirante infiltrado en los Piratas de las Bestias como uno de los Tobi Roppo.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 49, name: 'Scratchmen Apoo', slug: 'scratchmen-apoo', role: 'Capitán', epithet: '"Rugido del Mar"',
    bounty: '350,000,000', devil_fruit: 'Oto Oto no Mi', crew: 'Piratas On-Air',
    img: w('Scratchmen_Apoo_Anime_Post_Timeskip_Infobox.png'), color: 'from-orange-500 to-red-600', border: 'border-orange-400',
    description: 'Usa su cuerpo como instrumentos musicales para lanzar ataques de sonido cortantes.', power_level: 78, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 50, name: 'Urouge', slug: 'urouge', role: 'Capitán', epithet: '"Monje Loco"',
    bounty: '108,000,000', devil_fruit: 'Seme Seme no Mi', crew: 'Piratas del Monje Caído',
    img: w('Urouge_Anime_Infobox.png'), color: 'from-gray-500 to-gray-700', border: 'border-gray-400',
    description: 'Proveniente de una isla del cielo, su poder aumenta proporcionalmente al daño recibido.', power_level: 81, haki: ['Busoshoku', 'Kenbunshoku']
  },
  // BAROQUE WORKS
  {
    id: 51, name: 'Daz Bones', slug: 'daz-bones', role: 'Agente Oficial', epithet: '"Mr. 1"',
    bounty: '196,000,000 (Cross Guild)', devil_fruit: 'Supa Supa no Mi', crew: 'Baroque Works',
    img: w('Daz_Bones_Anime_Infobox.png'), color: 'from-gray-700 to-gray-950', border: 'border-gray-600',
    description: 'Un asesino que puede convertir cualquier parte de su cuerpo en una hoja de acero.', power_level: 79, haki: ['Busoshoku']
  },
  {
    id: 52, name: 'Bon Kurei', slug: 'bon-kurei', role: 'Agente Oficial', epithet: '"Mr. 2"',
    bounty: '32,000,000', devil_fruit: 'Mane Mane no Mi', crew: 'Baroque Works',
    img: w('Bentham_Anime_Infobox.png'), color: 'from-pink-400 to-blue-400', border: 'border-pink-300',
    description: 'Un okama que valora la amistad por encima de todo. Puede imitar la apariencia de cualquiera.', power_level: 75, haki: []
  },
  {
    id: 53, name: 'Galdino', slug: 'galdino', role: 'Agente Oficial', epithet: '"Mr. 3"',
    bounty: '24,000,000', devil_fruit: 'Doru Doru no Mi', crew: 'Cross Guild',
    img: w('Galdino_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-200 to-gray-300', border: 'border-blue-400',
    description: 'Maestro de la cera dura. Experto en estrategia y trampas.', power_level: 65, haki: []
  },
  // CP9 / CP0
  {
    id: 54, name: 'Kaku', slug: 'kaku', role: 'Agente de Inteligencia', epithet: '"Viento de la Montaña"',
    bounty: 'Desconocida', devil_fruit: 'Ushi Ushi: Jirafa', crew: 'CP0',
    img: w('Kaku_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-400 to-gray-600', border: 'border-gray-500',
    description: 'Experto en el estilo de cuatro espadas y transformaciones de jirafa cuadradas.', power_level: 86, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 55, name: 'Stussy', slug: 'stussy', role: 'Agente de Inteligencia', epithet: '"Reina del Distrito del Placer"',
    bounty: 'Desconocida', devil_fruit: 'Mushi Mushi: Súcubo (Clon)', crew: 'CP0',
    img: w('Stussy_Anime_Infobox.png'), color: 'from-pink-300 to-rose-400', border: 'border-pink-200',
    description: 'Un clon de la ex-pirata de Rocks, Miss Bakkin. Experta en infiltración.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 56, name: 'Kalifa', slug: 'kalifa', role: 'Agente de Inteligencia', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Awa Awa no Mi', crew: 'CP9',
    img: w('Kalifa_Anime_Infobox.png'), color: 'from-blue-100 to-blue-200', border: 'border-blue-300',
    description: 'Utiliza burbujas de jabón para "limpiar" la fuerza de sus oponentes.', power_level: 72, haki: []
  },
  {
    id: 57, name: 'Blueno', slug: 'blueno', role: 'Agente de Inteligencia', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Doa Doa no Mi', crew: 'CP9',
    img: w('Blueno_Anime_Infobox.png'), color: 'from-black to-gray-800', border: 'border-gray-700',
    description: 'Puede crear puertas en cualquier superficie, incluido el aire mismo.', power_level: 74, haki: []
  },
  // WANO SAMURAI
  {
    id: 58, name: 'Kozuki Momonosuke', slug: 'kozuki-momonosuke', role: 'Shogun de Wano', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Uo Uo: Modelo Dragón (Artificial)', crew: 'Aliado Wano',
    img: w('Kozuki_Momonosuke_Anime_Infobox.png'), color: 'from-pink-200 to-pink-400', border: 'border-pink-300',
    description: 'Heredero del clan Kozuki y actual Shogun de Wano tras la derrota de Kaido.', power_level: 83, haki: ['Kenbunshoku']
  },
  {
    id: 59, name: 'Kin\'emon', slug: 'kin-emon', role: 'Samurai | Jefe de los Nueve Envainadas', epithet: '"Fuego de Zorro"',
    bounty: 'Desconocida', devil_fruit: 'Fuku Fuku no Mi', crew: 'Aliado Wano',
    img: w('Kin%27emon_Anime_Infobox.png'), color: 'from-red-500 to-red-700', border: 'border-red-400',
    description: 'Líder de los Nueve Envainadas Rojas y leal sirviente de Oden.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 60, name: 'Denjiro', slug: 'denjiro', role: 'Samurai', epithet: '"Kyoshiro el Adormilado"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Denjiro_Anime_Infobox.png'), color: 'from-blue-500 to-indigo-700', border: 'border-blue-400',
    description: 'Se infiltró como subordinado de Orochi durante 20 años esperando la venganza.', power_level: 86, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 61, name: 'Kawamatsu', slug: 'kawamatsu', role: 'Samurai | Sumotori', epithet: '"El Kappa"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Kawamatsu_Anime_Infobox.png'), color: 'from-green-400 to-green-600', border: 'border-green-500',
    description: 'Un hombre-pez que se hace pasar por un Kappa para sobrevivir en Wano.', power_level: 83, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 62, name: 'Kiku (Okiku)', slug: 'kiku-okiku', role: 'Samurai', epithet: '"La Llovizna"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Kikunojo_Anime_Infobox.png'), color: 'from-blue-200 to-blue-400', border: 'border-blue-300',
    description: 'Una espadachín de gran belleza pero con la fuerza de un samurai de élite.', power_level: 82, haki: ['Busoshoku', 'Kenbunshoku']
  },
  // REVOLUTIONARIES
  {
    id: 63, name: 'Emporio Ivankov', slug: 'emporio-ivankov', role: 'Comandante del G-Army', epithet: '"El Trabajador de Milagros"',
    bounty: 'Desconocida', devil_fruit: 'Horu Horu no Mi', crew: 'Ejército Revolucionario',
    img: w('Emporio_Ivankov_Anime_Infobox.png'), color: 'from-purple-500 to-purple-800', border: 'border-purple-400',
    description: 'Rey del Reino Kamabakka. Puede manipular las hormonas humanas a voluntad.', power_level: 88, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 64, name: 'Koala', slug: 'koala', role: 'Oficial de Inteligencia', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Ejército Revolucionario',
    img: w('Koala_Anime_Infobox.png'), color: 'from-amber-200 to-orange-400', border: 'border-orange-200',
    description: 'Maestra del Karate Gyojin a pesar de ser humana. Ex-esclava de los Dragones Celestiales.', power_level: 76, haki: []
  },
  {
    id: 65, name: 'Inazuma', slug: 'inazuma', role: 'Oficial del Ejército', epithet: '"El Libertador"',
    bounty: 'Desconocida', devil_fruit: 'Choki Choki no Mi', crew: 'Ejército Revolucionario',
    img: w('Inazuma_Anime_Infobox.png'), color: 'from-orange-200 to-white', border: 'border-orange-400',
    description: 'Corta cualquier superficie como si fuera papel usando sus manos-tijera.', power_level: 77, haki: []
  },
  // BEAST PIRATES
  {
    id: 66, name: 'King', slug: 'king', role: 'Comandante Estrella', epithet: '"El Incendio"',
    bounty: '1,390,000,000', devil_fruit: 'Ryu Ryu: Pteranodon', crew: 'Piratas de las Bestias',
    img: w('King_Anime_Infobox.png'), color: 'from-gray-800 to-red-900', border: 'border-red-600',
    description: 'Superviviente de la raza Lunaria, capaz de controlar el fuego y volar.', power_level: 93, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 67, name: 'Queen', slug: 'queen', role: 'Comandante Estrella', epithet: '"La Plaga"',
    bounty: '1,320,000,000', devil_fruit: 'Ryu Ryu: Braquiosaurio', crew: 'Piratas de las Bestias',
    img: w('Queen_Anime_Infobox.png'), color: 'from-yellow-400 to-yellow-600', border: 'border-yellow-500',
    description: 'Un cyborg gigante que utiliza virus letales diseñados por él mismo.', power_level: 92, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 68, name: 'Jack', slug: 'jack', role: 'Comandante Estrella', epithet: '"La Sequía"',
    bounty: '1,000,000,000', devil_fruit: 'Zou Zou: Mamut', crew: 'Piratas de las Bestias',
    img: w('Jack_Anime_Infobox.png'), color: 'from-amber-700 to-amber-900', border: 'border-amber-600',
    description: 'Un hombre-pez gyojin con una resistencia física y mental fuera de serie.', power_level: 90, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 69, name: 'Ulti', slug: 'ulti', role: 'Tobi Roppo', epithet: 'Ninguna',
    bounty: '400,000,000', devil_fruit: 'Ryu Ryu: Paquicefalosaurio', crew: 'Piratas de las Bestias',
    img: w('Ulti_Anime_Infobox.png'), color: 'from-blue-400 to-blue-600', border: 'border-blue-300',
    description: 'Famosa por sus cabezazos letales y su temperamento explosivo.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 70, name: 'Page One', slug: 'page-one', role: 'Tobi Roppo', epithet: 'Ninguna',
    bounty: '290,000,000', devil_fruit: 'Ryu Ryu: Espinosaurio', crew: 'Piratas de las Bestias',
    img: w('Page_One_Anime_Infobox.png'), color: 'from-purple-500 to-purple-800', border: 'border-purple-600',
    description: 'El hermano menor de Ulti. Muy agresivo en su forma de dinosaurio.', power_level: 82, haki: ['Busoshoku', 'Kenbunshoku']
  },
  // BIG MOM PIRATES
  {
    id: 71, name: 'Charlotte Smoothie', slug: 'charlotte-smoothie', role: 'Comandante Dulce', epithet: 'Ninguna',
    bounty: '932,000,000', devil_fruit: 'Shibo Shibo no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Smoothie_Anime_Infobox.png'), color: 'from-pink-300 to-pink-500', border: 'border-pink-400',
    description: 'La 14ª hija de Big Mom. Puede exprimir líquidos de cualquier cosa.', power_level: 91, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 72, name: 'Charlotte Cracker', slug: 'charlotte-cracker', role: 'Comandante Dulce', epithet: '"Cracker de las Mil Brazos"',
    bounty: '860,000,000', devil_fruit: 'Bisu Bisu no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Cracker_Anime_Infobox.png'), color: 'from-orange-700 to-red-800', border: 'border-orange-600',
    description: 'Puede crear y manipular galletas infinitas, usándolas como armaduras.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 73, name: 'Charlotte Perospero', slug: 'charlotte-perospero', role: 'Oficial Jefe', epithet: 'Ninguna',
    bounty: '700,000,000', devil_fruit: 'Pero Pero no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Perospero_Anime_Infobox.png'), color: 'from-yellow-400 to-yellow-600', border: 'border-yellow-500',
    description: 'El hijo mayor de Big Mom. Manipula el caramelo para crear estructuras.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 74, name: 'Charlotte Oven', slug: 'charlotte-oven', role: 'Oficial', epithet: 'Ninguna',
    bounty: '300,000,000', devil_fruit: 'Netsu Netsu no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Oven_Anime_Infobox.png'), color: 'from-red-600 to-red-900', border: 'border-red-500',
    description: 'Puede calentar su cuerpo y objetos a temperaturas extremas.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 75, name: 'Charlotte Pudding', slug: 'charlotte-pudding', role: 'Oficial', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Memo Memo no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Pudding_Anime_Infobox.png'), color: 'from-pink-200 to-pink-400', border: 'border-pink-300',
    description: 'De la raza de los Tres Ojos. Puede manipular los recuerdos de las personas.', power_level: 60, haki: []
  },
  // DRESSROSA & GRAND FLEET
  {
    id: 76, name: 'Bartolomeo', slug: 'bartolomeo', role: 'Capitán', epithet: '"El Caníbal"',
    bounty: '200,000,000', devil_fruit: 'Bari Bari no Mi', crew: 'Barto Club',
    img: w('Bartolomeo_Anime_Infobox.png'), color: 'from-green-500 to-green-800', border: 'border-green-400',
    description: 'El fan número uno de los Mugiwaras. Su barrera es indestructible.', power_level: 83, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 77, name: 'Cavendish', slug: 'cavendish', role: 'Capitán', epithet: '"Príncipe Blanco"',
    bounty: '330,000,000', devil_fruit: 'Ninguna', crew: 'Piratas Hermosos',
    img: w('Cavendish_Anime_Infobox.png'), color: 'from-blue-200 to-blue-400', border: 'border-blue-300',
    description: 'Posee una doble personalidad asesina llamada Hakuba que se activa al dormir.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 78, name: 'Rebecca', slug: 'rebecca', role: 'Ex-Gladiadora', epithet: '"La Mujer Invicta"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Aliado Dressrosa',
    img: w('Rebecca_Anime_Infobox.png'), color: 'from-pink-300 to-pink-500', border: 'border-pink-400',
    description: 'Nieta del Rey Riku, experta en combate defensivo en el Coliseo.', power_level: 70, haki: ['Kenbunshoku']
  },
  {
    id: 79, name: 'Kyros', slug: 'kyros', role: 'Ex-Gladiador', epithet: '"Tronatruenos"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Aliado Dressrosa',
    img: w('Kyros_Anime_Infobox.png'), color: 'from-gray-500 to-gray-700', border: 'border-gray-600',
    description: 'El gladiador más fuerte de la historia de Dressrosa. Padre de Rebecca.', power_level: 86, haki: ['Busoshoku', 'Kenbunshoku']
  },
  // MARINE RECRUITS & HEROES
  {
    id: 80, name: 'Coby', slug: 'coby', role: 'Capitán de la Marina', epithet: '"El Héroe del Incidente de Rocky Port"',
    bounty: '500,000,000 (Cross Guild)', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Koby_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-100 to-pink-300', border: 'border-pink-400',
    description: 'El primer amigo de Luffy en su viaje. Ha crecido bajo la tutela de Garp.', power_level: 85, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 81, name: 'Helmeppo', slug: 'helmeppo', role: 'Capitán de la Marina', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Helmeppo_Anime_Post_Timeskip_Infobox.png'), color: 'from-purple-200 to-purple-400', border: 'border-purple-300',
    description: 'Compañero inseparable de Coby. Usa espadas kukri gemelas.', power_level: 75, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 82, name: 'Smoker', slug: 'smoker', role: 'Vice-Almirante', epithet: '"El Cazador Blanco"',
    bounty: 'Desconocida', devil_fruit: 'Moku Moku no Mi', crew: 'Marina',
    img: w('Smoker_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-300 to-gray-500', border: 'border-gray-400',
    description: 'Un marine con un fuerte sentido de la justicia. Siempre persigue a Luffy.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 83, name: 'Tashigi', slug: 'tashigi', role: 'Capitán de la Marina', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Tashigi_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-300 to-blue-500', border: 'border-blue-400',
    description: 'Coleccionista de katanas legendarias. Sueña con recuperarlas todas de los piratas.', power_level: 72, haki: ['Busoshoku', 'Kenbunshoku']
  },
  // SKYPIEA & THRILLER BARK
  {
    id: 84, name: 'Enel', slug: 'enel', role: 'Dios de Skypiea (Ex)', epithet: '"Dios"',
    bounty: 'N/A (Equivalente 500M+)', devil_fruit: 'Goro Goro no Mi', crew: 'Ejército de Dios',
    img: w('Enel_Anime_Infobox.png'), color: 'from-yellow-200 to-yellow-400', border: 'border-yellow-500',
    description: 'Gobernó las islas del cielo con un poder eléctrico absoluto antes de ser derrotado.', power_level: 90, haki: ['Kenbunshoku']
  },
  {
    id: 85, name: 'Wyper', slug: 'wyper', role: 'Guerrero Shandia', epithet: '"Berserker"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Shandia',
    img: w('Wyper_Anime_Infobox.png'), color: 'from-red-800 to-red-950', border: 'border-red-700',
    description: 'Líder de los guerreros de Shandia que lucharon por recuperar su tierra natal.', power_level: 80, haki: []
  },
  {
    id: 86, name: 'Perona', slug: 'perona', role: 'Oficial', epithet: '"Ghost Princess"',
    bounty: 'Desconocida', devil_fruit: 'Horo Horo no Mi', crew: 'Piratas de Thriller Bark',
    img: w('Perona_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-400 to-pink-600', border: 'border-pink-500',
    description: 'Puede crear fantasmas que deprimen a cualquiera que los toque.', power_level: 75, haki: []
  },
  {
    id: 87, name: 'Absalom', slug: 'absalom', role: 'Oficial', epithet: '"Rey Cementerio"',
    bounty: 'Desconocida', devil_fruit: 'Suke Suke no Mi', crew: 'Piratas de Thriller Bark',
    img: w('Absalom_Anime_Infobox.png'), color: 'from-yellow-700 to-amber-900', border: 'border-yellow-600',
    description: 'Tenía la capacidad de volverse invisible antes de que su fruta fuera robada por Shiryu.', power_level: 70, haki: []
  },
  // IMPEL DOWN & FISHMAN ISLAND
  {
    id: 88, name: 'Hannyabal', slug: 'hannyabal', role: 'Alcaide de Impel Down', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Impel Down',
    img: w('Hannyabal_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-500 to-orange-700', border: 'border-red-600',
    description: 'Sustituyó a Magellan como alcaide. Es extremadamente ambicioso pero leal.', power_level: 78, haki: []
  },
  {
    id: 89, name: 'Hody Jones', slug: 'hody-jones', role: 'Capitán', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna (E.S. Pills)', crew: 'Nuevos Piratas Gyojin',
    img: w('Hody_Jones_Anime_Infobox.png'), color: 'from-red-900 to-black', border: 'border-red-700',
    description: 'Un gran racista que odia a los humanos por encima de todo. Consumidor de drogas.', power_level: 82, haki: []
  },
  {
    id: 90, name: 'Neptune', slug: 'neptune', role: 'Rey del Reino Ryugu', epithet: '"Dios del Mar"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino Ryugu',
    img: w('Neptune_Anime_Infobox.png'), color: 'from-orange-400 to-orange-600', border: 'border-orange-500',
    description: 'Gobernante pacífico de la Isla Gyojin y padre de la princesa Shirahoshi.', power_level: 80, haki: ['Kenbunshoku']
  },
  // PAST LEGENDS & OTHERS
  {
    id: 91, name: 'Rocks D. Xebec', slug: 'rocks-d-xebec', role: 'Capitán (Difunto)', epithet: 'Ninguna',
    bounty: 'Desconocida (La mayor de su época)', devil_fruit: 'Desconocida', crew: 'Piratas de Rocks',
    img: w('Rocks_D._Xebec_Profile.png'), color: 'from-gray-900 to-black', border: 'border-gray-800',
    description: 'El mayor rival de Roger y Garp. Buscaba ser el Rey del Mundo.', power_level: 100, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 92, name: 'Scopper Gaban', slug: 'scopper-gaban', role: 'Combatiente', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Roger',
    img: w('Scopper_Gaban_Anime_Infobox.png'), color: 'from-yellow-400 to-amber-600', border: 'border-amber-500',
    description: 'La tercera fuerza de la tripulación de Roger junto a Roger y Rayleigh.', power_level: 93, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 93, name: 'Dr. Vegapunk', slug: 'dr-vegapunk', role: 'Científico Jefe', epithet: '"El Genio"',
    bounty: 'N/A', devil_fruit: 'Nomi Nomi no Mi', crew: 'Marina / Egghead',
    img: w('Vegapunk_Stella_Anime_Infobox.png'), color: 'from-blue-200 to-blue-400', border: 'border-blue-300',
    description: 'El hombre con el cerebro más grande del mundo. Su tecnología está 500 años adelantada.', power_level: 60, haki: []
  },
  {
    id: 94, name: 'Sentomaru', slug: 'sentomaru', role: 'Capitán de la Unidad Científica', epithet: '"Hacha de Guerra"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Sentomaru_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-400 to-red-600', border: 'border-red-500',
    description: 'Posee la defensa más fuerte del mundo gracias a su dominio del Haki de Armadura.', power_level: 84, haki: ['Busoshoku']
  },
  {
    id: 95, name: 'Ivankov', slug: 'ivankov', role: 'Reina del Reino Kamabakka', epithet: '"Persona Milagrosa"',
    bounty: 'Desconocida', devil_fruit: 'Horu Horu no Mi', crew: 'Ejército Revolucionario',
    img: w('Emporio_Ivankov_Anime_Infobox.png'), color: 'from-purple-500 to-purple-800', border: 'border-purple-600',
    description: 'Gran amigo de Dragon y salvador de Luffy en Impel Down.', power_level: 88, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 96, name: 'Nekomamushi', slug: 'nekomamushi', role: 'Duque de Mokomo', epithet: '"Rey de la Noche"',
    bounty: '563,000,000', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Nekomamushi_Anime_Infobox.png'), color: 'from-yellow-600 to-amber-800', border: 'border-yellow-600',
    description: 'El guardián nocturno del bosque de la ballena en Zou. Maestro mink.', power_level: 87, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 97, name: 'Inuarashi', slug: 'inuarashi', role: 'Duque de Mokomo', epithet: '"Rey del Día"',
    bounty: '511,070,000', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Inuarashi_Anime_Infobox.png'), color: 'from-red-200 to-red-400', border: 'border-red-300',
    description: 'El soberano diurno de Zou. Experto espadachín y mink de gran honor.', power_level: 87, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 98, name: 'Fisher Tiger', slug: 'fisher-tiger', role: 'Capitán', epithet: '"El Libertador"',
    bounty: '230,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sol',
    img: w('Fisher_Tiger_Anime_Infobox.png'), color: 'from-red-700 to-red-950', border: 'border-red-800',
    description: 'El legendario gyojin que escaló la Red Line y liberó a los esclavos de Mary Geoise.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 99, name: 'Arlong', slug: 'arlong', role: 'Capitán', epithet: '"La Sierra"',
    bounty: '20,000,000', devil_fruit: 'Ninguna', crew: 'Piratas de Arlong',
    img: w('Arlong_Anime_Infobox.png'), color: 'from-blue-800 to-blue-950', border: 'border-blue-700',
    description: 'Terrorizó el East Blue y a Nami durante años con su racismo extremo.', power_level: 70, haki: []
  },
  {
    id: 100, name: 'Kuro', slug: 'kuro', role: 'Capitán', epithet: '"Kuro de las Mil Trampas"',
    bounty: '16,000,000', devil_fruit: 'Ninguna', crew: 'Piratas Gato Negro',
    img: w('Kuro_Anime_Infobox.png'), color: 'from-gray-800 to-black', border: 'border-gray-600',
    description: 'Un genio malvado que usa garras de gato largas. Posee una gran velocidad.', power_level: 65, haki: []
  },
  {
    id: 101, name: 'Don Krieg', slug: 'don-krieg', role: 'Almirante', epithet: '"El Sujeto más Fuerte del East Blue"',
    bounty: '17,000,000', devil_fruit: 'Ninguna', crew: 'Piratas de Krieg',
    img: w('Don_Krieg_Anime_Infobox.png'), color: 'from-yellow-700 to-yellow-900', border: 'border-yellow-600',
    description: 'Lideraba una flota de 50 barcos. Cubierto de armadura y armas químicas.', power_level: 66, haki: []
  },
  {
    id: 102, name: 'Alvida', slug: 'alvida', role: 'Capitán', epithet: '"Maza de Hierro"',
    bounty: '5,000,000', devil_fruit: 'Sube Sube no Mi', crew: 'Cross Guild (Asociada)',
    img: w('Alvida_Anime_Infobox.png'), color: 'from-pink-300 to-pink-500', border: 'border-pink-400',
    description: 'La primera rival de Luffy. Su fruta hace que todo resbale de su piel.', power_level: 55, haki: []
  },
  {
    id: 103, name: 'Morgan', slug: 'morgan', role: 'Ex-Capitán de la Marina', epithet: '"Mano de Hacha"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Marina (Ex)',
    img: w('Morgan_Anime_Infobox.png'), color: 'from-gray-600 to-gray-800', border: 'border-gray-500',
    description: 'Un tirano de la Marina que gobernó Shells Town con su hacha.', power_level: 45, haki: []
  },
  {
    id: 104, name: 'Kuroobi', slug: 'kuroobi', role: 'Oficial', epithet: 'Ninguna',
    bounty: '9,000,000', devil_fruit: 'Ninguna', crew: 'Piratas de Arlong',
    img: w('Kuroobi_Anime_Infobox.png'), color: 'from-blue-700 to-blue-900', border: 'border-blue-600',
    description: 'Experto en el Karate Gyojin de nivel 40.', power_level: 60, haki: []
  },
  {
    id: 105, name: 'Chew', slug: 'chew', role: 'Oficial', epithet: 'Ninguna',
    bounty: '5,500,000', devil_fruit: 'Ninguna', crew: 'Piratas de Arlong',
    img: w('Chew_Anime_Infobox.png'), color: 'from-blue-400 to-blue-600', border: 'border-blue-300',
    description: 'Un hombre-pez de la raza de los peces arquero que dispara chorros de agua.', power_level: 58, haki: []
  },
  {
    id: 106, name: 'Hachi', slug: 'hachi', role: 'Oficial / Cocinero', epithet: '"Seis Brazos"',
    bounty: '8,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sol (Ex)',
    img: w('Hatchan_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-400 to-pink-600', border: 'border-pink-500',
    description: 'Un pulpo que usa seis katanas. Se convirtió en un gran aliado de los Mugiwaras.', power_level: 65, haki: []
  },
  {
    id: 107, name: 'Nefeltari Vivi', slug: 'nefeltari-vivi', role: 'Princesa / Mugiwara Honoraria', epithet: '"Miss Wednesday"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Arabasta',
    img: w('Nefertari_Vivi_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-200 to-cyan-400', border: 'border-blue-300',
    description: 'La amada princesa de Arabasta que navegó con Luffy para salvar su reino.', power_level: 40, haki: []
  },
  {
    id: 108, name: 'Wapol', slug: 'wapol', role: 'Rey (Ex)', epithet: '"Munch-Munch"',
    bounty: 'Desconocida', devil_fruit: 'Baku Baku no Mi', crew: 'Reino de Drum (Ex)',
    img: w('Wapol_Anime_Infobox.png'), color: 'from-purple-400 to-purple-600', border: 'border-purple-500',
    description: 'Un rey cobarde que puede comer cualquier cosa y asimilarla.', power_level: 60, haki: []
  },
  {
    id: 109, name: 'Dalton', slug: 'dalton', role: 'Rey / Guerrero', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ushi Ushi: Bisonte', crew: 'Reino de Sakura',
    img: w('Dalton_Anime_Infobox.png'), color: 'from-amber-800 to-amber-950', border: 'border-amber-700',
    description: 'Un guerrero noble que lideró la revolución contra Wapol.', power_level: 72, haki: []
  },
  {
    id: 110, name: 'Pell', slug: 'pell', role: 'Guerrero Guardián', epithet: '"El Halcón"',
    bounty: 'N/A', devil_fruit: 'Tori Tori: Halcón', crew: 'Ejército Real de Arabasta',
    img: w('Pell_Anime_Infobox.png'), color: 'from-yellow-200 to-yellow-400', border: 'border-yellow-300',
    description: 'El guardián más fuerte de Arabasta, capaz de volar y proteger su patria.', power_level: 75, haki: []
  },
  {
    id: 111, name: 'Chaka', slug: 'chaka', role: 'Guerrero Guardián', epithet: '"El Chacal"',
    bounty: 'N/A', devil_fruit: 'Inu Inu: Chacal', crew: 'Ejército Real de Arabasta',
    img: w('Chaka_Anime_Infobox.png'), color: 'from-red-800 to-red-950', border: 'border-red-700',
    description: 'Comandante de las fuerzas de Arabasta junto a Pell.', power_level: 74, haki: []
  },
  {
    id: 113, name: 'Gan Fall', slug: 'gan-fall', role: 'Dios del Cielo (Ex)', epithet: '"El Caballero del Cielo"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Skypiea',
    img: w('Gan_Fall_Anime_Infobox.png'), color: 'from-gray-400 to-gray-600', border: 'border-gray-500',
    description: 'El noble soberano de Skypiea que volaba sobre Pierre.', power_level: 76, haki: ['Kenbunshoku']
  },
  {
    id: 114, name: 'Foxy', slug: 'foxy', role: 'Capitán', epithet: '"El Zorro Plateado"',
    bounty: '24,000,000', devil_fruit: 'Noro Noro no Mi', crew: 'Piratas de Foxy',
    img: w('Foxy_Anime_Infobox.png'), color: 'from-gray-500 to-black', border: 'border-gray-400',
    description: 'Organizador del Davy Back Fight y experto en ralentizar enemigos.', power_level: 52, haki: []
  },
  {
    id: 115, name: 'Iceburg', slug: 'iceburg', role: 'Alcalde / Carpintero', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Galley-La Company',
    img: w('Iceburg_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-400 to-blue-600', border: 'border-blue-300',
    description: 'Sucesor de Tom y alcalde de Water 7 que unificó los muelles.', power_level: 40, haki: []
  },
  {
    id: 116, name: 'Paulie', slug: 'paulie', role: 'Capataz Carpintero', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Galley-La Company',
    img: w('Paulie_Anime_Infobox.png'), color: 'from-amber-600 to-amber-800', border: 'border-amber-500',
    description: 'Experto en el uso de cuerdas y carpintería naval.', power_level: 75, haki: []
  },
  {
    id: 117, name: 'Kokoro', slug: 'kokoro', role: 'Jefa de Estación', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Tren Marino (Shift Station)',
    img: w('Kokoro_Anime_Infobox.png'), color: 'from-cyan-300 to-blue-500', border: 'border-cyan-200',
    description: 'Una sirena de la marina que operaba el tren marino con su gato Chimney.', power_level: 45, haki: []
  },
  {
    id: 118, name: 'Tom', slug: 'tom', role: 'Gran Carpintero', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: "Tom's Workers",
    img: w('Tom_Anime_Infobox.png'), color: 'from-yellow-800 to-yellow-950', border: 'border-yellow-700',
    description: 'El legendario hombre-pez que construyó el Oro Jackson de Roger.', power_level: 80, haki: []
  },
  {
    id: 119, name: 'Hina', slug: 'hina', role: 'Contraalmirante', epithet: '"La Jaula Negra"',
    bounty: 'N/A', devil_fruit: 'Ori Ori no Mi', crew: 'Marina',
    img: w('Hina_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-500 to-pink-800', border: 'border-pink-600',
    description: 'Compañera de Smoker, experta en atrapar a piratas con sus jaulas.', power_level: 82, haki: ['Busoshoku']
  },
  {
    id: 120, name: 'Gaimon', slug: 'gaimon', role: 'Vigilante', epithet: '"El Hombre del Cofre"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Isla de los Animales Raros',
    img: w('Gaimon_Anime_Infobox.png'), color: 'from-green-600 to-green-900', border: 'border-green-500',
    description: 'Un hombre atrapado accidentalmente en un cofre del tesoro durante 20 años.', power_level: 10, haki: []
  },
  {
    id: 121, name: 'Laboon', slug: 'laboon', role: 'Ballena Isla', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Piratas Rumbar (Ex)',
    img: w('Laboon_Anime_Infobox.png'), color: 'from-blue-800 to-black', border: 'border-blue-600',
    description: 'La ballena gigante que espera en la entrada del Grand Line el regreso de Brook.', power_level: 85, haki: []
  },
  {
    id: 131, name: 'Jaygarcia Saturn', slug: 'jaygarcia-saturn', role: 'Gorosei | Guerrero Científico', epithet: '"Dios de la Defensa"',
    bounty: 'N/A', devil_fruit: 'Gyuuki (Yokai)', crew: 'Gobierno Mundial',
    img: w('Jaygarcia_Saturn_Anime_Infobox.png'), color: 'from-red-900 to-black', border: 'border-red-950',
    description: 'Uno de los cinco ancianos que gobiernan el mundo, posee una forma monstruosa de araña yokai.', power_level: 98, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 132, name: 'Marcus Mars', slug: 'marcus-mars', role: 'Gorosei | Guerrero Ambiental', epithet: '"Dios de la Agricultura"',
    bounty: 'N/A', devil_fruit: 'Itsumade (Yokai)', crew: 'Gobierno Mundial',
    img: w('Marcus_Mars_Anime_Infobox.png'), color: 'from-orange-800 to-black', border: 'border-orange-950',
    description: 'Anciano capaz de transformarse en un gigantesco pájaro yokai que escupe fuego.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 133, name: 'Topman Warcury', slug: 'topman-warcury', role: 'Gorosei | Guerrero de Ley', epithet: '"Dios de la Justicia"',
    bounty: 'N/A', devil_fruit: 'Houki (Yokai)', crew: 'Gobierno Mundial',
    img: w('Topman_Warcury_Anime_Infobox.png'), color: 'from-gray-950 to-black', border: 'border-gray-900',
    description: 'Se transforma en un jabalí gigante con una piel tan dura que incluso Luffy se lastima al golpearlo.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 134, name: 'Ethanbaron V. Nusjuro', slug: 'ethanbaron-v-nusjuro', role: 'Gorosei | Guerrero Financiero', epithet: '"Dios de las Finanzas"',
    bounty: 'N/A', devil_fruit: 'Bakotsu (Yokai)', crew: 'Gobierno Mundial',
    img: w('Ethanbaron_V._Nusjuro_Anime_Infobox.png'), color: 'from-orange-900 to-black', border: 'border-orange-700',
    description: 'Un espadachín esqueleto que se transforma en un centauro óseo capaz de congelar a sus enemigos.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 135, name: 'Shepherd Ju Peter', slug: 'shepherd-ju-peter', role: 'Gorosei | Guerrero de Agricultura', epithet: '"Dios de la Fertilidad"',
    bounty: 'N/A', devil_fruit: 'Sandworm (Yokai)', crew: 'Gobierno Mundial',
    img: w('Shepherd_Ju_Peter_Anime_Infobox.png'), color: 'from-yellow-800 to-black', border: 'border-yellow-950',
    description: 'El anciano más joven, capaz de convertirse en un gusano de tierra colosal que devora todo.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 136, name: 'Vegapunk (Stella)', slug: 'vegapunk-stella', role: 'Genio Científico', epithet: 'Líder del SSG',
    bounty: 'N/A', devil_fruit: 'Nomi Nomi no Mi', crew: 'Gobierno Mundial (Ex)',
    img: w('Dr._Vegapunk_Anime_Infobox.png'), color: 'from-orange-100 to-orange-400', border: 'border-orange-300',
    description: 'El hombre más inteligente del mundo, su cerebro ha crecido hasta proporciones gigantescas.', power_level: 60, haki: []
  },
  {
    id: 137, name: 'Koby', slug: 'koby', role: 'Capitán | Miembro de SWORD', epithet: '"El Héroe de Rocky Port"',
    bounty: '500,000,000 (Cross Guild)', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Koby_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-100 to-blue-400', border: 'border-pink-300',
    description: 'Discípulo de Garp que sueña con ser Almirante. Ha desarrollado un Haki de observación increíble.', power_level: 85, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 139, name: 'Bepo', slug: 'bepo', role: 'Navegante | Combatiente', epithet: 'Ninguna',
    bounty: '500', devil_fruit: 'Ninguna', crew: 'Piratas Heart',
    img: w('Bepo_Anime_Post_Timeskip_Infobox.png'), color: 'from-white to-gray-300', border: 'border-orange-400',
    description: 'Un Mink oso polar experto en artes marciales y el navegante de Law.', power_level: 80, haki: []
  },
  {
    id: 141, name: 'Shiryu', slug: 'shiryu', role: 'Capitán de la Segunda Nave', epithet: '"Shiryu de la Lluvia"',
    bounty: 'Desconocida', devil_fruit: 'Suke Suke no Mi', crew: 'Piratas de Barbanegra',
    img: w('Shiryu_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-700 to-black', border: 'border-gray-500',
    description: 'Ex-alcaide de Impel Down conocido por su brutalidad y su invisibilidad.', power_level: 94, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 142, name: 'Vasco Shot', slug: 'vasco-shot', role: 'Capitán de la Octava Nave', epithet: '"El Gran Bebedor"',
    bounty: 'Desconocida', devil_fruit: 'Gabu Gabu no Mi', crew: 'Piratas de Barbanegra',
    img: w('Vasco_Shot_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-800 to-black', border: 'border-pink-900',
    description: 'Uno de los criminales más peligrosos del Nivel 6 de Impel Down.', power_level: 88, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 143, name: 'Avalo Pizarro', slug: 'avalo-pizarro', role: 'Capitán de la Cuarta Nave', epithet: '"El Rey Corrupto"',
    bounty: 'Desconocida', devil_fruit: 'Shima Shima no Mi', crew: 'Piratas de Barbanegra',
    img: w('Avalo_Pizarro_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-700 to-blue-900', border: 'border-blue-600',
    description: 'Puede asimilar y manipular islas enteras como si fueran su propio cuerpo.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 144, name: 'Sanjuan Wolf', slug: 'sanjuan-wolf', role: 'Capitán de la Séptima Nave', epithet: '"El Acorazado Colosal"',
    bounty: 'Desconocida', devil_fruit: 'Deka Deka no Mi', crew: 'Piratas de Barbanegra',
    img: w('Sanjuan_Wolf_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-300 to-gray-500', border: 'border-gray-400',
    description: 'El gigante más grande del mundo, tan enorme que puede caminar por el fondo del mar.', power_level: 84, haki: []
  },
  {
    id: 145, name: 'Catarina Devon', slug: 'catarina-devon', role: 'Capitán de la Sexta Nave', epithet: '"Cazadora de la Luna Creciente"',
    bounty: 'Desconocida', devil_fruit: 'Inu Inu: Kyubi no Kitsune', crew: 'Piratas de Barbanegra',
    img: w('Catarina_Devon_Anime_Post_Timeskip_Infobox.png'), color: 'from-purple-400 to-purple-700', border: 'border-purple-300',
    description: 'La mujer más peligrosa de Impel Down, capaz de transformarse en cualquier persona.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 146, name: 'Morgans', slug: 'morgans', role: 'Presidente del World Economic Journal', epithet: '"Big News"',
    bounty: 'N/A', devil_fruit: 'Tori Tori: Albatros', crew: 'Prensa Mundial',
    img: w('Morgans_Anime_Infobox.png'), color: 'from-blue-200 to-white', border: 'border-blue-300',
    description: 'Controla el flujo de información del mundo y es un apasionado de las grandes noticias.', power_level: 65, haki: []
  },
  {
    id: 147, name: 'Stussy (Real)', slug: 'stussy-real', role: 'Ex-Pirata de Rocks', epithet: '"Miss Buckingham Stussy"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Rocks (Ex)',
    img: w('Miss_Buckingham_Stussy_Infobox.png'), color: 'from-pink-900 to-red-900', border: 'border-pink-600',
    description: 'La mujer que afirma ser la madre de Weevil y ex-amante de Whitebeard.', power_level: 70, haki: []
  },
  {
    id: 148, name: 'Bogard', slug: 'bogard', role: 'Oficial de la Marina', epithet: '"La Mano Derecha de Garp"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Bogard_Anime_Infobox.png'), color: 'from-gray-500 to-black', border: 'border-gray-400',
    description: 'Un habilidoso espadachín que siempre acompaña al Vicealmirante Garp.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 149, name: 'Zeff', slug: 'zeff', role: 'Chef Jefe', epithet: '"Pierna Roja"',
    bounty: 'N/A (Ex-Pirata)', devil_fruit: 'Ninguna', crew: 'Baratie',
    img: w('Zeff_Anime_Infobox.png'), color: 'from-yellow-700 to-amber-900', border: 'border-yellow-600',
    description: 'Antiguo pirata que sacrificó su pierna para salvar a Sanji. Maestro del estilo de pierna.', power_level: 75, haki: []
  },
  {
    id: 150, name: 'Bell-mere', slug: 'bell-mere', role: 'Ex-Oficial de la Marina', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Marina (Ex)',
    img: w('Bell-mere_Anime_Infobox.png'), color: 'from-orange-400 to-red-600', border: 'border-orange-300',
    description: 'La madre adoptiva de Nami y Nojiko, que dio su vida por sus hijas.', power_level: 40, haki: []
  },
  {
    id: 151, name: 'Portgas D. Ace', slug: 'portgas-d-ace', role: 'Comandante de la 2ª División', epithet: '"Puño de Fuego"',
    bounty: '550,000,000', devil_fruit: 'Mera Mera no Mi', crew: 'Piratas de Barbablanca',
    img: w('Portgas_D._Ace_Anime_Infobox.png'), color: 'from-orange-600 to-red-700', border: 'border-orange-500',
    description: 'Hijo biológico del Rey de los Piratas y hermano jurado de Luffy. Dio su vida para proteger a Luffy en Marineford.', power_level: 90, haki: ['Haoshoku', 'Busoshoku', 'Kenbunshoku']
  },
  {
    id: 152, name: 'Marco', slug: 'marco', role: 'Comandante de la 1ª División', epithet: '"El Fénix"',
    bounty: '1,374,000,000', devil_fruit: 'Tori Tori: Modelo Fénix', crew: 'Piratas de Barbablanca',
    img: w('Marco_Anime_Post_Timeskip_Infobox.png'), color: 'from-cyan-600 to-yellow-600', border: 'border-cyan-500',
    description: 'Primer comandante y médico jefe de Barbablanca. Sus llamas azules curan cualquier herida.', power_level: 94, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 153, name: 'Jozu', slug: 'jozu', role: 'Comandante de la 3ª División', epithet: '"Diamante Jozu"',
    bounty: 'Desconocida', devil_fruit: 'Kira Kira no Mi', crew: 'Piratas de Barbablanca',
    img: w('Jozu_Anime_Infobox.png'), color: 'from-blue-700 to-slate-800', border: 'border-blue-500',
    description: 'Comandante de vanguardia de Barbablanca. Puede convertir su cuerpo entero en diamante puro.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 154, name: 'Vista', slug: 'vista', role: 'Comandante de la 5ª División', epithet: '"Flor de la Espada"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Barbablanca',
    img: w('Vista_Anime_Infobox.png'), color: 'from-indigo-900 to-gray-800', border: 'border-indigo-500',
    description: 'Uno de los mejores espadachines del mundo, capaz de enfrentarse en igualdad con Dracule Mihawk.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 155, name: 'Izo', slug: 'izo', role: 'Comandante de la 16ª División', epithet: 'Ninguna',
    bounty: '510,000,000', devil_fruit: 'Ninguna', crew: 'Piratas de Barbablanca',
    img: w('Izo_Anime_Infobox.png'), color: 'from-pink-600 to-purple-800', border: 'border-pink-500',
    description: 'Antiguo Samurai de Wano y comandante en el barco de Barbablanca. Utiliza pistolas gemelas.', power_level: 83, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 156, name: 'Thatch', slug: 'thatch', role: 'Comandante de la 4ª División', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Barbablanca',
    img: w('Thatch_Anime_Infobox.png'), color: 'from-yellow-600 to-orange-700', border: 'border-yellow-500',
    description: 'Comandante de Barbablanca asesinado a traición por Barbanegra para robar la Yami Yami no Mi.', power_level: 80, haki: ['Busoshoku']
  },
  {
    id: 157, name: 'Benn Beckman', slug: 'benn-beckman', role: 'Vice-Capitán', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas del Pelirrojo',
    img: w('Benn_Beckman_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-700 to-slate-900', border: 'border-gray-500',
    description: 'La mano derecha de Shanks, considerado el hombre con el coeficiente intelectual más alto del East Blue.', power_level: 95, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 158, name: 'Lucky Roux', slug: 'lucky-roux', role: 'Combatiente Oficial', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas del Pelirrojo',
    img: w('Lucky_Roux_Anime_Post_Timeskip_Infobox.png'), color: 'from-green-600 to-emerald-800', border: 'border-green-500',
    description: 'Oficial de Shanks increíblemente veloz. Fue el primero en disparar un arma en la serie.', power_level: 90, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 159, name: 'Yasopp', slug: 'yasopp', role: 'Francotirador Oficial', epithet: '"El Perseguidor"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas del Pelirrojo',
    img: w('Yasopp_Anime_Post_Timeskip_Infobox.png'), color: 'from-yellow-600 to-amber-700', border: 'border-yellow-500',
    description: 'Padre de Usopp y el tirador estelar de Shanks. Nunca falla en el blanco.', power_level: 89, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 160, name: 'Ryokugyu (Aramaki)', slug: 'ryokugyu-aramaki', role: 'Almirante', epithet: '"Toro Verde"',
    bounty: 'N/A', devil_fruit: 'Mori Mori no Mi', crew: 'La Marina',
    img: w('Aramaki_Anime_Infobox.png'), color: 'from-green-800 to-black', border: 'border-green-600',
    description: 'Almirante implacable capaz de transformarse y absorber nutrientes como un bosque viviente.', power_level: 94, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 161, name: 'Tsuru', slug: 'tsuru', role: 'Vicealmirante', epithet: '"La Gran Táctica"',
    bounty: 'N/A', devil_fruit: 'Washi Washi no Mi', crew: 'La Marina',
    img: w('Tsuru_Anime_Infobox.png'), color: 'from-blue-200 to-gray-400', border: 'border-blue-300',
    description: 'Veterana estratega contemporánea de Garp y Sengoku. Lava y cuelga a secar la maldad de los corazones.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 162, name: 'Kujaku', slug: 'kujaku', role: 'Contraalmirante | SWORD', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Muchi Muchi no Mi', crew: 'La Marina',
    img: w('Kujaku_Anime_Infobox.png'), color: 'from-pink-400 to-purple-600', border: 'border-pink-300',
    description: 'Nieta de Tsuru y miembro de SWORD, utiliza un látigo que le permite controlar objetos inanimados.', power_level: 80, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 163, name: 'Prince Grus', slug: 'prince-grus', role: 'Contraalmirante | SWORD', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Gunyu Gunyu no Mi', crew: 'La Marina',
    img: w('Prince_Grus_Anime_Infobox.png'), color: 'from-blue-600 to-indigo-800', border: 'border-blue-500',
    description: 'Comandante de SWORD capaz de manipular la arcilla para forjar soldados golems indestructibles.', power_level: 83, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 164, name: 'Hibari', slug: 'hibari', role: 'Comandante | SWORD', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'La Marina',
    img: w('Hibari_Anime_Infobox.png'), color: 'from-orange-300 to-orange-500', border: 'border-orange-400',
    description: 'Habilidosa francotiradora de SWORD que dispara balas especiales congelantes creadas por Vegapunk.', power_level: 76, haki: ['Kenbunshoku']
  },
  {
    id: 165, name: 'Kong', slug: 'kong', role: 'Comandante en Jefe del Gobierno', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Gobierno Mundial',
    img: w('Kong_Anime_Infobox.png'), color: 'from-gray-800 to-black', border: 'border-gray-600',
    description: 'Antiguo almirante de la flota de la marina en los tiempos de Roger. Ahora coordina el CP y la Marina.', power_level: 92, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 166, name: 'Spandam', slug: 'spandam', role: 'Oficial del CP0', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'CP9 / CP0',
    img: w('Spandam_Anime_Post_Timeskip_Infobox.png'), color: 'from-purple-800 to-gray-900', border: 'border-purple-600',
    description: 'Cobarde y despiadado ex-director del CP9 que ordenó la destrucción de Enies Lobby.', power_level: 35, haki: []
  },
  {
    id: 167, name: 'Jabra', slug: 'jabra', role: 'Agente del CP9', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Inu Inu: Modelo Lobo', crew: 'CP9 / CP0',
    img: w('Jabra_Anime_Infobox.png'), color: 'from-red-900 to-black', border: 'border-red-700',
    description: 'Tercer miembro más fuerte del CP9 en su momento, mentiroso compulsivo y rival de Kaku.', power_level: 81, haki: ['Busoshoku']
  },
  {
    id: 168, name: 'Kumadori', slug: 'kumadori', role: 'Agente del CP9', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'CP9 / CP0',
    img: w('Kumadori_Anime_Infobox.png'), color: 'from-pink-700 to-red-950', border: 'border-pink-500',
    description: 'Actor de kabuki del CP9 que domina el Retorno a la Vida para controlar su pelo como tentáculos.', power_level: 78, haki: []
  },
  {
    id: 169, name: 'Fukuro', slug: 'fukuro', role: 'Agente del CP9', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'CP9 / CP0',
    img: w('Fukuro_Anime_Infobox.png'), color: 'from-green-700 to-teal-900', border: 'border-green-600',
    description: 'Agente de boca ancha con cremallera que calcula el Douki (nivel físico) de los miembros.', power_level: 76, haki: []
  },
  {
    id: 170, name: 'Carrot', slug: 'carrot', role: 'Líder del Ducado de Mokomo', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Carrot_Anime_Post_Timeskip_Infobox.png'), color: 'from-amber-200 to-amber-400', border: 'border-yellow-400',
    description: 'Mink conejo de la guardia real de Zou, capaz de transformarse en Sulong bajo la luna llena.', power_level: 82, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 171, name: 'Pedro', slug: 'pedro', role: 'Capitán de los Guardianes (Difunto)', epithet: '"Pedro de las Copas"',
    bounty: '382,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sol (Ex)',
    img: w('Pedro_Anime_Infobox.png'), color: 'from-amber-800 to-orange-950', border: 'border-amber-600',
    description: 'Mink jaguar que sacrificó su vida en Whole Cake para salvar a los de Sombrero de Paja.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 172, name: 'Pekoms', slug: 'pekoms', role: 'Combatiente', epithet: 'Ninguna',
    bounty: '330,000,000', devil_fruit: 'Kame Kame no Mi', crew: 'Piratas de Big Mom',
    img: w('Pekoms_Anime_Infobox.png'), color: 'from-yellow-500 to-yellow-800', border: 'border-yellow-400',
    description: 'Mink león del barco de Big Mom que puede replegarse en un caparazón de tortuga irrompible.', power_level: 81, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 173, name: 'Barón Tamago', slug: 'baron-tamago', role: 'Oficial de Infantería', epithet: 'Ninguna',
    bounty: '429,000,000', devil_fruit: 'Tama Tama no Mi', crew: 'Piratas de Big Mom',
    img: w('Tamago_Anime_Infobox.png'), color: 'from-pink-600 to-red-800', border: 'border-pink-500',
    description: 'Caballero de piernas largas que evoluciona cíclicamente de huevo a polluelo y a gallo.', power_level: 83, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 174, name: 'Charlotte Daifuku', slug: 'charlotte-daifuku', role: 'Oficial', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Hoya Hoya no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Daifuku_Anime_Infobox.png'), color: 'from-blue-600 to-blue-900', border: 'border-blue-500',
    description: 'Tercer hijo de Big Mom, capaz de invocar a un genio devastador frotando su propio vientre.', power_level: 86, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 175, name: 'Charlotte Brulee', slug: 'charlotte-brulee', role: 'Oficial', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Mira Mira no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Brulee_Anime_Infobox.png'), color: 'from-indigo-800 to-indigo-950', border: 'border-indigo-600',
    description: 'Hermana de Katakuri, manipula el mundo de los espejos para reflejar o teletransportar ataques.', power_level: 70, haki: []
  },
  {
    id: 176, name: 'Charlotte Amande', slug: 'charlotte-amande', role: 'Oficial / Espadachina', epithet: '"La Dama de la Colisión de Hilos"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Amande_Anime_Infobox.png'), color: 'from-cyan-800 to-slate-900', border: 'border-cyan-600',
    description: 'Habilidosa espadachina que utiliza la katana Shirauo para cortar lentamente y torturar.', power_level: 82, haki: ['Busoshoku']
  },
  {
    id: 177, name: "Charlotte Mont-d'Or", slug: 'charlotte-mont-d-or', role: 'Oficial / Escribano', epithet: '"El Escribano"',
    bounty: 'Desconocida', devil_fruit: 'Buku Buku no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Mont-d%27Or_Anime_Infobox.png'), color: 'from-yellow-700 to-red-800', border: 'border-yellow-600',
    description: 'Controla el mundo de los libros de Totto Land para encerrar a prisioneros eternamente.', power_level: 80, haki: ['Busoshoku']
  },
  {
    id: 178, name: 'Charlotte Galette', slug: 'charlotte-galette', role: 'Oficial', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Bata Bata no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Galette_Anime_Infobox.png'), color: 'from-purple-600 to-pink-900', border: 'border-purple-500',
    description: 'Hija de Big Mom capaz de invocar y manipular la mantequilla caliente para inmovilizar enemigos.', power_level: 75, haki: []
  },
  {
    id: 179, name: 'Caesar Clown', slug: 'caesar-clown', role: 'Científico Loco', epithet: '"Gastino"',
    bounty: '300,000,000', devil_fruit: 'Gasu Gasu no Mi', crew: 'Donquixote Family',
    img: w('Caesar_Clown_Anime_Infobox.png'), color: 'from-indigo-600 to-blue-800', border: 'border-indigo-500',
    description: 'Antiguo colega de Vegapunk obsesionado con crear armas de destrucción masiva gaseosas.', power_level: 85, haki: []
  },
  {
    id: 180, name: 'Vergo', slug: 'vergo', role: 'Vicealmirante G5 (Infiltrado)', epithet: '"El Bambú Demonio"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Donquixote Family',
    img: w('Vergo_Anime_Infobox.png'), color: 'from-gray-800 to-black', border: 'border-gray-600',
    description: 'Mano derecha de Doflamingo, se infiltró en la Marina dominando el endurecimiento de Haki corporal.', power_level: 87, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 181, name: 'Monet', slug: 'monet', role: 'Oficial de Inteligencia (Difunta)', epithet: '"La Mujer Nieve"',
    bounty: 'Desconocida', devil_fruit: 'Yuki Yuki no Mi', crew: 'Donquixote Family',
    img: w('Monet_Anime_Infobox.png'), color: 'from-cyan-400 to-green-600', border: 'border-cyan-300',
    description: 'Arpía aliada de Doflamingo que custodiaba las instalaciones de Punk Hazard.', power_level: 80, haki: []
  },
  {
    id: 182, name: 'Pica', slug: 'pica', role: 'Líder del Escuadrón Pica', epithet: 'Ninguna',
    bounty: '99,000,000', devil_fruit: 'Ishi Ishi no Mi', crew: 'Donquixote Family',
    img: w('Pica_Anime_Infobox.png'), color: 'from-gray-700 to-yellow-800', border: 'border-gray-500',
    description: 'Gigantesco combatiente que puede absorber y controlar la piedra de todo el reino de Dressrosa.', power_level: 86, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 183, name: 'Diamante', slug: 'diamante', role: 'Líder del Escuadrón Diamante', epithet: '"Héroe del Coliseo"',
    bounty: '99,000,000', devil_fruit: 'Hira Hira no Mi', crew: 'Donquixote Family',
    img: w('Diamante_Anime_Infobox.png'), color: 'from-red-600 to-yellow-600', border: 'border-red-500',
    description: 'Maestro de ceremonias del coliseo, puede hacer ondear cualquier espada o escudo como tela.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 184, name: 'Trébol', slug: 'trebol', role: 'Líder del Escuadrón Trébol', epithet: 'Ninguna',
    bounty: '99,000,000', devil_fruit: 'Beta Beta no Mi', crew: 'Donquixote Family',
    img: w('Trebol_Anime_Infobox.png'), color: 'from-green-800 to-yellow-900', border: 'border-green-600',
    description: 'Mugriento asesor de Doflamingo capaz de generar mucosidad pegajosa e inflamable.', power_level: 83, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 185, name: 'Sugar', slug: 'sugar', role: 'Oficial Especial', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Hobi Hobi no Mi', crew: 'Donquixote Family',
    img: w('Sugar_Anime_Infobox.png'), color: 'from-teal-300 to-green-500', border: 'border-teal-400',
    description: 'Niña eterna cuya fruta convierte al toque a humanos en juguetes borrando sus recuerdos.', power_level: 50, haki: []
  },
  {
    id: 186, name: 'Señor Pink', slug: 'senor-pink', role: 'Oficial de Combate', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Sui Sui no Mi', crew: 'Donquixote Family',
    img: w('Senor_Pink_Anime_Infobox.png'), color: 'from-pink-500 to-amber-700', border: 'border-pink-400',
    description: 'El pirata más varonil capaz de nadar libremente a través de paredes y el suelo.', power_level: 80, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 187, name: 'Gladius', slug: 'gladius', role: 'Oficial de Combate', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Pamu Pamu no Mi', crew: 'Donquixote Family',
    img: w('Gladius_Anime_Infobox.png'), color: 'from-blue-700 to-slate-900', border: 'border-blue-500',
    description: 'Experto en pólvora y detonación corporal capaz de reventar objetos inorgánicos.', power_level: 81, haki: ['Busoshoku']
  },
  {
    id: 188, name: 'Baby 5', slug: 'baby-5', role: 'Ex-Oficial de Armamento', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Buki Buki no Mi', crew: 'Armada Happo',
    img: w('Baby_5_Anime_Infobox.png'), color: 'from-indigo-600 to-red-600', border: 'border-indigo-400',
    description: 'Transforma partes de su cuerpo en cañones o espadas. Se unió a Sai por amor.', power_level: 79, haki: []
  },
  {
    id: 189, name: 'Sai', slug: 'sai', role: 'Líder 13° de la Armada Happo', epithet: 'Ninguna',
    bounty: '210,000,000', devil_fruit: 'Ninguna', crew: 'Armada Happo',
    img: w('Sai_Anime_Infobox.png'), color: 'from-green-700 to-amber-800', border: 'border-green-600',
    description: 'Heredero de Chinjao. Dominó el choque Hasshoken que deforma escudos con sus patadas.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 190, name: 'Don Chinjao', slug: 'don-chinjao', role: 'Ex-Líder 12°', epithet: '"Chinjao el Taladro"',
    bounty: '542,000,000', devil_fruit: 'Ninguna', crew: 'Armada Happo',
    img: w('Chinjao_Anime_Infobox.png'), color: 'from-yellow-700 to-amber-950', border: 'border-yellow-600',
    description: 'Legendario pirata cuya dura cabeza con forma de taladro rompía continentes de hielo.', power_level: 86, haki: ['Haoshoku', 'Busoshoku', 'Kenbunshoku']
  },
  {
    id: 191, name: 'Leo', slug: 'leo', role: 'Capitán de los Enanos', epithet: 'Ninguna',
    bounty: '66,000,000', devil_fruit: 'Nui Nui no Mi', crew: 'Tonta Corps (Tontatta)',
    img: w('Leo_Anime_Infobox.png'), color: 'from-green-500 to-yellow-600', border: 'border-green-400',
    description: 'Líder enano increíblemente rápido, capaz de coser físicamente objetos al suelo.', power_level: 80, haki: ['Busoshoku']
  },
  {
    id: 192, name: 'Hajrudin', slug: 'hajrudin', role: 'Rey Gigante', epithet: '"Mercenario Gigante"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Nuevos Piratas Gigantes de Elbaf',
    img: w('Hajrudin_Anime_Infobox.png'), color: 'from-red-800 to-amber-900', border: 'border-red-600',
    description: 'Guerrero gigante de Elbaf que busca unificar a todos los gigantes bajo su mando.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 193, name: 'Dorry', slug: 'dorry', role: 'Co-Capitán Legendario', epithet: '"El Ogro Azul"',
    bounty: '100,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Gigante Guerrero',
    img: w('Dorry_Anime_Infobox.png'), color: 'from-blue-800 to-cyan-950', border: 'border-blue-600',
    description: 'Gigante que libró un duelo centenario con Brogy en Little Garden.', power_level: 87, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 194, name: 'Brogy', slug: 'brogy', role: 'Co-Capitán Legendario', epithet: '"El Ogro Rojo"',
    bounty: '100,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Gigante Guerrero',
    img: w('Brogy_Anime_Infobox.png'), color: 'from-red-800 to-red-950', border: 'border-red-600',
    description: 'Gigante nórdico de gran hacha que peleó 100 años para honrar a los dioses de Elbaf.', power_level: 87, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 195, name: 'Oimo', slug: 'oimo', role: 'Carpintero Gigante', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas del Gigante Guerrero',
    img: w('Oimo_Anime_Infobox.png'), color: 'from-yellow-700 to-orange-900', border: 'border-yellow-600',
    description: 'Gigante reclutado por la Marina con mentiras y posteriormente liberado por Sogeking.', power_level: 78, haki: []
  },
  {
    id: 196, name: 'Kashi', slug: 'kashi', role: 'Guerrero Gigante', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas del Gigante Guerrero',
    img: w('Kashi_Anime_Infobox.png'), color: 'from-gray-700 to-amber-900', border: 'border-gray-600',
    description: 'Guerrero gigante liberado en Enies Lobby junto con Oimo.', power_level: 78, haki: []
  },
  {
    id: 197, name: 'Bellamy', slug: 'bellamy', role: 'Ex-Capitán', epithet: '"La Hiena"',
    bounty: '195,000,000', devil_fruit: 'Bane Bane no Mi', crew: 'Piratas de Bellamy',
    img: w('Bellamy_Anime_Post_Timeskip_Infobox.png'), color: 'from-yellow-600 to-amber-800', border: 'border-yellow-500',
    description: 'Pirata elástico que renegaba de los sueños antes de ser derrotado y cambiar de ideales.', power_level: 80, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 198, name: 'Caribou', slug: 'caribou', role: 'Capitán', epithet: '"Pelo Mojado"',
    bounty: '210,000,000', devil_fruit: 'Numa Numa no Mi', crew: 'Piratas de Caribou',
    img: w('Caribou_Anime_Infobox.png'), color: 'from-green-800 to-black', border: 'border-green-700',
    description: 'Pirata del lodo con un cuerpo pantanoso infinito donde oculta todo tipo de contrabando.', power_level: 78, haki: []
  },
  {
    id: 199, name: 'Coribou', slug: 'coribou', role: 'Co-Capitán', epithet: '"Mata-Marines"',
    bounty: '190,000,000', devil_fruit: 'Ninguna', crew: 'Piratas de Caribou',
    img: w('Coribou_Anime_Infobox.png'), color: 'from-gray-600 to-green-900', border: 'border-gray-500',
    description: 'Hermano ingenuo de Caribou, carga una gran pala para enterrar a marinos.', power_level: 74, haki: []
  },
  {
    id: 200, name: 'Kurozumi Orochi', slug: 'kurozumi-orochi', role: 'Shogun (Difunto)', epithet: '"El Tirano de Wano"',
    bounty: 'N/A', devil_fruit: 'Hebi Hebi: Modelo Yamata no Orochi', crew: 'Piratas de las Bestias',
    img: w('Kurozumi_Orochi_Anime_Infobox.png'), color: 'from-purple-800 to-indigo-950', border: 'border-purple-600',
    description: 'Cobarde gobernante que arruinó Wano aliado con Kaido, decapitado en sus múltiples cabezas.', power_level: 80, haki: []
  },
  {
    id: 201, name: 'Kurozumi Kanjuro', slug: 'kurozumi-kanjuro', role: 'Traidor (Difunto)', epithet: '"Semimaru"',
    bounty: 'Desconocida', devil_fruit: 'Fude Fude no Mi', crew: 'Aliado Wano',
    img: w('Kanjuro_Anime_Infobox.png'), color: 'from-pink-800 to-purple-950', border: 'border-pink-600',
    description: 'Actor del clan Kurozumi infiltrado entre los Envainadas, pinta dibujos realistas mortales.', power_level: 83, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 202, name: 'Raizo', slug: 'raizo', role: 'Ninja Envainada Roja', epithet: '"Raizo de la Niebla"',
    bounty: 'Desconocida', devil_fruit: 'Maki Maki no Mi', crew: 'Aliado Wano',
    img: w('Raizo_Anime_Infobox.png'), color: 'from-blue-900 to-gray-900', border: 'border-blue-700',
    description: 'Ninja ninja leal a Oden capaz de absorber ataques con pergaminos y devolverlos.', power_level: 83, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 203, name: 'Ashura Doji', slug: 'ashura-doji', role: 'Samurai Envainada Roja (Difunto)', epithet: '"Shutenmaru de Kuri"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Ashura_Doji_Anime_Infobox.png'), color: 'from-pink-500 to-red-800', border: 'border-pink-400',
    description: 'El bandido más fuerte de Wano sometido por Oden, poseedor de una esgrima destructiva.', power_level: 87, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 204, name: 'Kozuki Hiyori', slug: 'kozuki-hiyori', role: 'Princesa de Wano', epithet: '"Komurasaki"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Hiyori_Anime_Infobox.png'), color: 'from-teal-300 to-green-600', border: 'border-teal-400',
    description: 'Hermana menor de Momonosuke, sobrevivió interpretando a la cortesana Komurasaki.', power_level: 30, haki: []
  },
  {
    id: 205, name: 'Kozuki Toki', slug: 'kozuki-toki', role: 'Matriarca (Difunta)', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Toki Toki no Mi', crew: 'Piratas de Roger',
    img: w('Kozuki_Toki_Anime_Infobox.png'), color: 'from-pink-300 to-purple-500', border: 'border-pink-300',
    description: 'Esposa de Oden nacida hace 800 años, viajó al futuro para salvar a Momonosuke.', power_level: 35, haki: []
  },
  {
    id: 206, name: 'Shinobu', slug: 'shinobu', role: 'Kunoichi de Wano', epithet: '"La Asesina de Hombres"',
    bounty: 'Desconocida', devil_fruit: 'Juku Juku no Mi', crew: 'Aliado Wano',
    img: w('Shinobu_Anime_Infobox.png'), color: 'from-pink-300 to-yellow-600', border: 'border-yellow-500',
    description: 'Valiente ninja que envejece instantáneamente la materia orgánica y el suelo.', power_level: 78, haki: []
  },
  {
    id: 207, name: 'Hyogoro', slug: 'hyogoro', role: 'Ex-Jefe Yakuza', epithet: '"Hyogoro de la Flor"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Hyogoro_Anime_Infobox.png'), color: 'from-blue-400 to-slate-600', border: 'border-blue-400',
    description: 'Antiguo yakuza legendario que enseñó a Luffy el Haki de armadura avanzado (Ryou).', power_level: 80, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 208, name: 'Shaka', slug: 'shaka', role: 'Vegapunk Punk-01 (Difunto)', epithet: '"La Bondad"',
    bounty: 'N/A', devil_fruit: 'Nomi Nomi no Mi', crew: 'Marina / Egghead',
    img: w('Shaka_Anime_Infobox.png'), color: 'from-gray-800 to-black', border: 'border-gray-600',
    description: 'El clon racional de Vegapunk que vestía el casco de la justicia futurista.', power_level: 70, haki: []
  },
  {
    id: 209, name: 'Lilith', slug: 'lilith', role: 'Vegapunk Punk-02', epithet: '"La Maldad"',
    bounty: 'N/A', devil_fruit: 'Nomi Nomi no Mi', crew: 'Marina / Egghead',
    img: w('Lilith_Anime_Infobox.png'), color: 'from-pink-400 to-red-600', border: 'border-pink-400',
    description: 'Clon rebelde y agresivo de Vegapunk que tripula bestias de combate.', power_level: 76, haki: []
  },
  {
    id: 210, name: 'Edison', slug: 'edison', role: 'Vegapunk Punk-03', epithet: '"El Pensamiento"',
    bounty: 'N/A', devil_fruit: 'Nomi Nomi no Mi', crew: 'Marina / Egghead',
    img: w('Edison_Anime_Infobox.png'), color: 'from-blue-300 to-cyan-500', border: 'border-blue-400',
    description: 'Pequeño robot clon de Vegapunk que procesa ideas e inventos de manera frenética.', power_level: 65, haki: []
  },
  {
    id: 211, name: 'Pythagoras', slug: 'pythagoras', role: 'Vegapunk Punk-04 (Difunto)', epithet: '"La Sabiduría"',
    bounty: 'N/A', devil_fruit: 'Nomi Nomi no Mi', crew: 'Marina / Egghead',
    img: w('Pythagoras_Anime_Infobox.png'), color: 'from-yellow-600 to-yellow-800', border: 'border-yellow-500',
    description: 'Clon de Vegapunk con aspecto de robot rechoncho que analiza datos masivos.', power_level: 65, haki: []
  },
  {
    id: 212, name: 'Atlas', slug: 'atlas', role: 'Vegapunk Punk-05 (Difunta)', epithet: '"La Ira"',
    bounty: 'N/A', devil_fruit: 'Nomi Nomi no Mi', crew: 'Marina / Egghead',
    img: w('Atlas_Anime_Infobox.png'), color: 'from-pink-500 to-purple-700', border: 'border-pink-400',
    description: 'Gigantesca chica clon de Vegapunk de enorme fuerza física y puños holográficos.', power_level: 82, haki: []
  },
  {
    id: 213, name: 'York', slug: 'york', role: 'Vegapunk Punk-06 (Traidora)', epithet: '"La Codicia"',
    bounty: 'N/A', devil_fruit: 'Nomi Nomi no Mi', crew: 'Gobierno Mundial',
    img: w('York_Anime_Infobox.png'), color: 'from-yellow-400 to-yellow-600', border: 'border-yellow-400',
    description: 'Clon de Vegapunk que se alimenta y duerme por el resto, vendió a Stella al Gorosei.', power_level: 60, haki: []
  },
  {
    id: 214, name: 'Gin', slug: 'gin', role: 'Mano Derecha de Krieg', epithet: '"El Demonio Gin"',
    bounty: '12,000,000', devil_fruit: 'Ninguna', crew: 'Piratas de Krieg',
    img: w('Gin_Anime_Infobox.png'), color: 'from-gray-700 to-black', border: 'border-gray-500',
    description: 'Guerrero leal a Krieg que usa tonfas de hierro pesadas, se enfrentó a Sanji.', power_level: 72, haki: []
  },
  {
    id: 215, name: 'Pearl', slug: 'pearl', role: 'Oficial de Krieg', epithet: '"Muro de Hierro"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Krieg',
    img: w('Pearl_Anime_Infobox.png'), color: 'from-orange-500 to-amber-700', border: 'border-orange-500',
    description: 'Cubierto de escudos metálicos masivos que calienta con fuego si sangra.', power_level: 66, haki: []
  },
  {
    id: 216, name: 'Jango', slug: 'jango', role: 'Hipnotizador / Recluta Marine', epithet: '"El Hipnotizador Jango"',
    bounty: '9,000,000 (Ex)', devil_fruit: 'Ninguna', crew: 'La Marina',
    img: w('Jango_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-800 to-gray-900', border: 'border-red-600',
    description: 'Antiguo hipnotizador pirata de Kuro que se alistó en la Marina junto a Fullbody.', power_level: 60, haki: []
  },
  {
    id: 217, name: 'Mohji', slug: 'mohji', role: 'Primer Oficial', epithet: '"El Domador"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Buggy',
    img: w('Mohji_Anime_Post_Timeskip_Infobox.png'), color: 'from-amber-600 to-orange-800', border: 'border-amber-500',
    description: 'Oficial de Buggy que combate junto a su león mascota gigante Richie.', power_level: 55, haki: []
  },
  {
    id: 218, name: 'Cabaji', slug: 'cabaji', role: 'Jefe de Estado Mayor', epithet: '"El Acróbata"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Buggy',
    img: w('Cabaji_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-600 to-blue-800', border: 'border-blue-500',
    description: 'Espadachín que combate a monociclo lanzando peonzas y trucos acrobáticos.', power_level: 58, haki: []
  },
  {
    id: 219, name: 'Miss Doublefinger', slug: 'miss-doublefinger', role: 'Agente Oficial (Zala)', epithet: '"Miss Doublefinger"',
    bounty: '35,000,000 (Ex)', devil_fruit: 'Toge Toge no Mi', crew: 'Baroque Works',
    img: w('Zala_Anime_Infobox.png'), color: 'from-purple-800 to-indigo-950', border: 'border-purple-600',
    description: 'Socia de Mr. 1 capaz de erigir espinas de acero letales en su piel.', power_level: 76, haki: []
  },
  {
    id: 220, name: 'Miss Goldenweek', slug: 'miss-goldenweek', role: 'Agente Oficial (Marianne)', epithet: '"Miss Goldenweek"',
    bounty: '29,000,000 (Ex)', devil_fruit: 'Ninguna', crew: 'Baroque Works',
    img: w('Marianne_Anime_Infobox.png'), color: 'from-yellow-400 to-green-600', border: 'border-yellow-400',
    description: 'Socia infantil de Mr. 3 que manipula las emociones usando pintura de colores.', power_level: 60, haki: []
  },
  {
    id: 221, name: 'Mr. 4', slug: 'mr-4', role: 'Agente Oficial (Babe)', epithet: '"Mr. 4"',
    bounty: '3,200,000 (Ex)', devil_fruit: 'Ninguna', crew: 'Baroque Works',
    img: w('Babe_Anime_Infobox.png'), color: 'from-yellow-800 to-amber-950', border: 'border-yellow-700',
    description: 'Lento bateador de Arabasta que batea bombas de gas disparadas por su cañón-perro Lassoo.', power_level: 70, haki: []
  },
  {
    id: 222, name: 'Miss Merry Christmas', slug: 'miss-merry-christmas', role: 'Agente Oficial (Drophy)', epithet: '"Miss Merry Christmas"',
    bounty: '14,000,000 (Ex)', devil_fruit: 'Mogu Mogu no Mi', crew: 'Baroque Works',
    img: w('Drophy_Anime_Infobox.png'), color: 'from-red-600 to-yellow-700', border: 'border-red-500',
    description: 'Socia hiperactiva de Mr. 4 que excava túneles rápidos como un topo.', power_level: 70, haki: []
  },
  {
    id: 223, name: 'Mr. 5', slug: 'mr-5', role: 'Agente Oficial (Gem)', epithet: '"Mr. 5"',
    bounty: '10,000,000 (Ex)', devil_fruit: 'Bomu Bomu no Mi', crew: 'Baroque Works',
    img: w('Gem_Anime_Infobox.png'), color: 'from-gray-700 to-black', border: 'border-gray-500',
    description: 'Pirata capaz de hacer estallar cualquier parte de su cuerpo o su respiración.', power_level: 68, haki: []
  },
  {
    id: 224, name: 'Miss Valentine', slug: 'miss-valentine', role: 'Agente Oficial (Mikita)', epithet: '"Miss Valentine"',
    bounty: '7,500,000 (Ex)', devil_fruit: 'Kilo Kilo no Mi', crew: 'Baroque Works',
    img: w('Mikita_Anime_Infobox.png'), color: 'from-yellow-400 to-orange-500', border: 'border-yellow-300',
    description: 'Socia de Mr. 5 capaz de flotar como una pluma o caer aplastando como 10 toneladas.', power_level: 67, haki: []
  },
  {
    id: 225, name: 'Nefeltari Cobra', slug: 'nefeltari-cobra', role: 'Rey (Difunto)', epithet: 'Rey de Arabasta',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Arabasta',
    img: w('Nefeltari_Cobra_Anime_Infobox.png'), color: 'from-blue-200 to-gray-500', border: 'border-blue-400',
    description: 'Duodécimo monarca de la familia real Nefeltari de Arabasta, asesinado por el Gobierno Mundial.', power_level: 40, haki: []
  },
  {
    id: 226, name: 'Igaram', slug: 'igaram', role: 'Capitán de la Guardia', epithet: '"Mr. 8"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Arabasta',
    img: w('Igaram_Anime_Infobox.png'), color: 'from-pink-400 to-amber-700', border: 'border-pink-500',
    description: 'Fiel guardaespaldas de Vivi que oculta ametralladoras en sus rizos.', power_level: 68, haki: []
  },
  {
    id: 227, name: 'Karoo', slug: 'karoo', role: 'Mascota Real', epithet: '"Líder de los Superpatos"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Arabasta',
    img: w('Karoo_Anime_Infobox.png'), color: 'from-yellow-400 to-yellow-600', border: 'border-yellow-300',
    description: 'El veloz e intrépido superpato mascota de Vivi que la salvó en Arabasta.', power_level: 40, haki: []
  },
  {
    id: 228, name: 'Koza', slug: 'koza', role: 'Líder de la Rebelión', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Arabasta',
    img: w('Koza_Anime_Infobox.png'), color: 'from-blue-700 to-indigo-900', border: 'border-blue-500',
    description: 'Amigo de la infancia de Vivi que lideró erróneamente el alzamiento rebelde contra el Rey.', power_level: 70, haki: []
  },
  {
    id: 229, name: 'Shirahoshi', slug: 'shirahoshi', role: 'Princesa Sirena / Poseidón', epithet: '"Princesa Sirena"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Ryugu',
    img: w('Shirahoshi_Anime_Infobox.png'), color: 'from-pink-300 to-pink-500', border: 'border-pink-400',
    description: 'Sirena gigante con la habilidad innata de controlar a los colosales Reyes Marinos.', power_level: 90, haki: ['Kenbunshoku']
  },
  {
    id: 230, name: 'Fukaboshi', slug: 'fukaboshi', role: 'Príncipe Tiburón', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Ryugu',
    img: w('Fukaboshi_Anime_Infobox.png'), color: 'from-blue-800 to-cyan-900', border: 'border-blue-600',
    description: 'Hermano mayor de Shirahoshi y valiente comandante gyojin de Wani.', power_level: 80, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 231, name: 'Ryuboshi', slug: 'ryuboshi', role: 'Príncipe Pez Remo', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Ryugu',
    img: w('Ryuboshi_Anime_Infobox.png'), color: 'from-blue-400 to-teal-600', border: 'border-blue-300',
    description: 'Príncipe cantor que combate usando dos katanas ligeras.', power_level: 75, haki: ['Kenbunshoku']
  },
  {
    id: 232, name: 'Manboshi', slug: 'manboshi', role: 'Príncipe Pez Luna', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Ryugu',
    img: w('Manboshi_Anime_Infobox.png'), color: 'from-orange-400 to-amber-600', border: 'border-orange-500',
    description: 'Príncipe de Ryugu que danza bailando para alejar el miedo.', power_level: 74, haki: ['Kenbunshoku']
  },
  {
    id: 233, name: 'Madame Shyarly', slug: 'madame-shyarly', role: 'Pitonisa Sirena', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Ryugu',
    img: w('Shyarly_Anime_Infobox.png'), color: 'from-purple-800 to-black', border: 'border-purple-700',
    description: 'Dueña del Mermaid Cafe, vio en sus predicciones la destrucción de la Isla por Luffy.', power_level: 50, haki: ['Kenbunshoku']
  },
  {
    id: 234, name: 'Shakuyaku', slug: 'shakuyaku', role: 'Dueña de Bar (Ex-Pirata)', epithet: '"Shakky"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Rocks (Ex)',
    img: w('Shakuyaku_Anime_Infobox.png'), color: 'from-gray-700 to-black', border: 'border-gray-500',
    description: 'Pareja de Rayleigh, una experimentada pirata retirada del grupo de Rocks.', power_level: 88, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 235, name: 'Yorki', slug: 'yorki', role: 'Capitán (Difunto)', epithet: '"Calicó Yorki"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas Rumbar',
    img: w('Yorki_Anime_Infobox.png'), color: 'from-yellow-600 to-amber-800', border: 'border-yellow-500',
    description: 'El primer capitán de Brook que contrajo una fiebre mortal en el Grand Line.', power_level: 74, haki: []
  },
  {
    id: 236, name: 'Nojiko', slug: 'nojiko', role: 'Granjera de Naranjas', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Baratie (Ex)',
    img: w('Nojiko_Anime_Infobox.png'), color: 'from-blue-200 to-cyan-400', border: 'border-blue-300',
    description: 'Hermana mayor adoptiva de Nami, cultiva naranjos en la aldea Cocoyasi.', power_level: 30, haki: []
  },
  {
    id: 237, name: 'Genzo', slug: 'genzo', role: 'Sheriff', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Baratie (Ex)',
    img: w('Genzo_Anime_Infobox.png'), color: 'from-gray-400 to-gray-600', border: 'border-gray-500',
    description: 'Sheriff y figura paterna de Nami que lleva un molinillo en su gorro para hacerla sonreír.', power_level: 40, haki: []
  },
  {
    id: 238, name: 'Dr. Kureha', slug: 'dr-kureha', role: 'Doctora Centenaria', epithet: '"Doctorine"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Sakura',
    img: w('Kureha_Anime_Infobox.png'), color: 'from-pink-400 to-rose-700', border: 'border-pink-400',
    description: 'Doctora de 139 años que enseñó medicina avanzada a Tony Tony Chopper.', power_level: 65, haki: []
  },
  {
    id: 239, name: 'Dr. Hiriluk', slug: 'dr-hiriluk', role: 'Médico Curandero (Difunto)', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Sakura',
    img: w('Hiriluk_Anime_Infobox.png'), color: 'from-pink-200 to-rose-400', border: 'border-pink-300',
    description: 'Malo como médico pero de gran corazón, inspiró a Chopper a curar cualquier enfermedad.', power_level: 45, haki: []
  },
  {
    id: 240, name: 'Kaya', slug: 'kaya', role: 'Estudiante de Medicina', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Piratas Gato Negro (Ex)',
    img: w('Kaya_Anime_Infobox.png'), color: 'from-yellow-100 to-amber-200', border: 'border-yellow-200',
    description: 'Chica rica enfermiza de Syrup Town que heredó la fortuna familiar y sueña con sanar a Usopp.', power_level: 20, haki: []
  },
  {
    id: 241, name: 'Kuina', slug: 'kuina', role: 'Espadachina (Difunta)', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Baratie (Ex)',
    img: w('Kuina_Anime_Infobox.png'), color: 'from-blue-300 to-indigo-500', border: 'border-blue-400',
    description: 'Rival e inspiración de Zoro en la infancia, derrotada por el destino fatal al caer por unas escaleras.', power_level: 65, haki: []
  },
  {
    id: 242, name: 'Koushirou', slug: 'koushirou', role: 'Maestro de Dojo', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Baratie (Ex)',
    img: w('Koushirou_Anime_Infobox.png'), color: 'from-green-600 to-green-800', border: 'border-green-500',
    description: 'Padre de Kuina y el primer instructor de espada de Zoro, descendiente del clan Shimotsuki.', power_level: 80, haki: ['Busoshoku']
  },
  {
    id: 243, name: 'Edward Weevil', slug: 'edward-weevil', role: 'Ex-Shichibukai', epithet: '"Barbablanca Jr."',
    bounty: '480,000,000', devil_fruit: 'Ninguna', crew: 'Cross Guild (Ex)',
    img: w('Edward_Weevil_Anime_Infobox.png'), color: 'from-yellow-600 to-yellow-900', border: 'border-yellow-500',
    description: 'Hombre con la fuerza física destructiva del joven Barbablanca, manipulado por Bakkin.', power_level: 92, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 244, name: 'Karasu', slug: 'karasu', role: 'Comandante del Ejército del Norte', epithet: '"Karasu de la Plaga"',
    bounty: '400,000,000', devil_fruit: 'Susu Susu no Mi', crew: 'Ejército Revolucionario',
    img: w('Karasu_Anime_Infobox.png'), color: 'from-gray-800 to-black', border: 'border-gray-700',
    description: 'Revolucionario silencioso capaz de fragmentar su cuerpo en bandadas de cuervos de carbón.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 245, name: 'Belo Betty', slug: 'belo-betty', role: 'Comandante del Ejército del Este', epithet: '"Líder del Estandarte"',
    bounty: '457,000,000', devil_fruit: 'Kobu Kobu no Mi', crew: 'Ejército Revolucionario',
    img: w('Belo_Betty_Anime_Infobox.png'), color: 'from-red-600 to-red-800', border: 'border-red-500',
    description: 'Otorga coraje y fuerza de combate brutal a civiles ondeando su bandera de libertad.', power_level: 87, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 246, name: 'Morley', slug: 'morley', role: 'Comandante del Ejército del Oeste', epithet: '"Morley del Barro"',
    bounty: '293,000,000', devil_fruit: 'Oshi Oshi no Mi', crew: 'Ejército Revolucionario',
    img: w('Morley_Anime_Infobox.png'), color: 'from-amber-600 to-orange-800', border: 'border-amber-500',
    description: 'Gigante okama que desplaza y moldea la tierra como si fuera arcilla moldeable.', power_level: 86, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 247, name: 'Lindbergh', slug: 'lindbergh', role: 'Comandante del Ejército del Sur', epithet: 'Ninguna',
    bounty: '316,000,000', devil_fruit: 'Ninguna', crew: 'Ejército Revolucionario',
    img: w('Lindbergh_Anime_Infobox.png'), color: 'from-teal-600 to-slate-800', border: 'border-teal-500',
    description: 'Científico mink gato que inventa armas avanzadas como rayos congelantes y jetpacks.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 248, name: 'Hack', slug: 'hack', role: 'Oficial de Inteligencia', epithet: '"El Centauro de la Armadura"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Ejército Revolucionario',
    img: w('Hack_Anime_Infobox.png'), color: 'from-blue-600 to-indigo-900', border: 'border-blue-500',
    description: 'Gyojin pez espada instructor del kárate gyojin y gran amigo de Sabo y Koala.', power_level: 80, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 249, name: 'Saint Figarland Garling', slug: 'saint-figarland-garling', role: 'Líder de los Caballeros Sagrados', epithet: '"El Verdugo de God Valley"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Gobierno Mundial',
    img: w('Figarland_Garling_Anime_Infobox.png'), color: 'from-red-800 to-black', border: 'border-red-700',
    description: 'Noble de alta jerarquía y combatiente estelar en God Valley, supuesto familiar de Shanks.', power_level: 96, haki: ['Haoshoku', 'Busoshoku', 'Kenbunshoku']
  },
  {
    id: 250, name: 'Saint Charlos', slug: 'saint-charlos', role: 'Dragón Celestial', epithet: '"Noble Mundial"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Gobierno Mundial',
    img: w('Charlos_Anime_Infobox.png'), color: 'from-yellow-200 to-orange-300', border: 'border-yellow-400',
    description: 'Nobles caprichosos protegidos por los Almirantes, recordado por recibir el gran puñetazo de Luffy.', power_level: 5, haki: []
  }
];





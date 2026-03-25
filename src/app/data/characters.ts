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
  },
  // SUPERNOVAS & ALLIANCE
  {
    id: 45, name: 'Killer', role: 'Combatiente', epithet: '"Masacre"',
    bounty: '200,000,000', devil_fruit: 'Ninguna (SMILE fallida)', crew: 'Piratas de Kid',
    img: w('Killer_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-400 to-blue-600', border: 'border-blue-400',
    description: 'La mano derecha de Kid. Usa guadañas giratorias unidas a sus brazos.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 46, name: 'Capone Bege', role: 'Capitán', epithet: '"Padre"',
    bounty: '350,000,000', devil_fruit: 'Shiro Shiro no Mi', crew: 'Piratas Fire Tank',
    img: w('Capone_Bege_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-700 to-gray-900', border: 'border-gray-600',
    description: 'Un pirata tipo mafia cuyo cuerpo es literalmente una fortaleza viviente.', power_level: 82, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 47, name: 'Basil Hawkins', role: 'Capitán', epithet: '"El Mago"',
    bounty: '320,000,000', devil_fruit: 'Wara Wara no Mi', crew: 'Piratas de Hawkins',
    img: w('Basil_Hawkins_Anime_Post_Timeskip_Infobox.png'), color: 'from-yellow-600 to-yellow-800', border: 'border-yellow-500',
    description: 'Usa cartas de tarot para predecir el futuro y muñecos de paja para desviar el daño.', power_level: 80, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 48, name: 'X Drake', role: 'Capitán', epithet: '"Bandera Roja"',
    bounty: '222,000,000', devil_fruit: 'Ryu Ryu: Alosaurio', crew: 'SWORD (Marina)',
    img: w('X_Drake_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-800 to-red-950', border: 'border-red-700',
    description: 'Un contraalmirante infiltrado en los Piratas de las Bestias como uno de los Tobi Roppo.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 49, name: 'Scratchmen Apoo', role: 'Capitán', epithet: '"Rugido del Mar"',
    bounty: '350,000,000', devil_fruit: 'Oto Oto no Mi', crew: 'Piratas On-Air',
    img: w('Scratchmen_Apoo_Anime_Post_Timeskip_Infobox.png'), color: 'from-orange-500 to-red-600', border: 'border-orange-400',
    description: 'Usa su cuerpo como instrumentos musicales para lanzar ataques de sonido cortantes.', power_level: 78, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 50, name: 'Urouge', role: 'Capitán', epithet: '"Monje Loco"',
    bounty: '108,000,000', devil_fruit: 'Seme Seme no Mi', crew: 'Piratas del Monje Caído',
    img: w('Urouge_Anime_Infobox.png'), color: 'from-gray-500 to-gray-700', border: 'border-gray-400',
    description: 'Proveniente de una isla del cielo, su poder aumenta proporcionalmente al daño recibido.', power_level: 81, haki: ['Busoshoku', 'Kenbunshoku']
  },
  // BAROQUE WORKS
  {
    id: 51, name: 'Daz Bones', role: 'Agente Oficial', epithet: '"Mr. 1"',
    bounty: '196,000,000 (Cross Guild)', devil_fruit: 'Supa Supa no Mi', crew: 'Baroque Works',
    img: w('Daz_Bones_Anime_Infobox.png'), color: 'from-gray-700 to-gray-950', border: 'border-gray-600',
    description: 'Un asesino que puede convertir cualquier parte de su cuerpo en una hoja de acero.', power_level: 79, haki: ['Busoshoku']
  },
  {
    id: 52, name: 'Bon Kurei', role: 'Agente Oficial', epithet: '"Mr. 2"',
    bounty: '32,000,000', devil_fruit: 'Mane Mane no Mi', crew: 'Baroque Works',
    img: w('Bentham_Anime_Infobox.png'), color: 'from-pink-400 to-blue-400', border: 'border-pink-300',
    description: 'Un okama que valora la amistad por encima de todo. Puede imitar la apariencia de cualquiera.', power_level: 75, haki: []
  },
  {
    id: 53, name: 'Galdino', role: 'Agente Oficial', epithet: '"Mr. 3"',
    bounty: '24,000,000', devil_fruit: 'Doru Doru no Mi', crew: 'Cross Guild',
    img: w('Galdino_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-200 to-gray-300', border: 'border-blue-400',
    description: 'Maestro de la cera dura. Experto en estrategia y trampas.', power_level: 65, haki: []
  },
  // CP9 / CP0
  {
    id: 54, name: 'Kaku', role: 'Agente de Inteligencia', epithet: '"Viento de la Montaña"',
    bounty: 'Desconocida', devil_fruit: 'Ushi Ushi: Jirafa', crew: 'CP0',
    img: w('Kaku_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-400 to-gray-600', border: 'border-gray-500',
    description: 'Experto en el estilo de cuatro espadas y transformaciones de jirafa cuadradas.', power_level: 86, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 55, name: 'Stussy', role: 'Agente de Inteligencia', epithet: '"Reina del Distrito del Placer"',
    bounty: 'Desconocida', devil_fruit: 'Mushi Mushi: Súcubo (Clon)', crew: 'CP0',
    img: w('Stussy_Anime_Infobox.png'), color: 'from-pink-300 to-rose-400', border: 'border-pink-200',
    description: 'Un clon de la ex-pirata de Rocks, Miss Bakkin. Experta en infiltración.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 56, name: 'Kalifa', role: 'Agente de Inteligencia', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Awa Awa no Mi', crew: 'CP9',
    img: w('Kalifa_Anime_Infobox.png'), color: 'from-blue-100 to-blue-200', border: 'border-blue-300',
    description: 'Utiliza burbujas de jabón para "limpiar" la fuerza de sus oponentes.', power_level: 72, haki: []
  },
  {
    id: 57, name: 'Blueno', role: 'Agente de Inteligencia', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Doa Doa no Mi', crew: 'CP9',
    img: w('Blueno_Anime_Infobox.png'), color: 'from-black to-gray-800', border: 'border-gray-700',
    description: 'Puede crear puertas en cualquier superficie, incluido el aire mismo.', power_level: 74, haki: []
  },
  // WANO SAMURAI
  {
    id: 58, name: 'Kozuki Momonosuke', role: 'Shogun de Wano', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Uo Uo: Modelo Dragón (Artificial)', crew: 'Aliado Wano',
    img: w('Kozuki_Momonosuke_Anime_Infobox.png'), color: 'from-pink-200 to-pink-400', border: 'border-pink-300',
    description: 'Heredero del clan Kozuki y actual Shogun de Wano tras la derrota de Kaido.', power_level: 83, haki: ['Kenbunshoku']
  },
  {
    id: 59, name: 'Kin\'emon', role: 'Samurai | Jefe de los Nueve Envainadas', epithet: '"Fuego de Zorro"',
    bounty: 'Desconocida', devil_fruit: 'Fuku Fuku no Mi', crew: 'Aliado Wano',
    img: w('Kin%27emon_Anime_Infobox.png'), color: 'from-red-500 to-red-700', border: 'border-red-400',
    description: 'Líder de los Nueve Envainadas Rojas y leal sirviente de Oden.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 60, name: 'Denjiro', role: 'Samurai', epithet: '"Kyoshiro el Adormilado"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Denjiro_Anime_Infobox.png'), color: 'from-blue-500 to-indigo-700', border: 'border-blue-400',
    description: 'Se infiltró como subordinado de Orochi durante 20 años esperando la venganza.', power_level: 86, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 61, name: 'Kawamatsu', role: 'Samurai | Sumotori', epithet: '"El Kappa"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Kawamatsu_Anime_Infobox.png'), color: 'from-green-400 to-green-600', border: 'border-green-500',
    description: 'Un hombre-pez que se hace pasar por un Kappa para sobrevivir en Wano.', power_level: 83, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 62, name: 'Kiku (Okiku)', role: 'Samurai', epithet: '"La Llovizna"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Kikunojo_Anime_Infobox.png'), color: 'from-blue-200 to-blue-400', border: 'border-blue-300',
    description: 'Una espadachín de gran belleza pero con la fuerza de un samurai de élite.', power_level: 82, haki: ['Busoshoku', 'Kenbunshoku']
  },
  // REVOLUTIONARIES
  {
    id: 63, name: 'Emporio Ivankov', role: 'Comandante del G-Army', epithet: '"El Trabajador de Milagros"',
    bounty: 'Desconocida', devil_fruit: 'Horu Horu no Mi', crew: 'Ejército Revolucionario',
    img: w('Emporio_Ivankov_Anime_Infobox.png'), color: 'from-purple-500 to-purple-800', border: 'border-purple-400',
    description: 'Rey del Reino Kamabakka. Puede manipular las hormonas humanas a voluntad.', power_level: 88, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 64, name: 'Koala', role: 'Oficial de Inteligencia', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Ejército Revolucionario',
    img: w('Koala_Anime_Infobox.png'), color: 'from-amber-200 to-orange-400', border: 'border-orange-200',
    description: 'Maestra del Karate Gyojin a pesar de ser humana. Ex-esclava de los Dragones Celestiales.', power_level: 76, haki: []
  },
  {
    id: 65, name: 'Inazuma', role: 'Oficial del Ejército', epithet: '"El Libertador"',
    bounty: 'Desconocida', devil_fruit: 'Choki Choki no Mi', crew: 'Ejército Revolucionario',
    img: w('Inazuma_Anime_Infobox.png'), color: 'from-orange-200 to-white', border: 'border-orange-400',
    description: 'Corta cualquier superficie como si fuera papel usando sus manos-tijera.', power_level: 77, haki: []
  },
  // BEAST PIRATES
  {
    id: 66, name: 'King', role: 'Comandante Estrella', epithet: '"El Incendio"',
    bounty: '1,390,000,000', devil_fruit: 'Ryu Ryu: Pteranodon', crew: 'Piratas de las Bestias',
    img: w('King_Anime_Infobox.png'), color: 'from-gray-800 to-red-900', border: 'border-red-600',
    description: 'Superviviente de la raza Lunaria, capaz de controlar el fuego y volar.', power_level: 93, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 67, name: 'Queen', role: 'Comandante Estrella', epithet: '"La Plaga"',
    bounty: '1,320,000,000', devil_fruit: 'Ryu Ryu: Braquiosaurio', crew: 'Piratas de las Bestias',
    img: w('Queen_Anime_Infobox.png'), color: 'from-yellow-400 to-yellow-600', border: 'border-yellow-500',
    description: 'Un cyborg gigante que utiliza virus letales diseñados por él mismo.', power_level: 92, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 68, name: 'Jack', role: 'Comandante Estrella', epithet: '"La Sequía"',
    bounty: '1,000,000,000', devil_fruit: 'Zou Zou: Mamut', crew: 'Piratas de las Bestias',
    img: w('Jack_Anime_Infobox.png'), color: 'from-amber-700 to-amber-900', border: 'border-amber-600',
    description: 'Un hombre-pez gyojin con una resistencia física y mental fuera de serie.', power_level: 90, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 69, name: 'Ulti', role: 'Tobi Roppo', epithet: 'Ninguna',
    bounty: '400,000,000', devil_fruit: 'Ryu Ryu: Paquicefalosaurio', crew: 'Piratas de las Bestias',
    img: w('Ulti_Anime_Infobox.png'), color: 'from-blue-400 to-blue-600', border: 'border-blue-300',
    description: 'Famosa por sus cabezazos letales y su temperamento explosivo.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 70, name: 'Page One', role: 'Tobi Roppo', epithet: 'Ninguna',
    bounty: '290,000,000', devil_fruit: 'Ryu Ryu: Espinosaurio', crew: 'Piratas de las Bestias',
    img: w('Page_One_Anime_Infobox.png'), color: 'from-purple-500 to-purple-800', border: 'border-purple-600',
    description: 'El hermano menor de Ulti. Muy agresivo en su forma de dinosaurio.', power_level: 82, haki: ['Busoshoku', 'Kenbunshoku']
  },
  // BIG MOM PIRATES
  {
    id: 71, name: 'Charlotte Smoothie', role: 'Comandante Dulce', epithet: 'Ninguna',
    bounty: '932,000,000', devil_fruit: 'Shibo Shibo no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Smoothie_Anime_Infobox.png'), color: 'from-pink-300 to-pink-500', border: 'border-pink-400',
    description: 'La 14ª hija de Big Mom. Puede exprimir líquidos de cualquier cosa.', power_level: 91, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 72, name: 'Charlotte Cracker', role: 'Comandante Dulce', epithet: '"Cracker de las Mil Brazos"',
    bounty: '860,000,000', devil_fruit: 'Bisu Bisu no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Cracker_Anime_Infobox.png'), color: 'from-orange-700 to-red-800', border: 'border-orange-600',
    description: 'Puede crear y manipular galletas infinitas, usándolas como armaduras.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 73, name: 'Charlotte Perospero', role: 'Oficial Jefe', epithet: 'Ninguna',
    bounty: '700,000,000', devil_fruit: 'Pero Pero no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Perospero_Anime_Infobox.png'), color: 'from-yellow-400 to-yellow-600', border: 'border-yellow-500',
    description: 'El hijo mayor de Big Mom. Manipula el caramelo para crear estructuras.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 74, name: 'Charlotte Oven', role: 'Oficial', epithet: 'Ninguna',
    bounty: '300,000,000', devil_fruit: 'Netsu Netsu no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Oven_Anime_Infobox.png'), color: 'from-red-600 to-red-900', border: 'border-red-500',
    description: 'Puede calentar su cuerpo y objetos a temperaturas extremas.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 75, name: 'Charlotte Pudding', role: 'Oficial', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Memo Memo no Mi', crew: 'Piratas de Big Mom',
    img: w('Charlotte_Pudding_Anime_Infobox.png'), color: 'from-pink-200 to-pink-400', border: 'border-pink-300',
    description: 'De la raza de los Tres Ojos. Puede manipular los recuerdos de las personas.', power_level: 60, haki: []
  },
  // DRESSROSA & GRAND FLEET
  {
    id: 76, name: 'Bartolomeo', role: 'Capitán', epithet: '"El Caníbal"',
    bounty: '200,000,000', devil_fruit: 'Bari Bari no Mi', crew: 'Barto Club',
    img: w('Bartolomeo_Anime_Infobox.png'), color: 'from-green-500 to-green-800', border: 'border-green-400',
    description: 'El fan número uno de los Mugiwaras. Su barrera es indestructible.', power_level: 83, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 77, name: 'Cavendish', role: 'Capitán', epithet: '"Príncipe Blanco"',
    bounty: '330,000,000', devil_fruit: 'Ninguna', crew: 'Piratas Hermosos',
    img: w('Cavendish_Anime_Infobox.png'), color: 'from-blue-200 to-blue-400', border: 'border-blue-300',
    description: 'Posee una doble personalidad asesina llamada Hakuba que se activa al dormir.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 78, name: 'Rebecca', role: 'Ex-Gladiadora', epithet: '"La Mujer Invicta"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Aliado Dressrosa',
    img: w('Rebecca_Anime_Infobox.png'), color: 'from-pink-300 to-pink-500', border: 'border-pink-400',
    description: 'Nieta del Rey Riku, experta en combate defensivo en el Coliseo.', power_level: 70, haki: ['Kenbunshoku']
  },
  {
    id: 79, name: 'Kyros', role: 'Ex-Gladiador', epithet: '"Tronatruenos"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Aliado Dressrosa',
    img: w('Kyros_Anime_Infobox.png'), color: 'from-gray-500 to-gray-700', border: 'border-gray-600',
    description: 'El gladiador más fuerte de la historia de Dressrosa. Padre de Rebecca.', power_level: 86, haki: ['Busoshoku', 'Kenbunshoku']
  },
  // MARINE RECRUITS & HEROES
  {
    id: 80, name: 'Coby', role: 'Capitán de la Marina', epithet: '"El Héroe del Incidente de Rocky Port"',
    bounty: '500,000,000 (Cross Guild)', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Koby_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-100 to-pink-300', border: 'border-pink-400',
    description: 'El primer amigo de Luffy en su viaje. Ha crecido bajo la tutela de Garp.', power_level: 85, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 81, name: 'Helmeppo', role: 'Capitán de la Marina', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Helmeppo_Anime_Post_Timeskip_Infobox.png'), color: 'from-purple-200 to-purple-400', border: 'border-purple-300',
    description: 'Compañero inseparable de Coby. Usa espadas kukri gemelas.', power_level: 75, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 82, name: 'Smoker', role: 'Vice-Almirante', epithet: '"El Cazador Blanco"',
    bounty: 'Desconocida', devil_fruit: 'Moku Moku no Mi', crew: 'Marina',
    img: w('Smoker_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-300 to-gray-500', border: 'border-gray-400',
    description: 'Un marine con un fuerte sentido de la justicia. Siempre persigue a Luffy.', power_level: 84, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 83, name: 'Tashigi', role: 'Capitán de la Marina', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Tashigi_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-300 to-blue-500', border: 'border-blue-400',
    description: 'Coleccionista de katanas legendarias. Sueña con recuperarlas todas de los piratas.', power_level: 72, haki: ['Busoshoku', 'Kenbunshoku']
  },
  // SKYPIEA & THRILLER BARK
  {
    id: 84, name: 'Enel', role: 'Dios de Skypiea (Ex)', epithet: '"Dios"',
    bounty: 'N/A (Equivalente 500M+)', devil_fruit: 'Goro Goro no Mi', crew: 'Ejército de Dios',
    img: w('Enel_Anime_Infobox.png'), color: 'from-yellow-200 to-yellow-400', border: 'border-yellow-500',
    description: 'Gobernó las islas del cielo con un poder eléctrico absoluto antes de ser derrotado.', power_level: 90, haki: ['Kenbunshoku']
  },
  {
    id: 85, name: 'Wyper', role: 'Guerrero Shandia', epithet: '"Berserker"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Shandia',
    img: w('Wyper_Anime_Infobox.png'), color: 'from-red-800 to-red-950', border: 'border-red-700',
    description: 'Líder de los guerreros de Shandia que lucharon por recuperar su tierra natal.', power_level: 80, haki: []
  },
  {
    id: 86, name: 'Perona', role: 'Oficial', epithet: '"Ghost Princess"',
    bounty: 'Desconocida', devil_fruit: 'Horo Horo no Mi', crew: 'Piratas de Thriller Bark',
    img: w('Perona_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-400 to-pink-600', border: 'border-pink-500',
    description: 'Puede crear fantasmas que deprimen a cualquiera que los toque.', power_level: 75, haki: []
  },
  {
    id: 87, name: 'Absalom', role: 'Oficial', epithet: '"Rey Cementerio"',
    bounty: 'Desconocida', devil_fruit: 'Suke Suke no Mi', crew: 'Piratas de Thriller Bark',
    img: w('Absalom_Anime_Infobox.png'), color: 'from-yellow-700 to-amber-900', border: 'border-yellow-600',
    description: 'Tenía la capacidad de volverse invisible antes de que su fruta fuera robada por Shiryu.', power_level: 70, haki: []
  },
  // IMPEL DOWN & FISHMAN ISLAND
  {
    id: 88, name: 'Hannyabal', role: 'Alcaide de Impel Down', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Impel Down',
    img: w('Hannyabal_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-500 to-orange-700', border: 'border-red-600',
    description: 'Sustituyó a Magellan como alcaide. Es extremadamente ambicioso pero leal.', power_level: 78, haki: []
  },
  {
    id: 89, name: 'Hody Jones', role: 'Capitán', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna (E.S. Pills)', crew: 'Nuevos Piratas Gyojin',
    img: w('Hody_Jones_Anime_Infobox.png'), color: 'from-red-900 to-black', border: 'border-red-700',
    description: 'Un gran racista que odia a los humanos por encima de todo. Consumidor de drogas.', power_level: 82, haki: []
  },
  {
    id: 90, name: 'Neptune', role: 'Rey del Reino Ryugu', epithet: '"Dios del Mar"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino Ryugu',
    img: w('Neptune_Anime_Infobox.png'), color: 'from-orange-400 to-orange-600', border: 'border-orange-500',
    description: 'Gobernante pacífico de la Isla Gyojin y padre de la princesa Shirahoshi.', power_level: 80, haki: ['Kenbunshoku']
  },
  // PAST LEGENDS & OTHERS
  {
    id: 91, name: 'Rocks D. Xebec', role: 'Capitán (Difunto)', epithet: 'Ninguna',
    bounty: 'Desconocida (La mayor de su época)', devil_fruit: 'Desconocida', crew: 'Piratas de Rocks',
    img: w('Rocks_D._Xebec_Profile.png'), color: 'from-gray-900 to-black', border: 'border-gray-800',
    description: 'El mayor rival de Roger y Garp. Buscaba ser el Rey del Mundo.', power_level: 100, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 92, name: 'Scopper Gaban', role: 'Combatiente', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Roger',
    img: w('Scopper_Gaban_Anime_Infobox.png'), color: 'from-yellow-400 to-amber-600', border: 'border-amber-500',
    description: 'La tercera fuerza de la tripulación de Roger junto a Roger y Rayleigh.', power_level: 93, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 93, name: 'Dr. Vegapunk', role: 'Científico Jefe', epithet: '"El Genio"',
    bounty: 'N/A', devil_fruit: 'Nomi Nomi no Mi', crew: 'Marina / Egghead',
    img: w('Vegapunk_Stella_Anime_Infobox.png'), color: 'from-blue-200 to-blue-400', border: 'border-blue-300',
    description: 'El hombre con el cerebro más grande del mundo. Su tecnología está 500 años adelantada.', power_level: 60, haki: []
  },
  {
    id: 94, name: 'Sentomaru', role: 'Capitán de la Unidad Científica', epithet: '"Hacha de Guerra"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Sentomaru_Anime_Post_Timeskip_Infobox.png'), color: 'from-red-400 to-red-600', border: 'border-red-500',
    description: 'Posee la defensa más fuerte del mundo gracias a su dominio del Haki de Armadura.', power_level: 84, haki: ['Busoshoku']
  },
  {
    id: 95, name: 'Ivankov', role: 'Reina del Reino Kamabakka', epithet: '"Persona Milagrosa"',
    bounty: 'Desconocida', devil_fruit: 'Horu Horu no Mi', crew: 'Ejército Revolucionario',
    img: w('Emporio_Ivankov_Anime_Infobox.png'), color: 'from-purple-500 to-purple-800', border: 'border-purple-600',
    description: 'Gran amigo de Dragon y salvador de Luffy en Impel Down.', power_level: 88, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 96, name: 'Nekomamushi', role: 'Duque de Mokomo', epithet: '"Rey de la Noche"',
    bounty: '563,000,000', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Nekomamushi_Anime_Infobox.png'), color: 'from-yellow-600 to-amber-800', border: 'border-yellow-600',
    description: 'El guardián nocturno del bosque de la ballena en Zou. Maestro mink.', power_level: 87, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 97, name: 'Inuarashi', role: 'Duque de Mokomo', epithet: '"Rey del Día"',
    bounty: '511,070,000', devil_fruit: 'Ninguna', crew: 'Aliado Wano',
    img: w('Inuarashi_Anime_Infobox.png'), color: 'from-red-200 to-red-400', border: 'border-red-300',
    description: 'El soberano diurno de Zou. Experto espadachín y mink de gran honor.', power_level: 87, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 98, name: 'Fisher Tiger', role: 'Capitán', epithet: '"El Libertador"',
    bounty: '230,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sol',
    img: w('Fisher_Tiger_Anime_Infobox.png'), color: 'from-red-700 to-red-950', border: 'border-red-800',
    description: 'El legendario gyojin que escaló la Red Line y liberó a los esclavos de Mary Geoise.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 99, name: 'Arlong', role: 'Capitán', epithet: '"La Sierra"',
    bounty: '20,000,000', devil_fruit: 'Ninguna', crew: 'Piratas de Arlong',
    img: w('Arlong_Anime_Infobox.png'), color: 'from-blue-800 to-blue-950', border: 'border-blue-700',
    description: 'Terrorizó el East Blue y a Nami durante años con su racismo extremo.', power_level: 70, haki: []
  },
  {
    id: 100, name: 'Kuro', role: 'Capitán', epithet: '"Kuro de las Mil Trampas"',
    bounty: '16,000,000', devil_fruit: 'Ninguna', crew: 'Piratas Gato Negro',
    img: w('Kuro_Anime_Infobox.png'), color: 'from-gray-800 to-black', border: 'border-gray-600',
    description: 'Un genio malvado que usa garras de gato largas. Posee una gran velocidad.', power_level: 65, haki: []
  },
  {
    id: 101, name: 'Don Krieg', role: 'Almirante', epithet: '"El Sujeto más Fuerte del East Blue"',
    bounty: '17,000,000', devil_fruit: 'Ninguna', crew: 'Piratas de Krieg',
    img: w('Don_Krieg_Anime_Infobox.png'), color: 'from-yellow-700 to-yellow-900', border: 'border-yellow-600',
    description: 'Lideraba una flota de 50 barcos. Cubierto de armadura y armas químicas.', power_level: 66, haki: []
  },
  {
    id: 102, name: 'Alvida', role: 'Capitán', epithet: '"Maza de Hierro"',
    bounty: '5,000,000', devil_fruit: 'Sube Sube no Mi', crew: 'Cross Guild (Asociada)',
    img: w('Alvida_Anime_Infobox.png'), color: 'from-pink-300 to-pink-500', border: 'border-pink-400',
    description: 'La primera rival de Luffy. Su fruta hace que todo resbale de su piel.', power_level: 55, haki: []
  },
  {
    id: 103, name: 'Morgan', role: 'Ex-Capitán de la Marina', epithet: '"Mano de Hacha"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Marina (Ex)',
    img: w('Morgan_Anime_Infobox.png'), color: 'from-gray-600 to-gray-800', border: 'border-gray-500',
    description: 'Un tirano de la Marina que gobernó Shells Town con su hacha.', power_level: 45, haki: []
  },
  {
    id: 104, name: 'Kuroobi', role: 'Oficial', epithet: 'Ninguna',
    bounty: '9,000,000', devil_fruit: 'Ninguna', crew: 'Piratas de Arlong',
    img: w('Kuroobi_Anime_Infobox.png'), color: 'from-blue-700 to-blue-900', border: 'border-blue-600',
    description: 'Experto en el Karate Gyojin de nivel 40.', power_level: 60, haki: []
  },
  {
    id: 105, name: 'Chew', role: 'Oficial', epithet: 'Ninguna',
    bounty: '5,500,000', devil_fruit: 'Ninguna', crew: 'Piratas de Arlong',
    img: w('Chew_Anime_Infobox.png'), color: 'from-blue-400 to-blue-600', border: 'border-blue-300',
    description: 'Un hombre-pez de la raza de los peces arquero que dispara chorros de agua.', power_level: 58, haki: []
  },
  {
    id: 106, name: 'Hachi', role: 'Oficial / Cocinero', epithet: '"Seis Brazos"',
    bounty: '8,000,000', devil_fruit: 'Ninguna', crew: 'Piratas del Sol (Ex)',
    img: w('Hatchan_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-400 to-pink-600', border: 'border-pink-500',
    description: 'Un pulpo que usa seis katanas. Se convirtió en un gran aliado de los Mugiwaras.', power_level: 65, haki: []
  },
  {
    id: 107, name: 'Nefeltari Vivi', role: 'Princesa / Mugiwara Honoraria', epithet: '"Miss Wednesday"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Reino de Arabasta',
    img: w('Nefertari_Vivi_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-200 to-cyan-400', border: 'border-blue-300',
    description: 'La amada princesa de Arabasta que navegó con Luffy para salvar su reino.', power_level: 40, haki: []
  },
  {
    id: 108, name: 'Wapol', role: 'Rey (Ex)', epithet: '"Munch-Munch"',
    bounty: 'Desconocida', devil_fruit: 'Baku Baku no Mi', crew: 'Reino de Drum (Ex)',
    img: w('Wapol_Anime_Infobox.png'), color: 'from-purple-400 to-purple-600', border: 'border-purple-500',
    description: 'Un rey cobarde que puede comer cualquier cosa y asimilarla.', power_level: 60, haki: []
  },
  {
    id: 109, name: 'Dalton', role: 'Rey / Guerrero', epithet: 'Ninguna',
    bounty: 'Desconocida', devil_fruit: 'Ushi Ushi: Bisonte', crew: 'Reino de Sakura',
    img: w('Dalton_Anime_Infobox.png'), color: 'from-amber-800 to-amber-950', border: 'border-amber-700',
    description: 'Un guerrero noble que lideró la revolución contra Wapol.', power_level: 72, haki: []
  },
  {
    id: 110, name: 'Pell', role: 'Guerrero Guardián', epithet: '"El Halcón"',
    bounty: 'N/A', devil_fruit: 'Tori Tori: Halcón', crew: 'Ejército Real de Arabasta',
    img: w('Pell_Anime_Infobox.png'), color: 'from-yellow-200 to-yellow-400', border: 'border-yellow-300',
    description: 'El guardián más fuerte de Arabasta, capaz de volar y proteger su patria.', power_level: 75, haki: []
  },
  {
    id: 111, name: 'Chaka', role: 'Guerrero Guardián', epithet: '"El Chacal"',
    bounty: 'N/A', devil_fruit: 'Inu Inu: Chacal', crew: 'Ejército Real de Arabasta',
    img: w('Chaka_Anime_Infobox.png'), color: 'from-red-800 to-red-950', border: 'border-red-700',
    description: 'Comandante de las fuerzas de Arabasta junto a Pell.', power_level: 74, haki: []
  },
  {
    id: 112, name: 'Wyper', role: 'Líder Guerrero', epithet: '"Berserker"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Guerreros Shandia',
    img: w('Wyper_Anime_Infobox.png'), color: 'from-red-600 to-red-800', border: 'border-red-500',
    description: 'Un temerario guerrero que luchó contra Enel para recuperar su tierra.', power_level: 82, haki: []
  },
  {
    id: 113, name: 'Gan Fall', role: 'Dios del Cielo (Ex)', epithet: '"El Caballero del Cielo"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Skypiea',
    img: w('Gan_Fall_Anime_Infobox.png'), color: 'from-gray-400 to-gray-600', border: 'border-gray-500',
    description: 'El noble soberano de Skypiea que volaba sobre Pierre.', power_level: 76, haki: ['Kenbunshoku']
  },
  {
    id: 114, name: 'Foxy', role: 'Capitán', epithet: '"El Zorro Plateado"',
    bounty: '24,000,000', devil_fruit: 'Noro Noro no Mi', crew: 'Piratas de Foxy',
    img: w('Foxy_Anime_Infobox.png'), color: 'from-gray-500 to-black', border: 'border-gray-400',
    description: 'Organizador del Davy Back Fight y experto en ralentizar enemigos.', power_level: 52, haki: []
  },
  {
    id: 115, name: 'Iceburg', role: 'Alcalde / Carpintero', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Galley-La Company',
    img: w('Iceburg_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-400 to-blue-600', border: 'border-blue-300',
    description: 'Sucesor de Tom y alcalde de Water 7 que unificó los muelles.', power_level: 40, haki: []
  },
  {
    id: 116, name: 'Paulie', role: 'Capataz Carpintero', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Galley-La Company',
    img: w('Paulie_Anime_Infobox.png'), color: 'from-amber-600 to-amber-800', border: 'border-amber-500',
    description: 'Experto en el uso de cuerdas y carpintería naval.', power_level: 75, haki: []
  },
  {
    id: 117, name: 'Kokoro', role: 'Jefa de Estación', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Tren Marino (Shift Station)',
    img: w('Kokoro_Anime_Infobox.png'), color: 'from-cyan-300 to-blue-500', border: 'border-cyan-200',
    description: 'Una sirena de la marina que operaba el tren marino con su gato Chimney.', power_level: 45, haki: []
  },
  {
    id: 118, name: 'Tom', role: 'Gran Carpintero', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: "Tom's Workers",
    img: w('Tom_Anime_Infobox.png'), color: 'from-yellow-800 to-yellow-950', border: 'border-yellow-700',
    description: 'El legendario hombre-pez que construyó el Oro Jackson de Roger.', power_level: 80, haki: []
  },
  {
    id: 119, name: 'Hina', role: 'Contraalmirante', epithet: '"La Jaula Negra"',
    bounty: 'N/A', devil_fruit: 'Ori Ori no Mi', crew: 'Marina',
    img: w('Hina_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-500 to-pink-800', border: 'border-pink-600',
    description: 'Compañera de Smoker, experta en atrapar a piratas con sus jaulas.', power_level: 82, haki: ['Busoshoku']
  },
  {
    id: 120, name: 'Gaimon', role: 'Vigilante', epithet: '"El Hombre del Cofre"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Isla de los Animales Raros',
    img: w('Gaimon_Anime_Infobox.png'), color: 'from-green-600 to-green-900', border: 'border-green-500',
    description: 'Un hombre atrapado accidentalmente en un cofre del tesoro durante 20 años.', power_level: 10, haki: []
  },
  {
    id: 121, name: 'Laboon', role: 'Ballena Isla', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Piratas Rumbar (Ex)',
    img: w('Laboon_Anime_Infobox.png'), color: 'from-blue-800 to-black', border: 'border-blue-600',
    description: 'La ballena gigante que espera en la entrada del Grand Line el regreso de Brook.', power_level: 85, haki: []
  },
  {
    id: 131, name: 'Jaygarcia Saturn', role: 'Gorosei | Guerrero Científico', epithet: '"Dios de la Defensa"',
    bounty: 'N/A', devil_fruit: 'Gyuuki (Yokai)', crew: 'Gobierno Mundial',
    img: w('Jaygarcia_Saturn_Anime_Infobox.png'), color: 'from-red-900 to-black', border: 'border-red-950',
    description: 'Uno de los cinco ancianos que gobiernan el mundo, posee una forma monstruosa de araña yokai.', power_level: 98, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 132, name: 'Marcus Mars', role: 'Gorosei | Guerrero Ambiental', epithet: '"Dios de la Agricultura"',
    bounty: 'N/A', devil_fruit: 'Itsumade (Yokai)', crew: 'Gobierno Mundial',
    img: w('Marcus_Mars_Anime_Infobox.png'), color: 'from-orange-800 to-black', border: 'border-orange-950',
    description: 'Anciano capaz de transformarse en un gigantesco pájaro yokai que escupe fuego.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 133, name: 'Topman Warcury', role: 'Gorosei | Guerrero de Ley', epithet: '"Dios de la Justicia"',
    bounty: 'N/A', devil_fruit: 'Houki (Yokai)', crew: 'Gobierno Mundial',
    img: w('Topman_Warcury_Anime_Infobox.png'), color: 'from-gray-950 to-black', border: 'border-gray-900',
    description: 'Se transforma en un jabalí gigante con una piel tan dura que incluso Luffy se lastima al golpearlo.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 134, name: 'Ethanbaron V. Nusjuro', role: 'Gorosei | Guerrero Financiero', epithet: '"Dios de las Finanzas"',
    bounty: 'N/A', devil_fruit: 'Bakotsu (Yokai)', crew: 'Gobierno Mundial',
    img: w('Ethanbaron_V._Nusjuro_Anime_Infobox.png'), color: 'from-orange-900 to-black', border: 'border-orange-700',
    description: 'Un espadachín esqueleto que se transforma en un centauro óseo capaz de congelar a sus enemigos.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 135, name: 'Shepherd Ju Peter', role: 'Gorosei | Guerrero de Agricultura', epithet: '"Dios de la Fertilidad"',
    bounty: 'N/A', devil_fruit: 'Sandworm (Yokai)', crew: 'Gobierno Mundial',
    img: w('Shepherd_Ju_Peter_Anime_Infobox.png'), color: 'from-yellow-800 to-black', border: 'border-yellow-950',
    description: 'El anciano más joven, capaz de convertirse en un gusano de tierra colosal que devora todo.', power_level: 97, haki: ['Haoshoku', 'Kenbunshoku', 'Busoshoku']
  },
  {
    id: 136, name: 'Vegapunk (Stella)', role: 'Genio Científico', epithet: 'Líder del SSG',
    bounty: 'N/A', devil_fruit: 'Nomi Nomi no Mi', crew: 'Gobierno Mundial (Ex)',
    img: w('Dr._Vegapunk_Anime_Infobox.png'), color: 'from-orange-100 to-orange-400', border: 'border-orange-300',
    description: 'El hombre más inteligente del mundo, su cerebro ha crecido hasta proporciones gigantescas.', power_level: 60, haki: []
  },
  {
    id: 137, name: 'Koby', role: 'Capitán | Miembro de SWORD', epithet: '"El Héroe de Rocky Port"',
    bounty: '500,000,000 (Cross Guild)', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Koby_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-100 to-blue-400', border: 'border-pink-300',
    description: 'Discípulo de Garp que sueña con ser Almirante. Ha desarrollado un Haki de observación increíble.', power_level: 85, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 138, name: 'Helmeppo', role: 'Mayor de la Marina', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Helmeppo_Anime_Post_Timeskip_Infobox.png'), color: 'from-teal-400 to-blue-600', border: 'border-teal-500',
    description: 'Compañero inseparable de Koby y experto en el uso de los cuchillos kukri.', power_level: 78, haki: ['Kenbunshoku', 'Busoshoku']
  },
  {
    id: 139, name: 'Bepo', role: 'Navegante | Combatiente', epithet: 'Ninguna',
    bounty: '500', devil_fruit: 'Ninguna', crew: 'Piratas Heart',
    img: w('Bepo_Anime_Post_Timeskip_Infobox.png'), color: 'from-white to-gray-300', border: 'border-orange-400',
    description: 'Un Mink oso polar experto en artes marciales y el navegante de Law.', power_level: 80, haki: []
  },
  {
    id: 140, name: 'Enel', role: 'Dios de Skypiea', epithet: '"El Dios"',
    bounty: 'En la Luna', devil_fruit: 'Goro Goro no Mi', crew: 'Skypiea (Ex)',
    img: w('Enel_Anime_Infobox.png'), color: 'from-yellow-400 to-yellow-600', border: 'border-yellow-200',
    description: 'Gobernante absoluto de Skypiea con el poder del rayo, ahora explorando la luna.', power_level: 93, haki: ['Kenbunshoku']
  },
  {
    id: 141, name: 'Shiryu', role: 'Capitán de la Segunda Nave', epithet: '"Shiryu de la Lluvia"',
    bounty: 'Desconocida', devil_fruit: 'Suke Suke no Mi', crew: 'Piratas de Barbanegra',
    img: w('Shiryu_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-700 to-black', border: 'border-gray-500',
    description: 'Ex-alcaide de Impel Down conocido por su brutalidad y su invisibilidad.', power_level: 94, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 142, name: 'Vasco Shot', role: 'Capitán de la Octava Nave', epithet: '"El Gran Bebedor"',
    bounty: 'Desconocida', devil_fruit: 'Gabu Gabu no Mi', crew: 'Piratas de Barbanegra',
    img: w('Vasco_Shot_Anime_Post_Timeskip_Infobox.png'), color: 'from-pink-800 to-black', border: 'border-pink-900',
    description: 'Uno de los criminales más peligrosos del Nivel 6 de Impel Down.', power_level: 88, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 143, name: 'Avalo Pizarro', role: 'Capitán de la Cuarta Nave', epithet: '"El Rey Corrupto"',
    bounty: 'Desconocida', devil_fruit: 'Shima Shima no Mi', crew: 'Piratas de Barbanegra',
    img: w('Avalo_Pizarro_Anime_Post_Timeskip_Infobox.png'), color: 'from-blue-700 to-blue-900', border: 'border-blue-600',
    description: 'Puede asimilar y manipular islas enteras como si fueran su propio cuerpo.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 144, name: 'Sanjuan Wolf', role: 'Capitán de la Séptima Nave', epithet: '"El Acorazado Colosal"',
    bounty: 'Desconocida', devil_fruit: 'Deka Deka no Mi', crew: 'Piratas de Barbanegra',
    img: w('Sanjuan_Wolf_Anime_Post_Timeskip_Infobox.png'), color: 'from-gray-300 to-gray-500', border: 'border-gray-400',
    description: 'El gigante más grande del mundo, tan enorme que puede caminar por el fondo del mar.', power_level: 84, haki: []
  },
  {
    id: 145, name: 'Catarina Devon', role: 'Capitán de la Sexta Nave', epithet: '"Cazadora de la Luna Creciente"',
    bounty: 'Desconocida', devil_fruit: 'Inu Inu: Kyubi no Kitsune', crew: 'Piratas de Barbanegra',
    img: w('Catarina_Devon_Anime_Post_Timeskip_Infobox.png'), color: 'from-purple-400 to-purple-700', border: 'border-purple-300',
    description: 'La mujer más peligrosa de Impel Down, capaz de transformarse en cualquier persona.', power_level: 89, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 146, name: 'Morgans', role: 'Presidente del World Economic Journal', epithet: '"Big News"',
    bounty: 'N/A', devil_fruit: 'Tori Tori: Albatros', crew: 'Prensa Mundial',
    img: w('Morgans_Anime_Infobox.png'), color: 'from-blue-200 to-white', border: 'border-blue-300',
    description: 'Controla el flujo de información del mundo y es un apasionado de las grandes noticias.', power_level: 65, haki: []
  },
  {
    id: 147, name: 'Stussy (Real)', role: 'Ex-Pirata de Rocks', epithet: '"Miss Buckingham Stussy"',
    bounty: 'Desconocida', devil_fruit: 'Ninguna', crew: 'Piratas de Rocks (Ex)',
    img: w('Miss_Buckingham_Stussy_Infobox.png'), color: 'from-pink-900 to-red-900', border: 'border-pink-600',
    description: 'La mujer que afirma ser la madre de Weevil y ex-amante de Whitebeard.', power_level: 70, haki: []
  },
  {
    id: 148, name: 'Bogard', role: 'Oficial de la Marina', epithet: '"La Mano Derecha de Garp"',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Marina',
    img: w('Bogard_Anime_Infobox.png'), color: 'from-gray-500 to-black', border: 'border-gray-400',
    description: 'Un habilidoso espadachín que siempre acompaña al Vicealmirante Garp.', power_level: 85, haki: ['Busoshoku', 'Kenbunshoku']
  },
  {
    id: 149, name: 'Zeff', role: 'Chef Jefe', epithet: '"Pierna Roja"',
    bounty: 'N/A (Ex-Pirata)', devil_fruit: 'Ninguna', crew: 'Baratie',
    img: w('Zeff_Anime_Infobox.png'), color: 'from-yellow-700 to-amber-900', border: 'border-yellow-600',
    description: 'Antiguo pirata que sacrificó su pierna para salvar a Sanji. Maestro del estilo de pierna.', power_level: 75, haki: []
  },
  {
    id: 150, name: 'Bell-mere', role: 'Ex-Oficial de la Marina', epithet: 'Ninguna',
    bounty: 'N/A', devil_fruit: 'Ninguna', crew: 'Marina (Ex)',
    img: w('Bell-mere_Anime_Infobox.png'), color: 'from-orange-400 to-red-600', border: 'border-orange-300',
    description: 'La madre adoptiva de Nami y Nojiko, que dio su vida por sus hijas.', power_level: 40, haki: []
  }
];





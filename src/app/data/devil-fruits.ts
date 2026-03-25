export interface DevilFruit {
  id: number;
  name: string;
  type: string;
  user: string;
  img: string;
  description: string;
  color: string;
}

export const DEVIL_FRUITS: DevilFruit[] = [
  // Zoan
  {
    id: 1, name: 'Hito Hito no Mi, Modelo: Nika', type: 'Zoan Mítica', user: 'Monkey D. Luffy',
    img: 'https://static.wikia.nocookie.net/onepiece/images/4/43/Gomu_Gomu_no_Mi_Infobox.png', color: 'from-purple-600 to-purple-900',
    description: 'Anteriormente conocida como Gomu Gomu no Mi. El usuario adquiere un cuerpo de goma y las propiedades del Dios del Sol Nika, luchando con una libertad absoluta.'
  },
  {
    id: 6, name: 'Uo Uo no Mi, Modelo: Seiryu', type: 'Zoan Mítica', user: 'Kaido',
    img: 'https://static.wikia.nocookie.net/onepiece/images/9/91/Uo_Uo_no_Mi%2C_Model_Seiryu_Infobox.png', color: 'from-blue-600 to-cyan-800',
    description: 'Permite transformarse en un enorme Dragón Azur oriental, capaz de crear nubes de llamas para volar, generar rayos, lanzar de viento cortante y escupir fuego ardiente.'
  },
  {
    id: 9, name: 'Hito Hito no Mi', type: 'Zoan', user: 'Tony Tony Chopper',
    img: 'https://static.wikia.nocookie.net/onepiece/images/7/75/Hito_Hito_no_Mi_Infobox.png', color: 'from-yellow-600 to-amber-800',
    description: 'Una fruta que convierte al usuario en un híbrido humano otorgando inteligencia a nivel humano, aprendizaje avanzado y comunicación con ambas especies.'
  },
  {
    id: 11, name: 'Inu Inu no Mi, Modelo: Okuchi no Makami', type: 'Zoan Mítica', user: 'Yamato',
    img: 'https://static.wikia.nocookie.net/onepiece/images/9/91/Inu_Inu_no_Mi%2C_Model_Okuchi_no_Makami_Infobox.png', color: 'from-blue-200 to-white',
    description: 'Transforma al usuario en el legendario Dios Lobo Guardián de Wano. Permite manipular un hielo capaz de rivalizar con el Bolo Breath de Kaido.'
  },
  {
    id: 12, name: 'Tori Tori no Mi, Modelo: Fénix', type: 'Zoan Mítica', user: 'Marco',
    img: 'https://static.wikia.nocookie.net/onepiece/images/0/07/Tori_Tori_no_Mi%2C_Model_Phoenix_Infobox.png', color: 'from-blue-400 to-yellow-400',
    description: 'Convierte al usuario en un fénix de llamas azules de la resurrección. Cualquier herida fatal se regenerará pasivamente mediante el uso de estas misteriosas llamas.'
  },
  {
    id: 13, name: 'Hebi Hebi no Mi, Modelo: Yamata no Orochi', type: 'Zoan Mítica', user: 'Kurozumi Orochi',
    img: 'https://static.wikia.nocookie.net/onepiece/images/f/f3/Hebi_Hebi_no_Mi%2C_Model_Yamata_no_Orochi_Infobox.png', color: 'from-purple-800 to-green-700',
    description: 'Transforma al usuario en una temible serpiente monstruosa de ocho cabezas (Yamata no Orochi). El usuario sobrevive incluso si pierde la cabeza, necesitando que lo decapiten 8 veces para morir.'
  },
  
  // Logia
  {
    id: 2, name: 'Mera Mera no Mi', type: 'Logia', user: 'Sabo (Anteriormente Ace)',
    img: 'https://static.wikia.nocookie.net/onepiece/images/7/77/Mera_Mera_no_Mi_Infobox.png', color: 'from-orange-500 to-red-600',
    description: 'Permite al usuario crear, controlar y transformarse en fuego a voluntad. Es letal en el combate a corta y larga distancia envolviéndose en llamas intangibles.'
  },
  {
    id: 4, name: 'Yami Yami no Mi', type: 'Logia', user: 'Marshall D. Teach',
    img: 'https://static.wikia.nocookie.net/onepiece/images/7/7b/Yami_Yami_no_Mi_Infobox.png', color: 'from-indigo-900 to-black',
    description: 'La fruta logia más oscura y peligrosa que atrae todo. Absorbe ataques dolorosamente, pero a cambio puede anular permanentemente al toque los poderes de cualquier otra fruta.'
  },
  {
    id: 14, name: 'Goro Goro no Mi', type: 'Logia', user: 'Enel',
    img: 'https://static.wikia.nocookie.net/onepiece/images/c/c5/Goro_Goro_no_Mi_Infobox.png', color: 'from-yellow-300 to-yellow-600',
    description: 'Permite crear, controlar y transformarse en relámpagos de hasta 200 millones de voltios y moverse a la velocidad del rayo. Se describe a sí misma como una fruta "invencible".'
  },
  {
    id: 15, name: 'Hie Hie no Mi', type: 'Logia', user: 'Kuzan (Aokiji)',
    img: 'https://static.wikia.nocookie.net/onepiece/images/9/90/Hie_Hie_no_Mi_Infobox.png', color: 'from-blue-300 to-cyan-500',
    description: 'Otorga la capacidad de congelar instantáneamente cualquier cosa que toques hasta el cero absoluto o incluso crear armas de hielo sólido gigantes de la nada.'
  },
  {
    id: 16, name: 'Magu Magu no Mi', type: 'Logia', user: 'Sakazuki (Akainu)',
    img: 'https://static.wikia.nocookie.net/onepiece/images/2/29/Magu_Magu_no_Mi_Infobox.png', color: 'from-red-700 to-red-950',
    description: 'La fruta con el poder ofensivo más destructivo de todo el mundo. Permite derretir montañas y consumir a otros Logias creando y controlando magma vivo.'
  },
  {
    id: 17, name: 'Pika Pika no Mi', type: 'Logia', user: 'Borsalino (Kizaru)',
    img: 'https://static.wikia.nocookie.net/onepiece/images/b/ba/Pika_Pika_no_Mi_Infobox.png', color: 'from-yellow-400 to-yellow-600',
    description: 'Da la capacidad de moverse, crear ataques láser explosivos desde los dedos o pies y golpear a tus adversarios completamente a la impredescible velocidad de la luz.'
  },
  {
    id: 18, name: 'Suna Suna no Mi', type: 'Logia', user: 'Crocodile',
    img: 'https://static.wikia.nocookie.net/onepiece/images/7/73/Suna_Suna_no_Mi_Infobox.png', color: 'from-yellow-700 to-amber-900',
    description: 'Convierte al usuario en arena controlable, capaz de crear feroces tormentas y de absorber toda la humedad secando plantas, piedras o personas hasta momificarlas instantáneamente.'
  },

  // Paramecia
  {
    id: 3, name: 'Ope Ope no Mi', type: 'Paramecia', user: 'Trafalgar D. Water Law',
    img: 'https://static.wikia.nocookie.net/onepiece/images/a/ab/Ope_Ope_no_Mi_Infobox.png', color: 'from-pink-500 to-rose-700',
    description: '"Ultimate Devil Fruit". Permite crear un espacio esférico (ROOM) donde el usuario es literalmente el cirujano: divide cuerpos sin matar, mueve objetos espaciales y cura males incurables.'
  },
  {
    id: 5, name: 'Gura Gura no Mi', type: 'Paramecia', user: 'Marshall D. Teach (Anteriormente Whitebeard)',
    img: 'https://static.wikia.nocookie.net/onepiece/images/8/87/Gura_Gura_no_Mi_Infobox.png', color: 'from-gray-300 to-gray-600',
    description: 'Posee el título trágico del "poder para destruir el mundo". El usuario es un hombre sismo que genera grietas en el aire para lanzar ondas de choque brutales al mar y a la tierra.'
  },
  {
    id: 7, name: 'Ito Ito no Mi', type: 'Paramecia', user: 'Donquixote Doflamingo',
    img: 'https://static.wikia.nocookie.net/onepiece/images/2/2f/Ito_Ito_no_Mi_Infobox.png', color: 'from-pink-300 to-purple-400',
    description: 'Permite manipular hilos hiper cortantes sumamente letales, tejer lazos a las nubes para "volar" y, con su nivel despertado, transformar los edificios a su alrededor en hilos a voluntad.'
  },
  {
    id: 8, name: 'Bara Bara no Mi', type: 'Paramecia', user: 'Buggy',
    img: 'https://static.wikia.nocookie.net/onepiece/images/a/a2/Bara_Bara_no_Mi_Infobox.png', color: 'from-red-500 to-blue-500',
    description: 'Hace al usuario estructuralmente invulnerable a cualquier ataque por cortes. Es capaz de levitar volando sus propios pedazos alrededor, excepto sus pies.'
  },
  {
    id: 10, name: 'Soru Soru no Mi', type: 'Paramecia', user: 'Charlotte Linlin (Big Mom)',
    img: 'https://static.wikia.nocookie.net/onepiece/images/1/1d/Soru_Soru_no_Mi_Infobox.png', color: 'from-pink-600 to-fuchsia-800',
    description: 'Otorga la dominación total sobre el alma misma. El usuario impone temor y drena años de vida, inyectándolos a fuego, nubes, o cualquier objeto animándolos (Homies).'
  },
  {
    id: 19, name: 'Hana Hana no Mi', type: 'Paramecia', user: 'Nico Robin',
    img: 'https://static.wikia.nocookie.net/onepiece/images/a/a2/Hana_Hana_no_Mi_Anime_Infobox.png', color: 'from-pink-400 to-purple-600',
    description: 'Permite al usuario brotar partes de su cuerpo humano (especialmente brazos, piernas o grandes avatares) como flores brotando instantáneamente desde cualquier superficie visible.'
  },
  {
    id: 20, name: 'Doku Doku no Mi', type: 'Paramecia Especial', user: 'Magellan',
    img: 'https://static.wikia.nocookie.net/onepiece/images/2/2e/Doku_Doku_no_Mi_Infobox.png', color: 'from-purple-700 to-purple-950',
    description: 'Permite crear y exudar libremente todo tipo de venenos corrosivos incesantes desde su piel, así como enormes hidras letales que desintegran cualquier roca, acero o ser vivo en instantes.'
  },
  {
    id: 21, name: 'Bari Bari no Mi', type: 'Paramecia', user: 'Bartolomeo (Anteriormente Kurozumi Semimaru)',
    img: 'https://static.wikia.nocookie.net/onepiece/images/f/fb/Bari_Bari_no_Mi_Infobox.png', color: 'from-green-400 to-emerald-700',
    description: 'Mediante el cruce de los dedos, el usuario erige un escudo de cristal transparente increíblemente resistente diseñado para interceptar a la vez bloqueando ofensivas tan fuertes como haki puro.'
  },
  {
    id: 22, name: 'Mochi Mochi no Mi', type: 'Paramecia Especial', user: 'Charlotte Katakuri',
    img: 'https://static.wikia.nocookie.net/onepiece/images/1/12/Mochi_Mochi_no_Mi_Infobox.png', color: 'from-red-200 to-pink-300',
    description: 'Nombrada una \'Paramecia Especial\' porque el usuario posee casi una total intangibilidad Logia transformándose en masa viscosa y pegajosa infinita, la cual atrapa y ahoga brutalmente enemigos.'
  }
];

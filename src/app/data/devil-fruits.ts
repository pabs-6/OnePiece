export interface DevilFruit {
  id: number;
  name: string;
  type: string;
  user: string;
  img: string;
  description: string;
  color: string;
}

const w = (filename: string) => `https://onepiece.fandom.com/wiki/Special:FilePath/${filename}`;

export const DEVIL_FRUITS: DevilFruit[] = [
  // Zoan
  {
    id: 1, name: 'Hito Hito no Mi, Modelo: Nika', type: 'Zoan Mítica', user: 'Monkey D. Luffy',
    img: w('Gomu_Gomu_no_Mi_Infobox.png'), color: 'from-purple-600 to-purple-900',
    description: 'Anteriormente conocida como Gomu Gomu no Mi. El usuario adquiere un cuerpo de goma y las propiedades del Dios del Sol Nika, luchando con una libertad absoluta.'
  },
  {
    id: 6, name: 'Uo Uo no Mi, Modelo: Seiryu', type: 'Zoan Mítica', user: 'Kaido',
    img: w('Uo_Uo_no_Mi%2C_Model_Seiryu_Infobox.png'), color: 'from-blue-600 to-cyan-800',
    description: 'Permite transformarse en un enorme Dragón Azur oriental, capaz de crear nubes de llamas para volar, generar rayos, lanzar de viento cortante y escupir fuego ardiente.'
  },
  {
    id: 9, name: 'Hito Hito no Mi', type: 'Zoan', user: 'Tony Tony Chopper',
    img: w('Hito_Hito_no_Mi_Infobox.png'), color: 'from-yellow-600 to-amber-800',
    description: 'Una fruta que convierte al usuario en un híbrido humano otorgando inteligencia a nivel humano, aprendizaje avanzado y comunicación con ambas especies.'
  },
  {
    id: 11, name: 'Inu Inu no Mi, Modelo: Okuchi no Makami', type: 'Zoan Mítica', user: 'Yamato',
    img: w('Inu_Inu_no_Mi%2C_Model_Okuchi_no_Makami_Infobox.png'), color: 'from-blue-200 to-white',
    description: 'Transforma al usuario en el legendario Dios Lobo Guardián de Wano. Permite manipular un hielo capaz de rivalizar con el Bolo Breath de Kaido.'
  },
  {
    id: 12, name: 'Tori Tori no Mi, Modelo: Fénix', type: 'Zoan Mítica', user: 'Marco',
    img: w('Tori_Tori_no_Mi%2C_Model_Phoenix_Infobox.png'), color: 'from-blue-400 to-yellow-400',
    description: 'Convierte al usuario en un fénix de llamas azules de la resurrección. Cualquier herida fatal se regenerará pasivamente mediante el uso de estas misteriosas llamas.'
  },
  {
    id: 13, name: 'Hebi Hebi no Mi, Modelo: Yamata no Orochi', type: 'Zoan Mítica', user: 'Kurozumi Orochi',
    img: w('Hebi_Hebi_no_Mi%2C_Model_Yamata_no_Orochi_Infobox.png'), color: 'from-purple-800 to-green-700',
    description: 'Transforma al usuario en una temible serpiente monstruosa de ocho cabezas (Yamata no Orochi). El usuario sobrevive incluso si pierde la cabeza, necesitando que lo decapiten 8 veces para morir.'
  },
  
  // Logia
  {
    id: 2, name: 'Mera Mera no Mi', type: 'Logia', user: 'Sabo (Anteriormente Ace)',
    img: w('Mera_Mera_no_Mi_Infobox.png'), color: 'from-orange-500 to-red-600',
    description: 'Permite al usuario crear, controlar y transformarse en fuego a voluntad. Es letal en el combate a corta y larga distancia envolviéndose en llamas intangibles.'
  },
  {
    id: 4, name: 'Yami Yami no Mi', type: 'Logia', user: 'Marshall D. Teach',
    img: w('Yami_Yami_no_Mi_Infobox.png'), color: 'from-indigo-900 to-black',
    description: 'La fruta logia más oscura y peligrosa que atrae todo. Absorbe ataques dolorosamente, pero a cambio puede anular permanentemente al toque los poderes de cualquier otra fruta.'
  },
  {
    id: 14, name: 'Goro Goro no Mi', type: 'Logia', user: 'Enel',
    img: w('Goro_Goro_no_Mi_Infobox.png'), color: 'from-yellow-300 to-yellow-600',
    description: 'Permite crear, controlar y transformarse en relámpagos de hasta 200 millones de voltios y moverse a la velocidad del rayo. Se describe a sí misma como una fruta "invencible".'
  },
  {
    id: 15, name: 'Hie Hie no Mi', type: 'Logia', user: 'Kuzan (Aokiji)',
    img: w('Hie_Hie_no_Mi_Infobox.png'), color: 'from-blue-300 to-cyan-500',
    description: 'Otorga la capacidad de congelar instantáneamente cualquier cosa que toques hasta el cero absoluto o incluso crear armas de hielo sólido gigantes de la nada.'
  },
  {
    id: 16, name: 'Magu Magu no Mi', type: 'Logia', user: 'Sakazuki (Akainu)',
    img: w('Magu_Magu_no_Mi_Infobox.png'), color: 'from-red-700 to-red-950',
    description: 'La fruta con el poder ofensivo más destructivo de todo el mundo. Permite derretir montañas y consumir a otros Logias creando y controlando magma vivo.'
  },
  {
    id: 17, name: 'Pika Pika no Mi', type: 'Logia', user: 'Borsalino (Kizaru)',
    img: w('Pika_Pika_no_Mi_Infobox.png'), color: 'from-yellow-400 to-yellow-600',
    description: 'Da la capacidad de moverse, crear ataques láser explosivos desde los dedos o pies y golpear a tus adversarios completamente a la impredescible velocidad de la luz.'
  },
  {
    id: 18, name: 'Suna Suna no Mi', type: 'Logia', user: 'Crocodile',
    img: w('Suna_Suna_no_Mi_Infobox.png'), color: 'from-yellow-700 to-amber-900',
    description: 'Convierte al usuario en arena controlable, capaz de crear feroces tormentas y de absorber toda la humedad secando plantas, piedras o personas hasta momificarlas instantáneamente.'
  },

  // Paramecia
  {
    id: 3, name: 'Ope Ope no Mi', type: 'Paramecia', user: 'Trafalgar D. Water Law',
    img: w('Ope_Ope_no_Mi_Infobox.png'), color: 'from-pink-500 to-rose-700',
    description: '"Ultimate Devil Fruit". Permite crear un espacio esférico (ROOM) donde el usuario es literalmente el cirujano: divide cuerpos sin matar, mueve objetos espaciales y cura males incurables.'
  },
  {
    id: 5, name: 'Gura Gura no Mi', type: 'Paramecia', user: 'Marshall D. Teach (Anteriormente Whitebeard)',
    img: w('Gura_Gura_no_Mi_Infobox.png'), color: 'from-gray-300 to-gray-600',
    description: 'Posee el título trágico del "poder para destruir el mundo". El usuario es un hombre sismo que genera grietas en el aire para lanzar ondas de choque brutales al mar y a la tierra.'
  },
  {
    id: 7, name: 'Ito Ito no Mi', type: 'Paramecia', user: 'Donquixote Doflamingo',
    img: w('Ito_Ito_no_Mi_Infobox.png'), color: 'from-pink-300 to-purple-400',
    description: 'Permite manipular hilos hiper cortantes sumamente letales, tejer lazos a las nubes para "volar" y, con su nivel despertado, transformar los edificios a su alrededor en hilos a voluntad.'
  },
  {
    id: 8, name: 'Bara Bara no Mi', type: 'Paramecia', user: 'Buggy',
    img: w('Bara_Bara_no_Mi_Infobox.png'), color: 'from-red-500 to-blue-500',
    description: 'Hace al usuario estructuralmente invulnerable a cualquier ataque por cortes. Es capaz de levitar volando sus propios pedazos alrededor, excepto sus pies.'
  },
  {
    id: 10, name: 'Soru Soru no Mi', type: 'Paramecia', user: 'Charlotte Linlin (Big Mom)',
    img: w('Soru_Soru_no_Mi_Infobox.png'), color: 'from-pink-600 to-fuchsia-800',
    description: 'Otorga la dominación total sobre el alma misma. El usuario impone temor y drena años de vida, inyectándolos a fuego, nubes, o cualquier objeto animándolos (Homies).'
  },
  {
    id: 19, name: 'Hana Hana no Mi', type: 'Paramecia', user: 'Nico Robin',
    img: w('Hana_Hana_no_Mi_Anime_Infobox.png'), color: 'from-pink-400 to-purple-600',
    description: 'Permite al usuario brotar partes de su cuerpo humano (especialmente brazos, piernas o grandes avatares) como flores brotando instantáneamente desde cualquier superficie visible.'
  },
  {
    id: 20, name: 'Doku Doku no Mi', type: 'Paramecia Especial', user: 'Magellan',
    img: w('Doku_Doku_no_Mi_Infobox.png'), color: 'from-purple-700 to-purple-950',
    description: 'Permite crear y exudar libremente todo tipo de venenos corrosivos incesantes desde su piel, así como enormes hidras letales que desintegran cualquier roca, acero o ser vivo en instantes.'
  },
  {
    id: 21, name: 'Bari Bari no Mi', type: 'Paramecia', user: 'Bartolomeo (Anteriormente Kurozumi Semimaru)',
    img: w('Bari_Bari_no_Mi_Infobox.png'), color: 'from-green-400 to-emerald-700',
    description: 'Mediante el cruce de los dedos, el usuario erige un escudo de cristal transparente increíblemente resistente diseñado para interceptar a la vez bloqueando ofensivas tan fuertes como haki puro.'
  },
  {
    id: 22, name: 'Mochi Mochi no Mi', type: 'Paramecia Especial', user: 'Charlotte Katakuri',
    img: w('Mochi_Mochi_no_Mi_Infobox.png'), color: 'from-red-200 to-pink-300',
    description: 'Nombrada una \'Paramecia Especial\' porque el usuario posee casi una total intangibilidad Logia transformándose en masa viscosa y pegajosa infinita, la cual atrapa y ahoga brutalmente enemigos.'
  },
  {
    id: 23, name: 'Kage Kage no Mi', type: 'Paramecia', user: 'Gecko Moria',
    img: w('Kage_Kage_no_Mi_Infobox.png'), color: 'from-gray-700 to-purple-900',
    description: 'Permite al usuario manifestar y controlar las sombras de los seres vivos.'
  },
  {
    id: 24, name: 'Nikyu Nikyu no Mi', type: 'Paramecia', user: 'Bartholomew Kuma',
    img: w('Nikyu_Nikyu_no_Mi_Infobox.png'), color: 'from-pink-300 to-gray-600',
    description: 'Permite al usuario repeler cualquier cosa que toque con las palmas.'
  },
  {
    id: 25, name: 'Zushi Zushi no Mi', type: 'Paramecia', user: 'Fujitora',
    img: w('Zushi_Zushi_no_Mi_Infobox.png'), color: 'from-purple-600 to-indigo-950',
    description: 'Otorga el poder de manipular la gravedad a voluntad.'
  },
  {
    id: 26, name: 'Ushi Ushi no Mi, Modelo: Jirafa', type: 'Zoan', user: 'Kaku',
    img: w('Ushi_Ushi_no_Mi%2C_Model_Giraffe_Infobox.png'), color: 'from-yellow-700 to-orange-800',
    description: 'Permite al usuario transformarse en una jirafa humana híbrida.'
  },
  {
    id: 27, name: 'Toshi Toshi no Mi', type: 'Paramecia', user: 'Jewelry Bonney',
    img: w('Toshi_Toshi_no_Mi_Infobox.png'), color: 'from-pink-400 to-rose-600',
    description: 'Permite al usuario manipular la edad.'
  },
  {
    id: 28, name: 'Gomu Gomu no Mi', type: 'Paramecia / Zoan', user: 'Monkey D. Luffy',
    img: w('Gomu_Gomu_no_Mi_Infobox.png'), color: 'from-purple-500 to-red-600',
    description: 'Otorga al usuario un cuerpo con las propiedades elásticas de la goma. Es la forma encubierta de la legendaria Hito Hito no Mi: Modelo Nika.'
  },
  {
    id: 29, name: 'Kilo Kilo no Mi', type: 'Paramecia', user: 'Miss Valentine',
    img: w('Kilo_Kilo_no_Mi_Infobox.png'), color: 'from-yellow-400 to-amber-600',
    description: 'Permite al usuario cambiar su peso corporal a voluntad, variando desde 1 kilogramo hasta las 10 toneladas.'
  },
  {
    id: 30, name: 'Moku Moku no Mi', type: 'Logia', user: 'Smoker',
    img: w('Moku_Moku_no_Mi_Infobox.png'), color: 'from-gray-400 to-slate-600',
    description: 'Permite al usuario crear, controlar y transformarse en humo a voluntad, siendo ideal para capturar y asfixiar piratas.'
  },
  {
    id: 31, name: 'Baku Baku no Mi', type: 'Paramecia', user: 'Wapol',
    img: w('Baku_Baku_no_Mi_Infobox.png'), color: 'from-purple-500 to-indigo-800',
    description: 'Permite al usuario comer cualquier cosa, desde metal hasta personas, y asimilar los elementos ingeridos para transformar o armar su propio cuerpo.'
  },
  {
    id: 32, name: 'Horu Horu no Mi', type: 'Paramecia', user: 'Emporio Ivankov',
    img: w('Horu_Horu_no_Mi_Infobox.png'), color: 'from-pink-500 to-purple-800',
    description: 'Otorga al usuario la capacidad de inyectar hormonas especiales con sus dedos, pudiendo alterar el género, temperatura, pigmentación o curar heridas mortales.'
  },
  {
    id: 33, name: 'Mane Mane no Mi', type: 'Paramecia', user: 'Bentham (Mr. 2)',
    img: w('Mane_Mane_no_Mi_Infobox.png'), color: 'from-pink-400 to-blue-400',
    description: 'Permite al usuario transformarse físicamente en cualquier persona a la que haya tocado previamente con su mano derecha.'
  },
  {
    id: 34, name: 'Supa Supa no Mi', type: 'Paramecia', user: 'Daz Bones (Mr. 1)',
    img: w('Supa_Supa_no_Mi_Infobox.png'), color: 'from-gray-600 to-zinc-800',
    description: 'Transforma cualquier parte del cuerpo del usuario en hojas de acero extremadamente afiladas, convirtiéndolo en un hombre de acero cortante.'
  },
  {
    id: 35, name: 'Doru Doru no Mi', type: 'Paramecia', user: 'Galdino (Mr. 3)',
    img: w('Doru_Doru_no_Mi_Infobox.png'), color: 'from-sky-200 to-slate-400',
    description: 'Permite al usuario secretar cera líquida que se endurece rápidamente hasta volverse tan resistente como el acero, ideal para forjar llaves, armaduras o trampas.'
  },
  {
    id: 36, name: 'Ori Ori no Mi', type: 'Paramecia', user: 'Hina',
    img: w('Ori_Ori_no_Mi_Infobox.png'), color: 'from-pink-600 to-rose-800',
    description: 'Permite al usuario generar barras y cepos de hierro negro directamente de su cuerpo para capturar de manera infalible a los delincuentes.'
  },
  {
    id: 37, name: 'Tori Tori no Mi, Modelo: Halcón', type: 'Zoan', user: 'Pell',
    img: w('Tori_Tori_no_Mi%2C_Model_Falcon_Infobox.png'), color: 'from-yellow-600 to-amber-700',
    description: 'Permite transformarse en un halcón híbrido o completo, siendo una de las cinco frutas conocidas que otorgan la codiciada capacidad de vuelo libre.'
  }
];



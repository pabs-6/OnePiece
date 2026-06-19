export interface RichTextSegment {
  text: string;
  bold?: boolean;
  italic?: boolean;
}

export interface ParagraphBlock {
  type: 'paragraph';
  content: RichTextSegment[];
}

export interface SubtitleBlock {
  type: 'subtitle';
  text: string;
}

export interface ListBlock {
  type: 'list';
  items: RichTextSegment[][];
}

export interface ImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export type NewsBlock = ParagraphBlock | SubtitleBlock | ListBlock | ImageBlock;

export interface NewsArticle {
  heading: string;
  body: NewsBlock[];
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  icon: string;
  description: string;
  tag: string;
  tagColor: string;
  borderColor: string;
  hot: boolean;
  article: NewsArticle;
}

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "One Piece supera los 530 millones de copias vendidas", date: "2024", category: "Manga", icon: "📚",
    description: "Eiichiro Oda ha confirmado que One Piece ha superado la increíble barrera mundial. Se consolida como el rey de los mangas indiscutible en la historia literaria.",
    tag: "RÉCORD MUNDIAL", tagColor: "bg-yellow-500 text-black", borderColor: "border-yellow-500", hot: true,
    article: {
      heading: "El Manga Más Vendido de la Historia",
      body: [
        { type: 'paragraph', content: [{ text: "Eiichiro Oda y su equipo de Shueisha han anunciado oficialmente que One Piece ha superado la barrera histórica de " }, { text: "530 millones de copias vendidas", bold: true }, { text: " en todo el mundo, consolidándolo como el manga más vendido en la historia de la humanidad por un único autor." }] },
        { type: 'paragraph', content: [{ text: "Este hito monumental supera en ventas a obras icónicas como Dragon Ball (260M), Naruto (250M) y Demon Slayer (150M) " }, { text: "combinadas", italic: true }, { text: ". La cifra incluye tanto ediciones físicas en papel como versiones digitales en más de 60 países." }] },
        { type: 'subtitle', text: "¿Cómo lo logró Oda?" },
        {
          type: 'list',
          items: [
            [{ text: "27+ años de publicación sin pausas significativas" }],
            [{ text: "Historia con foreshadowing de décadas planificado desde el inicio" }],
            [{ text: "Personajes memorables con arcos emocionales únicos" }],
            [{ text: "Un mundo expansivo de misterios interconectados" }],
            [{ text: "Adaptaciones anime, live action y merchandising global" }]
          ]
        },
        { type: 'paragraph', content: [{ text: "Shueisha ha revelado que la demanda internacional ha crecido un 340% desde el estreno de la serie Live Action de Netflix en 2023, atrayendo millones de nuevos lectores a la saga original." }] },
        { type: 'paragraph', content: [{ text: "Oda expresó su gratitud a los fans en un mensaje especial en la portada del Jump: " }, { text: "\"Este logro es de todos ustedes. Aún no he terminado. El mejor capítulo está por venir.\"", italic: true }] }
      ]
    }
  },
  {
    id: 2,
    title: "El arco de Elbaf comienza oficialmente", date: "2024-2025", category: "Manga", icon: "⚔️",
    description: "Los Piratas del Sombrero de Paja entran por fin en tierra de gigantes (Warland). Se revelan diseños vikingos y el destino de Shanks El Pelirrojo.",
    tag: "NUEVO ARCO", tagColor: "bg-red-600 text-white", borderColor: "border-red-500", hot: true,
    article: {
      heading: "Elbaf: La Tierra de los Gigantes que Esperábamos Desde el Capítulo 1",
      body: [
        { type: 'paragraph', content: [{ text: "Prometida desde los primeros arcos del manga, " }, { text: "Elbaf (Warland)", bold: true }, { text: " es la isla hogar de los gigantes vikingos más poderosos del mundo de One Piece. Tras décadas de anticipación, los Mugiwaras han llegado oficialmente a sus costas." }] },
        { type: 'subtitle', text: "Lo que sabemos del arco" },
        {
          type: 'list',
          items: [
            [{ text: "Usopp, que soñaba con ir a Elbaf desde niño, tendrá un rol central" }],
            [{ text: "Shanks El Pelirrojo tiene conexiones profundas con los gigantes" }],
            [{ text: "Se confirmó la presencia de " }, { text: "Dorry y Brogy", bold: true }, { text: ", los gigantes del Alabasta Arc" }],
            [{ text: "Los diseños de Oda mezclan estética nórdica con el mundo pirata clásico" }],
            [{ text: "Se revelan los secretos de la infancia de Shanks en God Valley" }]
          ]
        },
        { type: 'subtitle', text: "Implicaciones para el Final" },
        { type: 'paragraph', content: [{ text: "Elbaf podría ser el penúltimo gran arco antes del clímax final de One Piece. Se especula que aquí se revelará información crucial sobre el " }, { text: "Siglo Vacío", bold: true }, { text: ", los Poneglyphs y la verdadera naturaleza del Gobierno Mundial." }] },
        { type: 'paragraph', content: [{ text: "Fans de todo el mundo han calificado los primeros capítulos del arco como \"el mejor inicio de arco en la historia del manga\", con una acción de calidad inigualable y revelaciones que sacuden los cimientos del lore establecido." }] }
      ]
    }
  },
  {
    id: 3,
    title: "Netflix lanza primeros vistazos de Season 2", date: "2024", category: "Adaptación", icon: "🎬",
    description: "Nuevos actores para roles confirmados en Loguetown, Laboon y la infiltración a Baroque Works. Smoker y Crocodile aparecen en las sombras.",
    tag: "LIVE ACTION", tagColor: "bg-blue-600 text-white", borderColor: "border-blue-500", hot: false,
    article: {
      heading: "One Piece Live Action Season 2: Todo lo Confirmado",
      body: [
        { type: 'paragraph', content: [{ text: "Después del rotundo éxito de la primera temporada, que se convirtió en la serie más vista de Netflix en la semana de su estreno, la producción de la " }, { text: "Season 2", bold: true }, { text: " está en pleno apogeo." }] },
        { type: 'subtitle', text: "Nuevos Personajes Confirmados" },
        {
          type: 'list',
          items: [
            [{ text: "Smoker", bold: true }, { text: " – El Capitán Marine rival de Loguetown" }],
            [{ text: "Tashigi", bold: true }, { text: " – La teniente espadachina que imita a Kuina" }],
            [{ text: "Sir Crocodile", bold: true }, { text: " – El gran antagonista del arco Alabasta" }],
            [{ text: "Vivi", bold: true }, { text: " – La princesa de Arabasta que se une a la tripulación" }],
            [{ text: "Mr. 1, Mr. 2, Miss Valentine", bold: true }, { text: " – Agentes de Baroque Works" }]
          ]
        },
        { type: 'subtitle', text: "Arcos que Cubrirá" },
        { type: 'paragraph', content: [{ text: "Se espera que la temporada 2 cubra desde " }, { text: "Loguetown", bold: true }, { text: " hasta el final de " }, { text: "Arabasta", bold: true }, { text: ", posiblemente incluyendo Little Garden, Drum Island y la epica batalla final contra Crocodile." }] },
        { type: 'paragraph', content: [{ text: "El showrunner Matt Owens ha prometido mayor fidelidad al manga y reveló que el propio Eiichiro Oda ha participado activamente en las decisiones creativas de esta temporada." }] },
        { type: 'paragraph', content: [{ text: "La fecha de estreno estimada es " }, { text: "finales de 2025", bold: true }, { text: ", pendiente de confirmación oficial por parte de Netflix." }] }
      ]
    }
  },
  {
    id: 4,
    title: "The One Piece - El Remake de Wit Studio", date: "2025", category: "Anime", icon: "🎨",
    description: "El nuevo anime que adaptará desde el arco del East Blue con animación moderna, estilo cinemático y sin relleno, producido por Netflix.",
    tag: "REMAKE", tagColor: "bg-indigo-600 text-white", borderColor: "border-indigo-500", hot: true,
    article: {
      heading: "The One Piece: El Anime Definitivo que Merecemos",
      body: [
        { type: 'paragraph', content: [{ text: "Wit Studio", bold: true }, { text: ", los creadores de los primeros 3 arcos de Attack on Titan y Vinland Saga, han sido elegidos para producir el remake definitivo de One Piece para Netflix, con el título oficial " }, { text: "\"The One Piece\"", italic: true }, { text: "." }] },
        { type: 'subtitle', text: "¿Qué lo diferencia del anime original?" },
        {
          type: 'list',
          items: [
            [{ text: "Animación cinematográfica de calidad película" }],
            [{ text: "Sin episodios de relleno", bold: true }, { text: " – fiel 100% al manga" }],
            [{ text: "Banda sonora completamente nueva y orquestada" }],
            [{ text: "Diseños de personajes actualizados con más detalle" }],
            [{ text: "Ritmo narrativo más rápido y dinámico" }],
            [{ text: "Calidad visual consistente arco a arco" }]
          ]
        },
        { type: 'subtitle', text: "El Equipo Creativo" },
        { type: 'paragraph', content: [{ text: "Wit Studio ha convocado a algunos de los mejores animadores de Japón. Oda tiene veto creativo sobre la producción y ha expresado su entusiasmo: " }, { text: "\"Este es el anime de One Piece que siempre quise hacer.\"", italic: true }] },
        { type: 'paragraph', content: [{ text: "El primer arco confirmado es " }, { text: "East Blue", bold: true }, { text: ", comenzando por el origen de Luffy hasta Nami, Zoro y la batalla contra Arlong. Se espera que el primer tráiler oficial se presente en el " }, { text: "One Piece Day 2025", bold: true }, { text: "." }] }
      ]
    }
  },
  {
    id: 5,
    title: "El despertar inminente de Dragon", date: "2024", category: "Spoilers", icon: "🌪️",
    description: "Tras el incidente en Mariejois con Sabo y Cobra, Dragon el Revolucionario se prepara para movilizar a su ejército contra los Caballeros Sagrados.",
    tag: "SPOILER", tagColor: "bg-gray-700 text-white", borderColor: "border-gray-600", hot: false,
    article: {
      heading: "Monkey D. Dragon: El Hombre Más Buscado del Mundo Entra en Acción",
      body: [
        { type: 'paragraph', content: [{ text: "Tras los eventos del Reverie y el posterior incidente en Mariejois donde Sabo fue acusado de asesinar al Rey Cobra de Arabasta, " }, { text: "Monkey D. Dragon", bold: true }, { text: " ha comenzado a movilizar el Ejército Revolucionario de forma activa." }] },
        { type: 'subtitle', text: "Lo que sabemos sobre Dragon" },
        {
          type: 'list',
          items: [
            [{ text: "Es el hombre más buscado del mundo, padre de Luffy" }],
            [{ text: "Su fruta del diablo sigue siendo un misterio (se especula con viento/clima)" }],
            [{ text: "Fundó el Ejército Revolucionario para destruir el Gobierno Mundial" }],
            [{ text: "Tiene una conexión con el Siglo Vacío y la Voluntad de D." }],
            [{ text: "Conoció a Garp, lo que implica un pasado complejo" }]
          ]
        },
        { type: 'subtitle', text: "El Enfrentamiento con los Caballeros Sagrados" },
        { type: 'paragraph', content: [{ text: "Los Caballeros Sagrados, liderados por " }, { text: "Figarland Garling", bold: true }, { text: ", son el ejército de élite de los Nobles Mundiales. Un enfrentamiento con el Ejército Revolucionario podría ser uno de los conflictos más grandes antes del clímax final." }] },
        { type: 'paragraph', content: [{ text: "Fans especulan que Elbaf podría ser el punto de reunión de Dragon, Luffy y las fuerzas aliadas para el asalto definitivo a Mariejois." }] }
      ]
    }
  },
  {
    id: 6,
    title: "Un nuevo misterio del Siglo Vacío revelado", date: "2024", category: "Manga", icon: "📜",
    description: "La transmisión global del Dr. Vegapunk donde confiesa qué le pasará al mundo por la elevación del nivel del mar debido a las Armas Ancestrales.",
    tag: "LORE", tagColor: "bg-purple-600 text-white", borderColor: "border-purple-500", hot: true,
    article: {
      heading: "La Transmisión de Vegapunk y los Secretos del Siglo Vacío",
      body: [
        { type: 'paragraph', content: [{ text: "En el arco de Egghead, el " }, { text: "Dr. Vegapunk", bold: true }, { text: " emitió una transmisión global antes de morir, revelando que el mundo entero quedará sumergido bajo el mar en el futuro debido a la activación de las " }, { text: "Armas Ancestrales", bold: true }, { text: " por parte de alguien con la voluntad de D." }] },
        { type: 'subtitle', text: "Los Misterios del Siglo Vacío" },
        {
          type: 'list',
          items: [
            [{ text: "Hace 800 años existió un " }, { text: "reino aliado de 20 naciones", bold: true }, { text: " que fue borrado de la historia" }],
            [{ text: "El Gobierno Mundial suprimió todos los registros de ese período" }],
            [{ text: "Los " }, { text: "Poneglyphs", bold: true }, { text: " son la única historia que sobrevivió" }],
            [{ text: "El \"One Piece\" podría ser la verdad completa de ese reino perdido" }],
            [{ text: "Joy Boy fue la figura central de esa era y dejó una promesa incumplida" }]
          ]
        },
        { type: 'subtitle', text: "Implicaciones para el Mundo" },
        { type: 'paragraph', content: [{ text: "Si alguien activa las tres Armas Ancestrales (Pluton, Poseidón y Uranus), el mar subirá y destruirá los imperios actuales, \"nivelando\" el mundo. Esto es exactamente lo que el Gobierno Mundial teme y por eso suprimió la historia." }] },
        { type: 'paragraph', content: [{ text: "Nico Robin, con su conocimiento de los Poneglyphs, podría ser la única persona capaz de impedir o comprender esta catástrofe antes de que ocurra." }] }
      ]
    }
  },
  {
    id: 7,
    title: "Cross Guild toma el control marino", date: "2024", category: "Spoilers", icon: "⚖️",
    description: "Buggy, Crocodile y Mihawk ponen cazarrecompensas altísimas a la cabeza de los Marines, creando el caos estructural en el Nuevo Mundo.",
    tag: "SPOILER", tagColor: "bg-green-600 text-white", borderColor: "border-green-500", hot: false,
    article: {
      heading: "Cross Guild: La Organización que Invirtió las Reglas del Mundo",
      body: [
        { type: 'paragraph', content: [{ text: "La creación del " }, { text: "Cross Guild", bold: true }, { text: " es uno de los giros más creativos de Oda en el Nuevo Mundo. Por primera vez en la historia de One Piece, son los " }, { text: "piratas", italic: true }, { text: " quienes ponen recompensas sobre las cabezas de los " }, { text: "marines", italic: true }, { text: "." }] },
        { type: 'subtitle', text: "Los Tres Fundadores" },
        {
          type: 'list',
          items: [
            [{ text: "Buggy El Payaso", bold: true }, { text: " – Nominalmente el líder (por accidente), ahora Yonko" }],
            [{ text: "Sir Crocodile", bold: true }, { text: " – El estratega real detrás de la organización" }],
            [{ text: "Dracule Mihawk", bold: true }, { text: " – El espadachín más poderoso del mundo, el músculo" }]
          ]
        },
        { type: 'subtitle', text: "Su Impacto en el Nuevo Mundo" },
        { type: 'paragraph', content: [{ text: "Al ofrecer recompensas por Marines, Cross Guild ha creado un incentivo económico para que cazarrecompensas y mercenarios ataquen a las fuerzas del orden. Esto ha desestabilizado regiones enteras y ha obligado a la Marina a redistribuir recursos defensivos." }] },
        { type: 'paragraph', content: [{ text: "La ironía de que Buggy, el pirata más cobarde e incompetente, se haya convertido en un Yonko y líder de una de las organizaciones más poderosas del mundo es considerada la broma más larga y elaborada de Oda en toda la serie." }] }
      ]
    }
  },
  {
    id: 8,
    title: "Los Gorosei revelan su verdadera forma", date: "2024", category: "Manga", icon: "👹",
    description: "En el clímax del arco de Egghead, las 5 Estrellas Ancianas muestran poderes yokai monstruosos sin paralelo para detener a Nika.",
    tag: "REVELACIÓN", tagColor: "bg-pink-600 text-white", borderColor: "border-pink-500", hot: true,
    article: {
      heading: "Los Gorosei: Los Cinco Ancianos y sus Frutas Miticas",
      body: [
        { type: 'paragraph', content: [{ text: "Durante el clímax del arco de Egghead, los " }, { text: "Cinco Ancianos (Gorosei)", bold: true }, { text: " revelaron que no son simples consejeros del Gobierno Mundial. Son guerreros inmortales con " }, { text: "Frutas del Diablo Míticas", bold: true }, { text: " que los convierten en monstruos de leyenda." }] },
        { type: 'subtitle', text: "Las Transformaciones Reveladas" },
        {
          type: 'list',
          items: [
            [{ text: "Saint Jaygarcia Saturn", bold: true }, { text: " – Transforma en una araña gigante de 8 patas" }],
            [{ text: "Saint Shepherd Ju Peter", bold: true }, { text: " – Gusano colosal que devastó campos enteros" }],
            [{ text: "Saint Ethanbaron V. Nusjuro", bold: true }, { text: " – Un caballo fantasmal que congela todo" }],
            [{ text: "Saint Marcus Mars", bold: true }, { text: " – Un ser aviar descomunal con poderes de tormenta" }],
            [{ text: "Saint Topman Warcury", bold: true }, { text: " – Bestia jabalí colosal de poder devastador" }]
          ]
        },
        { type: 'subtitle', text: "¿Son Inmortales?" },
        { type: 'paragraph', content: [{ text: "Se ha confirmado que los Gorosei pueden regenerarse de prácticamente cualquier daño y que han vivido cientos de años. Representan el mayor desafío individual que Luffy y sus aliados deberán superar para llegar al One Piece." }] },
        { type: 'paragraph', content: [{ text: "La batalla de Egghead mostró que incluso el Gear 5 de Luffy tuvo dificultades contra ellos, lo que eleva las apuestas para el arco final de la serie." }] }
      ]
    }
  },
  {
    id: 9,
    title: "La Voz de Todas las Cosas: Un Don Raro", date: "2025", category: "Lore", icon: "👂",
    description: "Nuevos análisis en el manga sugieren que la habilidad de Luffy y Momonosuke para escuchar a Zuneisha es la clave final para abrir el Siglo Vacío.",
    tag: "ANÁLISIS", tagColor: "bg-yellow-600 text-black", borderColor: "border-yellow-400", hot: false,
    article: {
      heading: "La Voz de Todas las Cosas: El Don Más Misterioso de One Piece",
      body: [
        { type: 'paragraph', content: [{ text: "Establecida desde el arco de Skypiea, " }, { text: "\"La Voz de Todas las Cosas\"", bold: true }, { text: " es una habilidad extremadamente rara que permite a su portador comunicarse con seres vivos, objetos inanimados y hasta con la historia misma." }] },
        { type: 'subtitle', text: "Usuarios Conocidos" },
        {
          type: 'list',
          items: [
            [{ text: "Gol D. Roger", bold: true }, { text: " – Podía leer los Poneglyphs sin haberlos estudiado" }],
            [{ text: "Monkey D. Luffy", bold: true }, { text: " – Escuchó el llanto de las Homies en Whole Cake" }],
            [{ text: "Momonosuke", bold: true }, { text: " – Puede comunicarse con el gigante elefante Zuneisha" }],
            [{ text: "Kozuki Oden", bold: true }, { text: " – Poseía esta habilidad según Roger" }]
          ]
        },
        { type: 'subtitle', text: "Su Conexión con el Siglo Vacío" },
        { type: 'paragraph', content: [{ text: "La teoría más aceptada establece que los Poneglyphs no son solo piedras con texto, sino que \"vibran\" con la historia del Siglo Vacío. Solo alguien con la Voz de Todas las Cosas puede \"escuchar\" la verdad completa más allá de las palabras escritas." }] },
        { type: 'paragraph', content: [{ text: "Esto significa que Luffy, al igual que Roger, podría eventualmente \"escuchar\" la historia completa del One Piece sin necesitar a Robin para traducirlo, desbloqueando el verdadero significado de la herencia de Joy Boy." }] }
      ]
    }
  },
  {
    id: 10,
    title: "Figarland Garling: El Verdugo de God Valley", date: "2024", category: "Manga", icon: "🌙",
    description: "Se revela el pasado del líder de los Caballeros Sagrados. Su conexión con Shanks sacude las bases de la comunidad de teorías.",
    tag: "REVELACIÓN", tagColor: "bg-red-800 text-white", borderColor: "border-red-700", hot: true,
    article: {
      heading: "Figarland Garling: El Hombre que Pudo Ser el Padre de Shanks",
      body: [
        { type: 'paragraph', content: [{ text: "Saint Figarland Garling", bold: true }, { text: ", el Líder Supremo de los Caballeros Sagrados, ha sido revelado como el guerrero que ganó el torneo de God Valley hace 38 años, el mismo evento donde el joven Shanks fue encontrado como bebé en un baúl por el pirata Roger." }] },
        { type: 'subtitle', text: "La Teoría del Padre de Shanks" },
        {
          type: 'list',
          items: [
            [{ text: "Garling es un " }, { text: "Noble Mundial del clan Figarland", bold: true }],
            [{ text: "Shanks tiene el apellido " }, { text: "\"Figarland\"", bold: true }, { text: " según documentos oficiales" }],
            [{ text: "Esto implicaría que Shanks es hijo de un Noble Mundial" }],
            [{ text: "Explicaría por qué los Nobles le permiten entrar a Mariejois" }],
            [{ text: "Shanks renunció a sus privilegios para vivir como pirata" }]
          ]
        },
        { type: 'subtitle', text: "Sus Habilidades" },
        { type: 'paragraph', content: [{ text: "Garling es considerado uno de los combatientes más poderosos del mundo, posiblemente igual o superior a un Yonko. Como líder de los Caballeros Sagrados, tiene autoridad para ejecutar incluso a Nobles Mundiales si cometen crímenes contra el orden." }] },
        { type: 'paragraph', content: [{ text: "Su aparición en el arco actual señala que el Gobierno Mundial está escalando su respuesta, preparándose para el enfrentamiento definitivo con los piratas aliados de Luffy." }] }
      ]
    }
  },
  {
    id: 11,
    title: "One Piece Day 2025: Expectativas Totales", date: "2025", category: "Eventos", icon: "🎪",
    description: "El evento anual más importante promete nuevos tráilers del Live Action y detalles exclusivos sobre el final del arco de Elbaf.",
    tag: "EVENTO", tagColor: "bg-blue-500 text-white", borderColor: "border-blue-400", hot: false,
    article: {
      heading: "One Piece Day 2025: El Evento del Año para los Fans",
      body: [
        { type: 'paragraph', content: [{ text: "El " }, { text: "One Piece Day", bold: true }, { text: " es el evento oficial anual organizado por Shueisha y Toei Animation, que se celebra cada año en julio para coincidir con el aniversario del manga. En 2025 promete ser el más grande hasta la fecha." }] },
        { type: 'subtitle', text: "Anuncios Esperados" },
        {
          type: 'list',
          items: [
            [{ text: "Tráiler oficial de " }, { text: "The One Piece", bold: true }, { text: " (remake de Wit Studio)" }],
            [{ text: "Primeras imágenes de la " }, { text: "Season 2 del Live Action", bold: true }],
            [{ text: "Detalles del arco de Elbaf y revelaciones de personajes" }],
            [{ text: "Nuevos proyectos de colaboración y videojuegos" }],
            [{ text: "Mensaje especial de Eiichiro Oda a los fans globales" }]
          ]
        },
        { type: 'subtitle', text: "El Evento en Cifras" },
        { type: 'paragraph', content: [{ text: "El One Piece Day 2024 fue seguido en directo por más de " }, { text: "5 millones de personas", bold: true }, { text: " en todo el mundo simultáneamente. Se espera que en 2025 esta cifra se duplique gracias al crecimiento exponencial de la fanbase internacional." }] },
        { type: 'paragraph', content: [{ text: "El evento se transmitirá de forma gratuita en el canal oficial de YouTube de One Piece y en plataformas asociadas en más de 120 países." }] }
      ]
    }
  },
  {
    id: 12,
    title: "¿Vuelve Enel? Los indicios en la Luna", date: "2025", category: "Rumores", icon: "⚡",
    description: "Pequeños detalles en las portadas de los capítulos recientes alimentan la esperanza de los fans sobre el regreso del Dios de Skypiea.",
    tag: "RUMOR", tagColor: "bg-purple-500 text-white", borderColor: "border-purple-400", hot: false,
    article: {
      heading: "Enel: ¿El Villano Olvidado que Regresará en el Arco Final?",
      body: [
        { type: 'paragraph', content: [{ text: "Enel", bold: true }, { text: ", el auto-proclamado \"Dios\" de Skypiea con la Fruta del Trueno (Goro Goro no Mi), ha estado ausente del manga principal desde el arco de Skypiea. Sin embargo, sus apariciones en las portadas de capítulos cuentan una historia paralela fascinante." }] },
        { type: 'subtitle', text: "La Historia de las Portadas" },
        {
          type: 'list',
          items: [
            [{ text: "Enel viajó hasta la " }, { text: "Luna", bold: true }, { text: " usando sus poderes eléctricos" }],
            [{ text: "Allí encontró " }, { text: "ruinas de una civilización antigua", bold: true }, { text: " vinculada al Siglo Vacío" }],
            [{ text: "Descubrió robots durmientes similares al gigante de Egghead" }],
            [{ text: "Comenzó a despertar estas máquinas con su electricidad" }],
            [{ text: "En recientes portadas parece estar preparando algo" }]
          ]
        },
        { type: 'subtitle', text: "¿Por Qué Importa?" },
        { type: 'paragraph', content: [{ text: "Si la civilización lunar está relacionada con el Siglo Vacío, Enel podría tener información vital sobre la historia real del mundo. Además, con los robots de la Luna despertados, podría regresar con un ejército tecnológico que nadie esperaba." }] },
        { type: 'paragraph', content: [{ text: "La Goro Goro no Mi es considerada por Oda como la fruta \"más poderosa sin despertar\" del manga. Un regreso de Enel con más experiencia podría hacerlo un jugador clave en el arco final." }] }
      ]
    }
  },
];

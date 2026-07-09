export interface Movie {
  id: number;
  title: string;
  year: number;
  duration: string;
  canon: boolean;
  director: string;
  icon: string;
  description: string;
}

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "One Piece: La Película",
    year: 2000,
    duration: "50 min",
    canon: false,
    director: "Junji Shimizu",
    icon: "🗺️",
    description: "La primera película de la franquicia. Luffy y su tripulación inicial (Zoro, Nami y Usopp) buscan el tesoro de Woonan, el legendario pirata de oro."
  },
  {
    id: 2,
    title: "Aventura en la Isla Engranaje",
    year: 2001,
    duration: "55 min",
    canon: false,
    director: "Junji Shimizu",
    icon: "⚙️",
    description: "El Going Merry es robado por los piratas de la Alianza de los Naipes. Los Mugiwaras deben rescatarlo en una isla flotante gobernada por tecnología de engranajes."
  },
  {
    id: 3,
    title: "El Reino de Chopper en la Isla de los Animales Raros",
    year: 2002,
    duration: "56 min",
    canon: false,
    director: "Junji Shimizu",
    icon: "🦌",
    description: "Chopper acaba siendo coronado como rey de los animales en una extraña isla. La tripulación se enfrenta a cazadores furtivos que buscan los cuernos del rey animal."
  },
  {
    id: 4,
    title: "Aventura en Dead End",
    year: 2003,
    duration: "95 min",
    canon: false,
    director: "Kounosuke Uda",
    icon: "🏁",
    description: "Una carrera secreta de piratas en el puerto de Hannabal con un gran premio. Luffy se enfrenta al temido ex-marín Gasparde, usuario de la fruta Ame Ame."
  },
  {
    id: 5,
    title: "La Espada Sagrada Maldita",
    year: 2004,
    duration: "95 min",
    canon: false,
    director: "Kazuhisa Takenouchi",
    icon: "⚔️",
    description: "Zoro parece traicionar a la tripulación para proteger a un viejo amigo de la infancia en posesión de la Espada de los Siete Destellos, una hoja maldita."
  },
  {
    id: 6,
    title: "El Barón Omatsuri y la Isla Secreta",
    year: 2005,
    duration: "88 min",
    canon: false,
    director: "Mamoru Hosoda",
    icon: "🌸",
    description: "Dirigida por el aclamado Mamoru Hosoda. Una película con un tono oscuro, psicológico y único. La tripulación es tentada por pruebas en un resort tropical que amenaza su amistad."
  },
  {
    id: 7,
    title: "El Gran Soldado Mecánico del Castillo Karakuri",
    year: 2006,
    duration: "94 min",
    canon: false,
    director: "Kozo Morishita",
    icon: "🤖",
    description: "La tripulación busca un tesoro legendario en una isla repleta de trampas mecánicas gigantes controladas por el inventor Ratchet."
  },
  {
    id: 8,
    title: "La Princesa del Desierto y los Piratas: Aventuras en Alabasta",
    year: 2007,
    duration: "90 min",
    canon: true,
    director: "Takahiro Imamura",
    icon: "🏜️",
    description: "Una película recopilatoria y remasterizada del arco de Alabasta, centrándose en la lucha desesperada de Vivi y Luffy contra Crocodile."
  },
  {
    id: 9,
    title: "Episodio de Chopper Plus: Florecer en Invierno, el Milagro del Cerezo",
    year: 2008,
    duration: "113 min",
    canon: false,
    director: "Atsuji Shimizu",
    icon: "❄️",
    description: "Una versión alternativa del arco de Drum Island que incluye a Robin y Franky en la tripulación, y a Wapol acompañado de su hermano Musshuru."
  },
  {
    id: 10,
    title: "One Piece Film: Strong World",
    year: 2009,
    duration: "115 min",
    canon: true,
    director: "Munehisa Sakai",
    icon: "🦁",
    description: "Escrita personalmente por Eiichiro Oda. El legendario pirata Shiki el León Dorado secuestra a Nami. Luffy y su tripulación, vestidos de gala, asaltan su fortaleza flotante."
  },
  {
    id: 11,
    title: "One Piece 3D: La Persecución del Sombrero de Paja",
    year: 2011,
    duration: "30 min",
    canon: false,
    director: "Hiroyuki Sato",
    icon: "🕶️",
    description: "Cortometraje en animación 3D CGI donde Luffy persigue a un águila gigante que ha robado su sombrero de paja por todo el Grand Line."
  },
  {
    id: 12,
    title: "One Piece Film: Z",
    year: 2012,
    duration: "108 min",
    canon: false,
    director: "Tatsuya Nagamine",
    icon: "🟣",
    description: "Supervisada por Oda. Luffy se enfrenta a Zephyr 'Z', un amargado ex-almirante de la Marina que busca erradicar a todos los piratas destruyendo los End Points del Nuevo Mundo."
  },
  {
    id: 13,
    title: "One Piece Film: Gold",
    year: 2016,
    duration: "120 min",
    canon: false,
    director: "Hiroaki Miyamoto",
    icon: "🪙",
    description: "El Gran Tesoro es una ciudad flotante de oro y entretenimiento. Gild Tesoro, el rey del casino, manipula a la tripulación con deudas y trampas doradas."
  },
  {
    id: 14,
    title: "One Piece: Stampede",
    year: 2019,
    duration: "101 min",
    canon: false,
    director: "Takashi Otsuka",
    icon: "🌋",
    description: "El Festival de los Piratas reúne a la Peor Generación, Shichibukais y Revolucionarios. Todos unen fuerzas para derrotar a Douglas Bullet, un ex-miembro de la tripulación de Roger."
  },
  {
    id: 15,
    title: "One Piece Film: Red",
    year: 2022,
    duration: "115 min",
    canon: false,
    director: "Goro Taniguchi",
    icon: "🎤",
    description: "La superestrella de la música Uta resulta ser la hija de Shanks. Con su voz mágica (fruta Uta Uta), planea encerrar las almas de todo el mundo en una dimensión de felicidad eterna."
  }
];

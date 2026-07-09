export interface HakiType {
  id: string;
  name: string;
  japanese: string;
  translation: string;
  description: string;
  color: string;
  icon: string;
  advancedForms: { name: string; description: string }[];
}

export interface MeitoSword {
  id: string;
  name: string;
  japanese: string;
  grade: 'Saijo O Wazamono' | 'O Wazamono' | 'Ryo Wazamono' | 'Wazamono' | 'Grado Desconocido';
  gradeLabel: string;
  owner: string;
  previousOwners: string[];
  status: 'Activa' | 'Destruida' | 'Perdida';
  description: string;
  icon: string;
  bgGradient: string;
}

export const HAKI_TYPES: HakiType[] = [
  {
    id: "kenbunshoku",
    name: "Haki de Observación",
    japanese: "見聞色の覇気",
    translation: "Color de la Observación",
    description: "Otorga al usuario capacidades sensoriales avanzadas. Permite sentir la presencia, fuerza, emociones e intenciones de otros seres vivos, incluso si están fuera de la vista. También permite predecir los movimientos de los oponentes justo antes de que los hagan.",
    color: "from-blue-600 to-indigo-900 border-blue-500/40 text-blue-300",
    icon: "👁️",
    advancedForms: [
      {
        name: "Visión del Futuro (Future Sight)",
        description: "El usuario entrena su Haki a tal nivel que puede ver un fragmento preciso del futuro inmediato (de 3 a 5 segundos). Utilizado por personajes como Charlotte Katakuri, Monkey D. Luffy y Shanks."
      },
      {
        name: "Percepción de Almas",
        description: "Permite ver el aura o el alma de las personas a través de distancias masivas e incluso obstáculos sólidos. Mostrado por Usopp en Dressrosa."
      }
    ]
  },
  {
    id: "busoshoku",
    name: "Haki de Armamento",
    japanese: "武装色の覇気",
    translation: "Color del Armamento",
    description: "Permite al usuario crear una armadura de fuerza espiritual invisible a su alrededor para protección y ataque. Puede canalizarse en objetos (como espadas y flechas) para endurecerlos. Es el único método directo para dañar físicamente el cuerpo real de un usuario de Fruta del Diablo de tipo Logia.",
    color: "from-gray-700 to-slate-950 border-slate-500/40 text-slate-300",
    icon: "🛡️",
    advancedForms: [
      {
        name: "Endurecimiento (Koka)",
        description: "Capa negra metálica brillante y superdura sobre la piel u objetos. Es la aplicación física visible estándar del armamento."
      },
      {
        name: "Emisión / Haki de Flujo (Ryuo)",
        description: "Emitir el Haki a corta distancia fuera del cuerpo del usuario sin contacto físico, creando barreras o proyectando impactos destructivos invisibles."
      },
      {
        name: "Destrucción Interna",
        description: "Hacer fluir el Haki de armamento directamente al interior del objetivo para destruirlo desde dentro. Es el nivel máximo de armamento, dominado por Luffy y Silvers Rayleigh."
      }
    ]
  },
  {
    id: "haoshoku",
    name: "Haki del Conquistador",
    japanese: "覇王色の覇気",
    translation: "Color del Rey Conquistador",
    description: "La forma más rara de Haki. No se puede aprender mediante entrenamiento; se nace con él y solo una persona entre un millón lo posee. Permite al usuario imponer su propia fuerza de voluntad sobre la de los demás, dejando inconscientes instantáneamente a los oponentes de mente débil.",
    color: "from-red-600 to-amber-950 border-red-500/40 text-red-300",
    icon: "👑",
    advancedForms: [
      {
        name: "Presión Física de Voluntad",
        description: "El Haki es tan denso que daña físicamente objetos circundantes (como agrietar barcos o el suelo) con solo caminar. Shanks demostró esto en el barco de Barbablanca."
      },
      {
        name: "Infusión de Conquistador (Haoshoku Haki Coating)",
        description: "La técnica definitiva de combate. El usuario imbuye sus ataques o armas directamente con Haki del Conquistador, provocando rayos negros de energía y permitiendo golpes devastadores sin necesidad de tocar al oponente física o espiritualmente. Utilizado por Roger, Barbablanca, Kaido, Luffy y Zoro."
      }
    ]
  }
];

export const MEITO_SWORDS: MeitoSword[] = [
  {
    id: "yoru",
    name: "Yoru (Noche)",
    japanese: "夜",
    grade: "Saijo O Wazamono",
    gradeLabel: "Suprema (12 Hojas Supresas)",
    owner: "Dracule Mihawk",
    previousOwners: [],
    status: "Activa",
    description: "Una de las 12 espadas más poderosas del mundo. Es una espada negra gigante (Kokuto) con forma de cruz latina, que Mihawk empuña con extrema elegancia. Es capaz de rebanar icebergs gigantescos y galeones enteros con una sola onda de choque.",
    icon: "✝️",
    bgGradient: "from-violet-900/60 to-slate-950"
  },
  {
    id: "murakumogiri",
    name: "Murakumogiri",
    japanese: "群雲切",
    grade: "Saijo O Wazamono",
    gradeLabel: "Suprema (12 Hojas Supresas)",
    owner: "Edward Newgate (Barbablanca)",
    previousOwners: [],
    status: "Activa",
    description: "Una naginata gigante y una de las 12 espadas de grado supremo. Acompañó a Barbablanca en todas sus batallas legendarias y resistió su poder de terremotos de la fruta Gura Gura. Actualmente yace junto a su tumba.",
    icon: "🔱",
    bgGradient: "from-amber-900/60 to-slate-950"
  },
  {
    id: "shodai-kitetsu",
    name: "Shodai Kitetsu",
    japanese: "初代鬼徹",
    grade: "Saijo O Wazamono",
    gradeLabel: "Suprema (12 Hojas Supresas)",
    owner: "Saint Ethanbaron V. Nusjuro (Gorosei)",
    previousOwners: ["Creador de Kitetsu"],
    status: "Activa",
    description: "La primera y más poderosa de las tres legendarias espadas malditas Kitetsu. Nusjuro (miembro del Gorosei) la empuña en su forma híbrida de caballo esqueleto. Posee una maldición de muerte sobre su portador y un filo excepcional capaz de congelar y cortar.",
    icon: "💀",
    bgGradient: "from-red-950/80 to-slate-950"
  },
  {
    id: "wado-ichimonji",
    name: "Wado Ichimonji",
    japanese: "和道一文字",
    grade: "O Wazamono",
    gradeLabel: "Excelente (21 Hojas de Gran Grado)",
    owner: "Roronoa Zoro",
    previousOwners: ["Kuina", "Koushirou", "Shimotsuki Kozaburo"],
    status: "Activa",
    description: "Creada por Shimotsuki Kozaburo. Una obra maestra blanca pura. Era la espada de Kuina, la amiga de la infancia de Zoro. Tras su muerte, Zoro la heredó y la lleva siempre en su boca en su estilo Santoryu. Es sumamente resistente.",
    icon: "⚔️",
    bgGradient: "from-slate-800/80 to-slate-950"
  },
  {
    id: "enma",
    name: "Enma",
    japanese: "閻魔",
    grade: "O Wazamono",
    gradeLabel: "Excelente (21 Hojas de Gran Grado)",
    owner: "Roronoa Zoro",
    previousOwners: ["Kozuki Oden", "Kozuki Hiyori"],
    status: "Activa",
    description: "La espada capaz de 'cortar hasta el fondo del infierno'. Tiene la propiedad única de drenar violentamente el Haki de armamento de su portador a menos que se controle estrictamente. Oden la usó para causarle la cicatriz permanente a Kaido. Zoro la domina imbuyendo Haki de Conquistador.",
    icon: "🔥",
    bgGradient: "from-purple-900/60 to-slate-950"
  },
  {
    id: "shusui",
    name: "Shusui (Agua de Otoño)",
    japanese: "秋水",
    grade: "O Wazamono",
    gradeLabel: "Excelente (21 Hojas de Gran Grado)",
    owner: "Reino de Wano (Tumba de Ryuma)",
    previousOwners: ["Ryuma", "Roronoa Zoro"],
    status: "Activa",
    description: "Una espada negra legendaria (Kokuto) que perteneció al Dios de la Espada, Ryuma, quien la convirtió en espada negra permanente tras incontables batallas imbuida en Haki. Zoro la usó durante varios arcos hasta que la devolvió a Wano en intercambio por Enma.",
    icon: "🌊",
    bgGradient: "from-teal-900/60 to-slate-950"
  },
  {
    id: "ame-no-habakiri",
    name: "Ame no Habakiri",
    japanese: "天羽々斬",
    grade: "O Wazamono",
    gradeLabel: "Excelente (21 Hojas de Gran Grado)",
    owner: "Kozuki Momonosuke",
    previousOwners: ["Kozuki Oden", "Kozuki Sukiyaki"],
    status: "Activa",
    description: "La espada de Oden que se dice que 'puede cortar los cielos'. Es la espada hermana de Enma y fue entregada a Momonosuke, quien actualmente la guarda en la capital de Wano.",
    icon: "🌤️",
    bgGradient: "from-cyan-900/60 to-slate-950"
  },
  {
    id: "nidai-kitetsu",
    name: "Nidai Kitetsu",
    japanese: "二代鬼徹",
    grade: "O Wazamono",
    gradeLabel: "Excelente (21 Hojas de Gran Grado)",
    owner: "Kozuki Sukiyaki",
    previousOwners: ["Creador de Kitetsu II"],
    status: "Activa",
    description: "La segunda espada maldita Kitetsu, forjada por Kotetsu. Luffy la robó brevemente al inicio del arco de Wano para 'parecer un samurái'. Es extremadamente peligrosa y Sukiyaki la resguarda en Wano.",
    icon: "🩸",
    bgGradient: "from-red-900/60 to-slate-950"
  },
  {
    id: "sandai-kitetsu",
    name: "Sandai Kitetsu",
    japanese: "三代鬼徹",
    grade: "Wazamono",
    gradeLabel: "Espada de Grado Ordinario",
    owner: "Roronoa Zoro",
    previousOwners: ["Ipponmatsu"],
    status: "Activa",
    description: "La tercera y más joven espada maldita Kitetsu. Zoro demostró su valor en Loguetown al lanzarla al aire sobre su propio brazo para ver si su suerte vencía la maldición de la espada. Tras ver su espíritu, el comerciante Ipponmatsu se la regaló gratis.",
    icon: "🌀",
    bgGradient: "from-emerald-950 to-slate-950"
  },
  {
    id: "gryphon",
    name: "Gryphon (Grifo)",
    japanese: "グリフォン",
    grade: "Grado Desconocido",
    gradeLabel: "Meito de Grado Oculto",
    owner: "Shanks",
    previousOwners: [],
    status: "Activa",
    description: "Un sable largo de combate empuñado por el Yonko Shanks. Su resistencia es titánica; pudo bloquear la naginata Murakumogiri de Barbablanca e interceptar el puño de magma del Almirante Akainu en Marineford sin sufrir daños.",
    icon: "🦅",
    bgGradient: "from-rose-950 to-slate-950"
  }
];

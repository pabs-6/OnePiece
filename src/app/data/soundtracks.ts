export interface Soundtrack {
  id: number;
  title: string;
  artist: string;
  episodes: string;
  type: 'opening' | 'ending';
  icon: string;
  arcName: string;
  youtubeUrl: string;
}

export const SOUNDTRACKS: Soundtrack[] = [
  {
    id: 1,
    title: "We Are!",
    artist: "Hiroshi Kitadani",
    episodes: "1–47",
    type: "opening",
    icon: "⛵",
    arcName: "East Blue",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+We+Are"
  },
  {
    id: 2,
    title: "Believe",
    artist: "Folder5",
    episodes: "48–115",
    type: "opening",
    icon: "✨",
    arcName: "East Blue / Alabasta",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Believe+Folder5"
  },
  {
    id: 3,
    title: "Hikari E (Hacia la Luz)",
    artist: "The Babystars",
    episodes: "116–168",
    type: "opening",
    icon: "☀️",
    arcName: "Alabasta / Skypiea",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Hikari+E+The+Babystars"
  },
  {
    id: 4,
    title: "Bon Voyage!",
    artist: "Bon-Bon Blanco",
    episodes: "169–206",
    type: "opening",
    icon: "🗺️",
    arcName: "Skypiea / Water Seven",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Bon+Voyage"
  },
  {
    id: 5,
    title: "Kokoro no Chizu (Mapa del Corazón)",
    artist: "BOYSTYLE",
    episodes: "207–263",
    type: "opening",
    icon: "🧭",
    arcName: "Water Seven (Water 7)",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Kokoro+no+Chizu"
  },
  {
    id: 6,
    title: "Brand New World",
    artist: "D-51",
    episodes: "264–278",
    type: "opening",
    icon: "🏃",
    arcName: "Enies Lobby",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Brand+New+World"
  },
  {
    id: 7,
    title: "We Are! (Straw Hat Version)",
    artist: "Mugiwara Pirates (Seiyuus)",
    episodes: "279–283",
    type: "opening",
    icon: "☠️",
    arcName: "Enies Lobby",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+We+Are+Straw+Hat+Version"
  },
  {
    id: 8,
    title: "Crazy Rainbow",
    artist: "Tackey & Tsubasa",
    episodes: "284–325",
    type: "opening",
    icon: "🌈",
    arcName: "Enies Lobby / Post-Enies Lobby",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Crazy+Rainbow"
  },
  {
    id: 9,
    title: "Jungle P",
    artist: "5050",
    episodes: "326–372",
    type: "opening",
    icon: "🦁",
    arcName: "Thriller Bark",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Jungle+P"
  },
  {
    id: 10,
    title: "Share the World",
    artist: "TVXQ (Tohoshinki)",
    episodes: "373–425",
    type: "opening",
    icon: "🌍",
    arcName: "Sabaody / Amazon Lily / Impel Down",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Share+the+World"
  },
  {
    id: 11,
    title: "One Day",
    artist: "The Rootless",
    episodes: "459–492",
    type: "opening",
    icon: "🔥",
    arcName: "Marineford",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+One+Day"
  },
  {
    id: 12,
    title: "Fight Together",
    artist: "Namie Amuro",
    episodes: "493–516",
    type: "opening",
    icon: "🦋",
    arcName: "Post-War / Post-Marineford",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Fight+Together"
  },
  {
    id: 13,
    title: "We Go!",
    artist: "Hiroshi Kitadani",
    episodes: "517–590",
    type: "opening",
    icon: "👊",
    arcName: "Isla Gyojin / Punk Hazard (Timeskip)",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+We+Go"
  },
  {
    id: 14,
    title: "Over The Top",
    artist: "Hiroshi Kitadani",
    episodes: "892–934",
    type: "opening",
    icon: "🗡️",
    arcName: "Wano Kuni",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Over+The+Top"
  },
  {
    id: 15,
    title: "PAINT",
    artist: "I Don't Like Mondays.",
    episodes: "1005–1088",
    type: "opening",
    icon: "🎨",
    arcName: "Wano Kuni / Raid on Onigashima",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+PAINT+I+Dont+Like+Mondays"
  },
  {
    id: 16,
    title: "UUUUUS!",
    artist: "Hiroshi Kitadani",
    episodes: "1089+",
    type: "opening",
    icon: "🤖",
    arcName: "Egghead",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+UUUUUS+Hiroshi+Kitadani"
  },
  {
    id: 17,
    title: "Memories (Recuerdos)",
    artist: "Maki Otsuki",
    episodes: "1–30",
    type: "ending",
    icon: "💭",
    arcName: "East Blue",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Memories+Maki+Otsuki"
  },
  {
    id: 18,
    title: "Run! Run! Run!",
    artist: "Maki Otsuki",
    episodes: "31–63",
    type: "ending",
    icon: "🏃‍♀️",
    arcName: "East Blue / Reverse Mountain",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Run+Run+Run+Maki+Otsuki"
  },
  {
    id: 19,
    title: "Shining ray",
    artist: "Janne Da Arc",
    episodes: "116–132",
    type: "ending",
    icon: "💫",
    arcName: "Alabasta / Isla de Drum",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Shining+Ray+Janne+Da+Arc"
  },
  {
    id: 20,
    title: "Raise",
    artist: "Chilli Beans.",
    episodes: "1072–1088",
    type: "ending",
    icon: "🎸",
    arcName: "Wano Kuni / Clímax (Timeskip)",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Raise+Chilli+Beans"
  },
  {
    id: 21,
    title: "Dear Sunrise",
    artist: "BE:FIRST",
    episodes: "1089+",
    type: "ending",
    icon: "🌅",
    arcName: "Egghead",
    youtubeUrl: "https://www.youtube.com/results?search_query=One+Piece+Dear+Sunrise"
  }
];

const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/app/data/wiki-aliases.ts');
const src = fs.readFileSync(file, 'utf8');
const match = src.match(/=\s(\{[\s\S]*\});/);
const aliases = eval('(' + match[1] + ')');

const REMOVE = ['and', 'bulter', 'canne', 'longs-cils', 'don quijote doflamingo', 'smack', 'hittori', 'hoé', 'kaiser moustache', 'rock', 'om'];
for (const k of REMOVE) delete aliases[k];

const MANUAL = {
  'pingouin': 'Penguin', 'caborage': 'Cabaji', 'chavipère': 'Chap',
  'mononosuké kozuki': 'Kouzuki Momonosuke', 'charlotte mélisée': 'Charlotte Melise',
  'delœuf': 'Tamago', 'octy': 'Octopako', 'gemme': 'Gem', 'mégalo': 'Megalo',
  '2e doyen': 'Jaygarcia Saturn', '3e doyen': 'Topman Warcury',
  '4e doyen': 'Ethanbaron V. Nusjuro', '5e doyen': 'Shepherd Ju Peter',
  'rabitman': 'Rabbitman', 'nuré-onna': 'Nure-Onna', 'yazaémon': 'Yazaemon', 'bankro': 'Bankuro',
  'minozèbre': 'Minorhinoceros', 'minochihuabua': 'Minokoala', 'gaimone': 'Gaimon',
  'yokozuma': 'Yokozuna', 'yatappé': 'Yatappe', 'baboumaru': 'Baburu', 'plouf': 'Den',
  'sarehebi': 'Salamander', 'mawaritovsky mizuta': 'Mizuta Mawaritosuki',
  'minorhinocéros': 'Minorhinoceros', 'kentarôs': 'Kentauros',
  'ministre sénestre': 'Shepherd Ju Peter', 'ministre dextre': 'Ethanbaron V. Nusjuro',
  'el gorago': 'Figarland Garling', 'sicilion': 'Shishilian',
  'sally entoilette': 'Sarie Nantokanette', 'jacsonbaner': 'Jacksonbanner',
  'tohomé': 'Tokikake', 'wakkem': 'Walker', 'héraclès': 'Heracles',
  'barbos bruneriguez / barbe brune': 'Brownbeard', 'barbe brune': 'Brownbeard',
  'bee anne': 'Beegirl', 'baggy': 'Buggy', 'baggy / le clown': 'Buggy',
  'ener': 'Enel', 'monkey d luffy': 'Monkey D. Luffy',
  'im sama': 'Imu', 'imu neronna': 'Nerona Imu',
};
Object.assign(aliases, MANUAL);

const sorted = Object.fromEntries(Object.entries(aliases).sort(([a], [b]) => a.localeCompare(b)));
const count = Object.keys(sorted).length;
const out = `/** API character name → Fandom wiki page title (${count} aliases). */\nexport const WIKI_ALIASES: Record<string, string> = ${JSON.stringify(sorted, null, 2)};\n`;
fs.writeFileSync(file, out);
console.log('Total aliases:', count);

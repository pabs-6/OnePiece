/**
 * Finds validated API → Fandom wiki title aliases.
 * Run: node scripts/find-wiki-mismatches.cjs
 */
const fs = require('fs');
const path = require('path');
const API = 'https://api.api-onepiece.com/v2/characters/en';
const WIKI = 'https://onepiece.fandom.com/api.php';
const OUT = path.join(__dirname, '../src/app/data/wiki-aliases.ts');
const BATCH = 50;
const DELAY = 350;

const BLOCKED_TITLES = new Set([
  'One Piece in France', 'One Piece in Portugal', 'One Piece Wiki',
  'Tightrope Walking Funan Bros', 'Yeti Cool Brothers', 'Five Elders',
  'Yakuza Kasen', 'Sekai wa Hitori ja Nakatta', 'Yujo wa Ban\'noyaku',
  'Uta no Uta: ONE PIECE FILM RED', 'Episode 39', 'Kuri Kuri no Mi',
  'Goro Goro no Mi', 'One Piece'
]);

const BLOCKED_PATTERNS = [
  /no Mi/i, /Episode \d+/i, /FILM/i, /One Piece in /i, /Wiki$/i,
  /^Z$/, /Devil Fruit/i, /SBS/i
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

function getWikiPageTitle(name) {
  return name.split('/')[0].trim().replace(/\b([A-Z])\b(?=\s+[A-Z])/g, '$1.');
}

function normalizeKey(name) {
  return name.split('/')[0].trim().toLowerCase();
}

function isValidTitle(title, searchName) {
  if (!title || title.includes('/')) return false;
  if (BLOCKED_TITLES.has(title)) return false;
  if (BLOCKED_PATTERNS.some(p => p.test(title))) return false;
  if (title.length <= 2) return false;
  return true;
}

async function batchPageImages(titles) {
  const params = new URLSearchParams({
    action: 'query', titles: titles.join('|'), prop: 'pageimages',
    format: 'json', pithumbsize: '600', origin: '*'
  });
  const data = await fetch(`${WIKI}?${params}`).then(r => r.json());
  const map = new Map();
  for (const page of Object.values(data.query?.pages || {})) {
    map.set(page.title, page.missing === undefined && page.thumbnail?.source ? page.thumbnail.source : null);
  }
  return map;
}

async function openSearchValidTitle(name) {
  const search = name.split('/')[0].trim();
  const params = new URLSearchParams({
    action: 'opensearch', search, limit: '8', format: 'json', origin: '*'
  });
  const data = await fetch(`${WIKI}?${params}`).then(r => r.json());
  const titles = data[1] || [];

  for (const title of titles) {
    if (!isValidTitle(title, search)) continue;
    const params2 = new URLSearchParams({
      action: 'query', titles: title, prop: 'pageimages',
      format: 'json', pithumbsize: '600', origin: '*'
    });
    const data2 = await fetch(`${WIKI}?${params2}`).then(r => r.json());
    const page = Object.values(data2.query?.pages || {})[0];
    if (page?.thumbnail?.source) return title;
    await sleep(100);
  }
  return null;
}

(async () => {
  console.error('Fetching API...');
  const chars = await fetch(API).then(r => r.json());
  const aliases = {};
  const fixed = [];
  const stillMissing = [];

  let directOk = 0;

  for (let i = 0; i < chars.length; i += BATCH) {
    const batch = chars.slice(i, i + BATCH);
    const titles = batch.map(c => getWikiPageTitle(c.name));
    console.error(`Batch ${Math.floor(i / BATCH) + 1}/${Math.ceil(chars.length / BATCH)}`);
    const results = await batchPageImages(titles);

    for (const c of batch) {
      const title = getWikiPageTitle(c.name);
      const key = normalizeKey(c.name);

      if (results.get(title)) {
        directOk++;
        continue;
      }

      const wikiTitle = await openSearchValidTitle(c.name);
      await sleep(120);

      if (!wikiTitle) {
        stillMissing.push({ id: c.id, name: c.name });
        continue;
      }

      const wikiNorm = normalizeKey(wikiTitle);
      if (wikiNorm !== key && wikiNorm !== normalizeKey(title)) {
        aliases[key] = wikiTitle;
        fixed.push({ apiName: c.name, wikiTitle });
      }
    }
    await sleep(DELAY);
  }

  // Manual overrides for known bad opensearch results
  Object.assign(aliases, {
    'baggy': 'Buggy',
    'baggy / le clown': 'Buggy',
    'monkey d luffy': 'Monkey D. Luffy',
    'bee anne': 'Beegirl',
    'ener': 'Enel',
    'im sama': 'Imu',
    'imu neronna': 'Imu',
  });

  const sorted = Object.fromEntries(Object.entries(aliases).sort(([a], [b]) => a.localeCompare(b)));

  const tsContent = `/** Auto-generated wiki title aliases (API name → Fandom page title). */\nexport const WIKI_ALIASES: Record<string, string> = ${JSON.stringify(sorted, null, 2)};\n`;
  fs.writeFileSync(OUT, tsContent);

  console.error(`\nDirect OK: ${directOk}/${chars.length}`);
  console.error(`Aliases written: ${Object.keys(sorted).length} → ${OUT}`);
  console.error(`Still missing: ${stillMissing.length}`);
  if (stillMissing.length) console.error(stillMissing.map(x => x.name).join(', '));
})().catch(e => { console.error(e); process.exit(1); });

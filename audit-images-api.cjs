const fs = require('fs');
const path = require('path');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const API = 'https://onepiece.fandom.com/api.php';
const BATCH_SIZE = 50;

function extractEntries(file, label) {
  const src = fs.readFileSync(path.join(__dirname, file), 'utf8');
  const nameRe = /name:\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
  const imgRe = /(?:img|jolly_roger):\s*w\((?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")\)/g;
  const entries = [];
  let m;
  while ((m = imgRe.exec(src))) {
    const rawFilename = m[1] !== undefined ? m[1] : m[2];
    // Some entries (characters/fruits) store the filename already percent-encoded
    // (e.g. Kin%27emon) because their `w()` helper doesn't escape it itself;
    // factions' `w()` does its own escaping, so its filenames are plain literals.
    // decodeURIComponent is a no-op on strings with no %XX sequences, so this is safe for both.
    const filename = decodeURIComponent(rawFilename.replace(/\\'/g, "'"));
    const context = src.slice(Math.max(0, m.index - 300), m.index);
    const all = [...context.matchAll(nameRe)];
    const nm = all.pop();
    const name = nm ? (nm[1] !== undefined ? nm[1] : nm[2]).replace(/\\'/g, "'") : '(unknown)';
    entries.push({ label, name, filename });
  }
  return entries;
}

function normalizeTitle(filename) {
  // Mirrors MediaWiki's own title normalization: underscores -> spaces.
  return 'File:' + filename.replace(/_/g, ' ');
}

async function queryBatch(entries, attempt = 1) {
  const titles = entries.map(e => 'File:' + e.filename).join('|');
  const params = new URLSearchParams({
    action: 'query',
    titles,
    prop: 'imageinfo',
    iiprop: 'url',
    format: 'json'
  });
  try {
    const res = await fetch(`${API}?${params.toString()}`, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (e) {
    if (attempt < 3) {
      await new Promise(r => setTimeout(r, 2000));
      return queryBatch(entries, attempt + 1);
    }
    throw e;
  }
}

(async () => {
  const entries = [
    ...extractEntries('src/app/data/characters.ts', 'character'),
    ...extractEntries('src/app/data/factions.ts', 'faction'),
    ...extractEntries('src/app/data/devil-fruits.ts', 'fruit'),
  ];
  console.error('Total image entries:', entries.length);

  const byNormalizedTitle = new Map();
  for (const e of entries) {
    const key = normalizeTitle(e.filename);
    if (!byNormalizedTitle.has(key)) byNormalizedTitle.set(key, []);
    byNormalizedTitle.get(key).push(e);
  }

  const results = [];
  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    console.error(`Querying batch ${i / BATCH_SIZE + 1} (${batch.length} titles)...`);
    const data = await queryBatch(batch);
    const pages = data.query?.pages || {};
    for (const page of Object.values(pages)) {
      const matches = byNormalizedTitle.get(page.title) || [];
      for (const entry of matches) {
        if (page.missing !== undefined) {
          results.push({ ...entry, exists: false, url: null });
        } else {
          const url = page.imageinfo?.[0]?.url || null;
          results.push({ ...entry, exists: true, url });
        }
      }
    }
    await new Promise(r => setTimeout(r, 1000));
  }

  // Anything we sent but got no page back for at all (shouldn't happen, but be defensive)
  const accountedFor = new Set(results.map(r => normalizeTitle(r.filename) + '|' + r.name));
  for (const e of entries) {
    const key = normalizeTitle(e.filename) + '|' + e.name;
    if (!accountedFor.has(key)) results.push({ ...e, exists: null, url: null, note: 'no API response' });
  }

  fs.writeFileSync(path.join(__dirname, '_image_audit.json'), JSON.stringify(results, null, 2));
  console.error('Done. Wrote _image_audit.json with', results.length, 'entries.');
})().catch(e => {
  console.error('FATAL:', e.message);
  process.exit(1);
});

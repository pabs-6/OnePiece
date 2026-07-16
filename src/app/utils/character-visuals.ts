const PLACEHOLDER_BG_BY_COLOR: Record<string, string> = {
  'from-red': 'C0392B', 'from-green': '27AE60', 'from-blue': '2980B9',
  'from-yellow': 'F39C12', 'from-purple': '8E44AD', 'from-orange': 'E67E22',
  'from-pink': 'E91E63', 'from-teal': '00BCD4', 'from-indigo': '3F51B5',
  'from-gray': '607D8B', 'from-amber': 'FF8F00', 'from-cyan': '00ACC1',
  'from-violet': '7C3AED', 'from-fuchsia': 'D81B60', 'from-rose': 'E53935',
  'from-emerald': '2E7D32', 'from-lime': '827717', 'from-sky': '0288D1',
};

function getPlaceholderImage(name: string, color: string): string {
  let bg = '1a1a2e';
  for (const [key, val] of Object.entries(PLACEHOLDER_BG_BY_COLOR)) {
    if (color.includes(key)) { bg = val; break; }
  }
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#${bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="600" fill="url(#grad)" />
      <path d="M200 150 L200 400 M150 250 L250 250 M150 380 Q200 430 250 380" stroke="#f59e0b" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.15" />
      <circle cx="200" cy="130" r="15" stroke="#f59e0b" stroke-width="8" fill="none" opacity="0.15" />
      <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="'Cinzel', serif" font-size="72" font-weight="bold" fill="#f59e0b" letter-spacing="2">${initials}</text>
      <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="'Inter', sans-serif" font-size="22" font-weight="600" fill="#e2e8f0">${name}</text>
      <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="12" fill="#64748b" letter-spacing="1">WANTED DEAD OR ALIVE</text>
    </svg>
  `.trim().replace(/\n/g, '').replace(/"/g, "'");

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// If the wiki URL fails, immediately show the SVG placeholder so no character is ever imageless.
export function nextCharacterImageFallback(currentSrc: string, character: { name: string; color: string }): string | null {
  // data: URIs (our SVG placeholders) should never fail
  if (currentSrc.startsWith('data:')) return null;
  // Any failed external URL → show SVG placeholder immediately
  return getPlaceholderImage(character.name, character.color);
}

export function getPowerColor(n: number): string {
  if (n >= 95) return 'bg-gradient-to-r from-red-600 to-orange-500';
  if (n >= 85) return 'bg-gradient-to-r from-orange-500 to-yellow-500';
  if (n >= 75) return 'bg-gradient-to-r from-yellow-500 to-green-500';
  return 'bg-gradient-to-r from-blue-500 to-cyan-500';
}

export function getPowerTextColor(n: number): string {
  if (n >= 95) return 'text-red-500';
  if (n >= 85) return 'text-orange-400';
  if (n >= 75) return 'text-yellow-400';
  return 'text-blue-400';
}

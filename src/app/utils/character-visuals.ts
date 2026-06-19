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
  return `https://via.placeholder.com/400x600/${bg}/F39C12?text=${encodeURIComponent(name.split(' ')[0])}`;
}

// Tries the wikia CDN mirror first, then a generated placeholder. Returns null once both fallbacks are exhausted.
export function nextCharacterImageFallback(currentSrc: string, character: { name: string; color: string }): string | null {
  if (currentSrc.includes('onepiece.fandom.com')) {
    const filename = currentSrc.split('/').pop() || '';
    return `https://static.wikia.nocookie.net/onepiece/images/thumb/${filename}/revision/latest/scale-to-width-down/300`;
  }
  if (currentSrc.includes('static.wikia.nocookie.net')) {
    return getPlaceholderImage(character.name, character.color);
  }
  return null;
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

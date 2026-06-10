import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'op-emoji',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="op-emoji-container inline-flex items-center justify-center align-middle" [ngClass]="className">
      <ng-container [ngSwitch]="normalize(symbol)">
        <!-- ☠️ Jolly Roger / Skull and Crossbones -->
        <svg *ngSwitchCase="'☠️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.2em] h-[1.2em] text-yellow-500 drop-shadow-[0_0_8px_rgba(243,156,18,0.6)] animate-pulse">
          <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3.5 2 4.5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1c1-1 2-2.5 2-4.5a5 5 0 0 0-5-5z" fill="currentColor"/>
          <circle cx="9.5" cy="7.5" r="1" fill="#000"/>
          <circle cx="14.5" cy="7.5" r="1" fill="#000"/>
          <path d="M10.5 10.5h3" stroke="#000" stroke-width="1.5"/>
          <path d="M4 4l4 4M20 4l-4 4M4 20l4-4M20 20l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>

        <!-- 🏴‍☠️ Pirate Flag -->
        <svg *ngSwitchCase="'🏴‍☠️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.2em] h-[1.2em] text-red-500 drop-shadow-[0_0_8px_rgba(192,57,43,0.5)]">
          <path d="M4 22V4c0-.5.5-1 1-1h14c1 0 1.5.8 1 1.5L17 9.5l3 5c.5.7 0 1.5-1 1.5H5" fill="currentColor"/>
          <circle cx="10" cy="9.5" r="1.5" fill="#fff"/>
          <path d="M7 11.5l6-4m-6 0l6 4" stroke="#fff" stroke-width="1"/>
        </svg>

        <!-- ⚓ Anchor -->
        <svg *ngSwitchCase="'⚓'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-500 hover:rotate-12 transition-transform duration-300">
          <circle cx="12" cy="5" r="2" fill="none"/>
          <path d="M12 7v11M12 18H8m4 0h4" stroke-linecap="round"/>
          <path d="M5 12a7 7 0 0 0 14 0" stroke-linecap="round"/>
          <path d="M5 12l-2 1M19 12l2 1" stroke-linecap="round"/>
          <path d="M9 9h6" stroke-linecap="round"/>
        </svg>

        <!-- 🏠 Home Ship -->
        <svg *ngSwitchCase="'🏠'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-400">
          <path d="M2 14h20c-1-4-5-6-10-6S3 10 2 14z" fill="currentColor"/>
          <path d="M12 8V2m0 0l-3 2m3-2l3 2" stroke-linecap="round"/>
          <path d="M6 14v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" stroke-linecap="round"/>
          <circle cx="12" cy="14" r="1" fill="#000"/>
        </svg>

        <!-- 👤 Pirate Silhouette (Wanted Profile) -->
        <svg *ngSwitchCase="'👤'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-500">
          <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="none"/>
          <path d="M12 14c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z" fill="currentColor"/>
          <!-- Straw Hat overlay -->
          <path d="M7 6.5c2-2 8-2 10 0l2 1.5H5L7 6.5z" fill="currentColor" stroke="currentColor" stroke-width="1"/>
        </svg>

        <!-- 🍎 Devil Fruit -->
        <svg *ngSwitchCase="'🍎'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
          <path d="M12 6c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z" fill="currentColor"/>
          <!-- Swirl patterns on the fruit -->
          <path d="M9 10a1.5 1.5 0 0 1 2 0M13 12a1.5 1.5 0 0 0 2 0M10 13a1 1 0 0 1 1 1" stroke="#000" stroke-width="1" stroke-linecap="round"/>
          <!-- Stem curly leaf -->
          <path d="M12 6c0-2-1-3.5-3-3m3 3c1-1 2-1 2-2" stroke="currentColor" stroke-linecap="round"/>
        </svg>

        <!-- 🔮 Mystical Theory Orb -->
        <svg *ngSwitchCase="'🔮'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-purple-300 drop-shadow-[0_0_8px_rgba(192,132,252,0.6)] animate-pulse">
          <circle cx="12" cy="11" r="7" fill="currentColor"/>
          <path d="M5 18h14M8 21h8" stroke-linecap="round"/>
          <circle cx="10" cy="9" r="1.5" fill="#fff" opacity="0.7"/>
          <path d="M9 13a3 3 0 0 1 5-2" stroke="#fff" stroke-width="1" opacity="0.5" stroke-linecap="round"/>
        </svg>

        <!-- 🔥 Fire Flame -->
        <svg *ngSwitchCase="'🔥'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] animate-bounce">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <!-- ⚡ Lightning Bolt -->
        <svg *ngSwitchCase="'⚡'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <!-- 🌊 Great Wave -->
        <svg *ngSwitchCase="'🌊'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
          <path d="M2 12c4-4 6-4 10 0s6 4 10 0" stroke-linecap="round"/>
          <path d="M2 17c4-4 6-4 10 0s6 4 10 0" stroke-linecap="round"/>
          <path d="M2 7c4-3 6-3 10 0s6 3 10 0" stroke-linecap="round"/>
        </svg>

        <!-- 👑 Crown -->
        <svg *ngSwitchCase="'👑'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="currentColor"/>
          <path d="M3 20h18" stroke-linecap="round"/>
          <circle cx="2" cy="3" r="1" fill="currentColor"/>
          <circle cx="8" cy="3" r="1" fill="currentColor"/>
          <circle cx="12" cy="3" r="1" fill="currentColor"/>
          <circle cx="16" cy="3" r="1" fill="currentColor"/>
          <circle cx="22" cy="3" r="1" fill="currentColor"/>
        </svg>

        <!-- ✊ Haki Fist -->
        <svg *ngSwitchCase="'✊'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]">
          <path d="M12 6V3m0 3a3 3 0 0 1-3 3H8M12 6a3 3 0 0 0 3 3h1" stroke-linecap="round"/>
          <path d="M6 12a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6z" fill="currentColor"/>
          <path d="M9 12h6M9 15h6M9 18h6" stroke="#000" stroke-width="1.5"/>
        </svg>

        <!-- 🐾 Paw Print -->
        <svg *ngSwitchCase="'🐾'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-pink-400">
          <circle cx="12" cy="14" r="4" fill="currentColor"/>
          <circle cx="6" cy="8" r="2.5" fill="currentColor"/>
          <circle cx="10" cy="5" r="2" fill="currentColor"/>
          <circle cx="14" cy="5" r="2" fill="currentColor"/>
          <circle cx="18" cy="8" r="2.5" fill="currentColor"/>
        </svg>

        <!-- ★ Star -->
        <svg *ngSwitchCase="'★'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>
        </svg>

        <!-- ☀️ Sun / Nika -->
        <svg *ngSwitchCase="'☀️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.2em] h-[1.2em] text-yellow-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]">
          <circle cx="12" cy="12" r="5" fill="currentColor"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke-linecap="round"/>
        </svg>

        <!-- ⛰️ Mountain / Red Line -->
        <svg *ngSwitchCase="'⛰️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-red-800">
          <path d="M4 20l7-14 3 6 6-8 4 16H4z" fill="currentColor"/>
        </svg>

        <!-- 🌵 Cactus / Alabasta -->
        <svg *ngSwitchCase="'🌵'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-green-500">
          <path d="M12 3v18M12 8c-2 0-3 1-3 3v2M9 13H7M12 10c2 0 3 1 3 3v3M15 16h2" stroke-linecap="round"/>
        </svg>

        <!-- ☁️ Cloud / Skypiea -->
        <svg *ngSwitchCase="'☁️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-sky-200">
          <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.82.04-1.22.12A6 6 0 0 0 3.5 13c0 3.3 2.7 6 6 6h8z" fill="currentColor"/>
        </svg>

        <!-- 🚂 Train / Sea Train -->
        <svg *ngSwitchCase="'🚂'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-blue-500">
          <rect x="4" y="8" width="16" height="8" rx="2" fill="currentColor"/>
          <path d="M2 12h2M20 12h2M8 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="#000"/>
          <path d="M16 8V5l-2-1" stroke-linecap="round"/>
        </svg>

        <!-- ⚔️ Crossed Swords -->
        <svg *ngSwitchCase="'⚔️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-gray-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
          <path d="M14.5 17.5L3 6M9.5 6.5l11.5 11.5" stroke-linecap="round"/>
          <path d="M19 19l2 2M5 5l-2-2" stroke-linecap="round" stroke-width="3"/>
          <path d="M15 5l4 4M5 15l4 4" stroke-linecap="round"/>
        </svg>

        <!-- 🌋 Volcano -->
        <svg *ngSwitchCase="'🌋'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-red-700">
          <path d="M2 20h20L16 8H8L2 20z" fill="currentColor"/>
          <path d="M12 5v3m-3-1l2 2m4-2l-2 2" stroke="red" stroke-width="2" stroke-linecap="round"/>
        </svg>

        <!-- 🏯 Castle / Wano -->
        <svg *ngSwitchCase="'🏯'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-red-500">
          <path d="M4 20h16v-4H4v4zm2-4l1-6h10l1 6H6zm3-6V6l3-2 3 2v4H9z" fill="currentColor"/>
          <path d="M2 20h20" stroke-linecap="round"/>
        </svg>

        <!-- 🤖 Robot / Egghead -->
        <svg *ngSwitchCase="'🤖'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-indigo-400">
          <rect x="5" y="8" width="14" height="10" rx="2" fill="currentColor"/>
          <circle cx="8.5" cy="12.5" r="1.5" fill="#000"/>
          <circle cx="15.5" cy="12.5" r="1.5" fill="#000"/>
          <path d="M9 16h6M12 8V5m0 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" stroke-linecap="round"/>
        </svg>

        <!-- 🪓 Axe / Elbaf -->
        <svg *ngSwitchCase="'🪓'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-amber-700">
          <path d="M14.5 12.5l-9 9" stroke-linecap="round"/>
          <path d="M14.5 12.5a4 4 0 0 0 5-5l-4-4a4 4 0 0 0-5 5l4 4z" fill="currentColor"/>
        </svg>

        <!-- 🗺️ Map -->
        <svg *ngSwitchCase="'🗺️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-600">
          <rect x="3" y="6" width="18" height="12" rx="1" fill="currentColor"/>
          <path d="M9 6v12M15 6v12M3 10h18M3 14h18" stroke="#000" stroke-width="1" opacity="0.4"/>
          <circle cx="12" cy="12" r="1.5" fill="red" stroke="currentColor" stroke-width="1"/>
        </svg>

        <!-- 📚 Books -->
        <svg *ngSwitchCase="'📚'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-500">
          <path d="M4 19a2 2 0 0 1 2-2h14v3H6a2 2 0 0 1-2-2zM4 6a2 2 0 0 1 2-2h14v3H6a2 2 0 0 1-2-2z" fill="currentColor"/>
          <path d="M6 6v11" stroke-linecap="round"/>
        </svg>

        <!-- 🎬 Clapperboard -->
        <svg *ngSwitchCase="'🎬'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-blue-500">
          <rect x="3" y="8" width="18" height="11" rx="2" fill="currentColor"/>
          <path d="M3 8l3-3m4 3l3-3m4 3l3-3M3 8h18" stroke-linecap="round"/>
        </svg>

        <!-- 🎨 Palette -->
        <svg *ngSwitchCase="'🎨'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-red-400">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="currentColor"/>
          <circle cx="7.5" cy="10.5" r="1" fill="yellow"/>
          <circle cx="11.5" cy="7.5" r="1" fill="blue"/>
          <circle cx="16.5" cy="10.5" r="1" fill="green"/>
          <circle cx="14.5" cy="15.5" r="1.5" fill="red"/>
        </svg>

        <!-- 🌪️ Tornado / Dragon -->
        <svg *ngSwitchCase="'🌪️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-teal-400">
          <path d="M12 21a1 1 0 1 0 0-2M10 17h4M7 13h10M4 9h16M2 5h20" stroke-linecap="round"/>
        </svg>

        <!-- 📜 Scroll -->
        <svg *ngSwitchCase="'📜'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-600">
          <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="currentColor"/>
          <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
        </svg>

        <!-- ⚖️ Scale of Justice -->
        <svg *ngSwitchCase="'⚖️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-blue-400">
          <path d="M12 3v17M12 5H5m7 0h7M5 5v8a3 3 0 0 0 6 0V5M13 5v8a3 3 0 0 0 6 0V5" stroke-linecap="round"/>
        </svg>

        <!-- 👹 Oni Mask -->
        <svg *ngSwitchCase="'👹'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.2em] h-[1.2em] text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
          <path d="M12 2c-5.5 0-9 4-9 9v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4c0-5-3.5-9-9-9z" fill="currentColor"/>
          <path d="M6 5l-2-3m14 3l2-3M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#000"/>
          <path d="M10 14h4M9 16l3 1 3-1" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
        </svg>

        <!-- 👂 Hearing (Voice) -->
        <svg *ngSwitchCase="'👂'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-400">
          <path d="M12 2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8V2zm0 4a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6zm0 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2z" fill="currentColor"/>
        </svg>

        <!-- 🌙 Crescent Moon -->
        <svg *ngSwitchCase="'🌙'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-blue-300 drop-shadow-[0_0_5px_rgba(147,197,253,0.5)]">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" stroke-linejoin="round"/>
        </svg>

        <!-- 🎪 Circus (Buggy) -->
        <svg *ngSwitchCase="'🎪'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-red-500">
          <path d="M12 2L2 10h20L12 2z" fill="currentColor"/>
          <rect x="4" y="10" width="16" height="11" rx="1" fill="#fff" stroke="currentColor" stroke-width="2"/>
          <path d="M8 21a4 4 0 0 1 8 0" stroke="currentColor" stroke-width="2" fill="currentColor"/>
        </svg>

        <!-- ✊ Fist (✊ or ✊️) -->
        <svg *ngSwitchCase="'✊️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]">
          <path d="M12 6V3m0 3a3 3 0 0 1-3 3H8M12 6a3 3 0 0 0 3 3h1" stroke-linecap="round"/>
          <path d="M6 12a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6z" fill="currentColor"/>
          <path d="M9 12h6M9 15h6M9 18h6" stroke="#000" stroke-width="1.5"/>
        </svg>

        <!-- 🔔 Shandora Bell -->
        <svg *ngSwitchCase="'🔔'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-400">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z" fill="currentColor"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke-linecap="round"/>
        </svg>

        <!-- 🩸 Blood Drop -->
        <svg *ngSwitchCase="'🩸'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-red-600 animate-pulse">
          <path d="M12 2s-8 6.5-8 11.5a8 8 0 0 0 16 0C20 8.5 12 2 12 2z" fill="currentColor"/>
        </svg>

        <!-- 🏜️ Desert -->
        <svg *ngSwitchCase="'🏜️'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-600">
          <path d="M2 20h20C17 12 13 14 8 16c-3 1-5-1-6 4z" fill="currentColor"/>
          <circle cx="18" cy="6" r="3" fill="orange"/>
        </svg>

        <!-- 👑 Crown (alternate crown representation) -->
        <svg *ngSwitchCase="'👑'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="currentColor"/>
          <path d="M3 20h18" stroke-linecap="round"/>
          <circle cx="2" cy="3" r="1" fill="currentColor"/>
          <circle cx="8" cy="3" r="1" fill="currentColor"/>
          <circle cx="12" cy="3" r="1" fill="currentColor"/>
          <circle cx="16" cy="3" r="1" fill="currentColor"/>
          <circle cx="22" cy="3" r="1" fill="currentColor"/>
        </svg>

        <!-- 🌍 World Globe -->
        <svg *ngSwitchCase="'🌍'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-blue-400">
          <circle cx="12" cy="12" r="10" fill="none"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke-linecap="round"/>
        </svg>

        <!-- 🫀 Heart -->
        <svg *ngSwitchCase="'🫀'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
        </svg>

        <!-- 🎭 Mask / Sogeking -->
        <svg *ngSwitchCase="'🎭'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-yellow-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" fill="currentColor"/>
          <circle cx="8" cy="11" r="2" fill="#000"/>
          <circle cx="16" cy="11" r="2" fill="#000"/>
          <path d="M12 14v4" stroke="#000" stroke-width="2" stroke-linecap="round"/>
          <path d="M6 6c1-1 11-1 12 0" fill="#000" opacity="0.3"/>
        </svg>

        <!-- 🦴 Bone -->
        <svg *ngSwitchCase="'🦴'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-[1.1em] h-[1.1em] text-gray-300">
          <rect x="5" y="11" width="14" height="2" rx="1" fill="currentColor" transform="rotate(-45 12 12)"/>
          <circle cx="6" cy="17" r="1.5" fill="currentColor"/>
          <circle cx="7" cy="18" r="1.5" fill="currentColor"/>
          <circle cx="17" cy="6" r="1.5" fill="currentColor"/>
          <circle cx="18" cy="7" r="1.5" fill="currentColor"/>
        </svg>

        <!-- Default Pirate Coin Fallback for any other emoji -->
        <span *ngSwitchDefault class="op-coin inline-block px-1.5 py-0.5 rounded-full border border-yellow-500/40 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 text-xs font-mono font-bold select-none text-yellow-400 shadow-[0_0_8px_rgba(243,156,18,0.3)] transform hover:scale-110 transition-transform duration-300">
          {{ symbol }}
        </span>
      </ng-container>
    </span>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
    }
    .op-emoji-container {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.25em;
      height: 1.25em;
    }
    svg {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
    .op-coin {
      box-shadow: inset 0 0 4px rgba(243, 156, 18, 0.4), 0 2px 4px rgba(0,0,0,0.5);
      text-shadow: 0 0 4px rgba(243, 156, 18, 0.5);
    }
  `]
})
export class OpEmojiComponent {
  @Input() symbol: string = '';
  @Input('class') className: string = '';

  normalize(sym: string): string {
    if (!sym) return '';
    // Strip variation selectors or standard modifier characters for cleaner matching
    return sym.trim();
  }
}

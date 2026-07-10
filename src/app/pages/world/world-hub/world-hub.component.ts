import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OpEmojiComponent } from '../../../components/op-emoji/op-emoji.component';

interface WorldSection {
  title: string;
  description: string;
  icon: string;
  color: string;
  path?: string;
}

@Component({
  selector: 'app-world-hub',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-20 reveal">
          <p class="text-teal-400 font-mono text-sm tracking-widest mb-2"><op-emoji symbol="🌍"></op-emoji> EL UNIVERSO DE ONE PIECE</p>
          <h2 class="font-pirate text-5xl md:text-7xl text-white mb-6 section-title">
            Explora el <span class="gradient-text">Mundo</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Islas, sagas, cronología, cine y música: todo lo que da forma al universo de One Piece más allá de sus personajes.
          </p>
        </div>

        <!-- Sections grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a *ngFor="let s of sections; let i = index"
             [routerLink]="s.path || null"
             class="reveal-scale card-hover relative rounded-2xl p-8 border overflow-hidden group"
             [ngClass]="s.path ? 'border-white/10 bg-gradient-to-br from-gray-900 to-slate-950 cursor-pointer' : 'border-white/5 bg-gray-900/40 cursor-default opacity-60'"
             [style.transitionDelay]="(i * 0.06) + 's'">

            <div *ngIf="!s.path" class="absolute top-4 right-4 text-[10px] font-mono px-2 py-1 rounded-full bg-black/50 border border-gray-700 text-gray-400">
              PRÓXIMAMENTE
            </div>

            <div class="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 bg-gradient-to-br shadow-lg" [ngClass]="s.color">
              <op-emoji [symbol]="s.icon"></op-emoji>
            </div>

            <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{{ s.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ s.description }}</p>

            <div *ngIf="s.path" class="mt-6 text-yellow-500 text-xs font-bold font-mono group-hover:text-yellow-300 transition-colors">
              EXPLORAR →
            </div>
          </a>
        </div>
      </div>
    </section>
  `
})
export class WorldHubComponent implements OnInit {
  sections: WorldSection[] = [
    { title: 'Ruta de los Mugiwara', description: 'El viaje de la tripulación, mar a mar, isla a isla, desde el East Blue hasta el Nuevo Mundo.', icon: '🗺️', color: 'from-blue-700 to-blue-950', path: '/world/journey' },
    { title: 'Islas', description: 'El atlas completo del mundo de One Piece, mar por mar.', icon: '🏝️', color: 'from-teal-700 to-teal-950' },
    { title: 'Sagas', description: 'Las 12 grandes sagas que estructuran toda la historia.', icon: '📖', color: 'from-amber-700 to-amber-950', path: '/world/sagas' },
    { title: 'Barcos', description: 'Los navíos legendarios que han surcado el Grand Line, del Going Merry al Moby Dick.', icon: '⛵', color: 'from-cyan-700 to-cyan-950', path: '/world/ships' },
    { title: 'One Piece Card Game', description: 'Líderes, DON!! y mazos iniciales del juego de cartas coleccionables oficial.', icon: '🃏', color: 'from-red-700 to-indigo-950', path: '/world/card-game' },
    { title: 'Cronología', description: 'El orden de lectura y publicación de cada arco de la serie.', icon: '⏳', color: 'from-violet-700 to-violet-950' },
    { title: 'Películas', description: 'El cine de One Piece, dentro y fuera del canon principal.', icon: '🎬', color: 'from-red-700 to-red-950', path: '/world/movies' },
    { title: 'Openings y Endings', description: 'La banda sonora del anime que ha acompañado cada arco.', icon: '🎵', color: 'from-pink-700 to-rose-950', path: '/world/soundtrack' },
    { title: 'Teorías', description: 'Las especulaciones más calientes de la comunidad sobre el final de la serie.', icon: '💡', color: 'from-purple-700 to-indigo-950', path: '/theories' },
  ];

  ngOnInit() {
    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('active'));
    }, 100);
  }
}

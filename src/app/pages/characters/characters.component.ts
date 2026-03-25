import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHARACTERS } from '../../data/characters';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-op-dark to-op-navy min-h-screen relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16 reveal">
          <p class="text-blue-400 font-mono text-sm tracking-widest mb-2">👤 DATABASE COMPLETA</p>
          <h2 class="font-pirate text-5xl md:text-6xl text-white mb-4 section-title">
            <span class="gradient-text">Enciclopedia</span> de Personajes
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Más de 100 personajes clave de One Piece: Mugiwaras, Yonkos, Shichibukai, Marines y villanos del Gobierno Mundial. Todos sus niveles de poder calculados en base a sus hazañas oficiales del Manga.</p>
        </div>

        <!-- Filter / Search (Visual only for now) -->
        <div class="flex flex-wrap gap-4 justify-center mb-12 reveal delay-100">
          <input type="text" placeholder="Buscar personaje (ej: Luffy, Kaido)..." class="bg-gray-900/80 border border-gray-700 rounded-full px-6 py-3 text-white w-full max-w-md focus:border-yellow-500 outline-none transition-colors">
          <select class="bg-gray-900/80 border border-gray-700 rounded-full px-6 py-3 text-white outline-none focus:border-yellow-500">
            <option>Todas las facciones</option>
            <option>Piratas del Sombrero de Paja</option>
            <option>Yonko</option>
            <option>Marina</option>
            <option>Shichibukai</option>
            <option>Ejército Revolucionario</option>
          </select>
        </div>

        <!-- Characters Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div *ngFor="let char of characters; let i = index" class="reveal-scale card-hover rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-900 to-slate-950 group cursor-pointer" [style.transitionDelay]="((i % 8) * 0.05) + 's'">
            <!-- Character Image -->
            <div class="relative h-60 overflow-hidden bg-gradient-to-br" [ngClass]="char.color">
              <img [src]="char.img" [alt]="char.name" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" (error)="$any($event.target).src='https://via.placeholder.com/200x200/1a1a2e/F39C12?text=' + char.name">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>

              <!-- Bounty badge -->
              <div class="absolute bottom-3 left-3 right-3">
                <div class="wanted-poster rounded px-2 py-1 text-center shadow-lg">
                  <p class="text-xs font-bold font-mono" style="color:#1a0a00;">RECOMPENSA / BOUNTY</p>
                  <p class="text-sm font-black font-pirate tracking-wider" style="color:#8B1A1A;">฿ {{ char.bounty }}</p>
                </div>
              </div>
            </div>

            <!-- Character Info -->
            <div class="p-5">
              <div class="mb-4">
                <h3 class="font-bold text-white text-lg leading-tight group-hover:text-yellow-400 transition-colors">{{ char.name }}</h3>
                <p class="text-yellow-500 text-xs font-mono mt-1">{{ char.epithet }}</p>
                <div class="flex items-center gap-2 mt-2">
                  <span class="bg-blue-900/50 border border-blue-700 text-blue-300 text-[10px] px-2 py-0.5 rounded uppercase">{{ char.role }}</span>
                  <span class="bg-gray-800 border border-gray-600 text-gray-400 text-[10px] px-2 py-0.5 rounded uppercase">{{ char.crew }}</span>
                </div>
              </div>

              <p class="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{{ char.description }}</p>

              <!-- Power Level -->
              <div class="mb-4 bg-black/40 p-3 rounded-lg border border-white/5">
                <div class="flex justify-between text-xs mb-1.5">
                  <span class="text-gray-500 font-mono">Nivel de Poder</span>
                  <span class="text-yellow-400 font-bold">{{ char.power_level }}/100</span>
                </div>
                <div class="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-1000" [ngClass]="getPowerColor(char.power_level)" [style.width.%]="char.power_level"></div>
                </div>
              </div>

              <!-- Extra tags -->
              <div class="flex flex-col gap-2">
                <div *ngIf="char.devil_fruit !== 'Ninguna'" class="flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-transparent rounded px-2 py-1 border-l-2 border-purple-500">
                  <span class="text-sm">🍎</span><span class="text-xs text-purple-300">{{ char.devil_fruit }}</span>
                </div>
                <div *ngIf="char.haki.length > 0" class="flex items-center gap-2 bg-gradient-to-r from-red-900/30 to-transparent rounded px-2 py-1 border-l-2 border-red-500">
                  <span class="text-sm">⚡</span>
                  <div class="flex flex-wrap gap-1">
                    <span *ngFor="let h of char.haki" class="text-[10px] text-red-300 bg-red-900/50 px-1 rounded">{{ h }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CharactersComponent implements OnInit {
  characters = CHARACTERS;

  ngOnInit() {
    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right').forEach(el => el.classList.add('active'));
    }, 100);
  }

  getPowerColor(n: number): string {
    if (n >= 95) return 'bg-gradient-to-r from-red-600 to-orange-500';
    if (n >= 85) return 'bg-gradient-to-r from-orange-500 to-yellow-500';
    if (n >= 75) return 'bg-gradient-to-r from-yellow-500 to-green-500';
    return 'bg-gradient-to-r from-blue-500 to-cyan-500';
  }
}

import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SOUNDTRACKS, Soundtrack } from '../../../data/soundtracks';
import { OpEmojiComponent } from '../../../components/op-emoji/op-emoji.component';

@Component({
  selector: 'app-soundtrack',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden">
      <!-- Background elements -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-950/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-950/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16 reveal">
          <a routerLink="/world" class="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 text-sm font-mono mb-8 transition-colors">
            <op-emoji symbol="🌍"></op-emoji> Volver a Mundo
          </a>
          <h2 class="font-pirate text-5xl md:text-7xl text-white mb-6 section-title">
            Openings y <span class="gradient-text">Endings</span>
          </h2>
          <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            La legendaria banda sonora que ha acompañado las aventuras de Luffy y sus amigos durante más de 25 años. Explora los temas de apertura y cierre oficiales del anime.
          </p>
        </div>

        <!-- Filter tabs -->
        <div class="flex justify-center mb-12 reveal delay-100">
          <div class="flex rounded-full bg-gray-900/80 border border-gray-800 p-1 shadow-2xl">
            <button *ngFor="let tab of ['all', 'opening', 'ending']"
                    (click)="selectedTab.set(tab)"
                    class="px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 flex items-center gap-2"
                    [ngClass]="selectedTab() === tab ? 'bg-yellow-500 text-black shadow-md' : 'text-gray-400 hover:text-white'">
              <op-emoji [symbol]="tab === 'all' ? '🎵' : tab === 'opening' ? '🎤' : '🎧'"></op-emoji>
              {{ tab === 'all' ? 'Todos' : tab === 'opening' ? 'Openings' : 'Endings' }}
            </button>
          </div>
        </div>

        <!-- Results count -->
        <div class="text-center mb-8 reveal">
          <span class="text-gray-500 font-mono text-sm">
            Total en la base de datos: <strong class="text-yellow-400">{{ filteredThemes().length }}</strong> temas musicales
          </span>
        </div>

        <!-- Themes list grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let item of filteredThemes(); let idx = index"
               class="reveal-scale card-hover bg-gradient-to-br from-gray-900 to-slate-950 border border-white/5 rounded-2xl p-6 flex flex-col justify-between group shadow-xl relative"
               [style.transitionDelay]="((idx % 6) * 0.05) + 's'">
            
            <!-- Type Ribbon / Badge -->
            <div class="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border shadow"
                 [ngClass]="item.type === 'opening' ? 'bg-rose-950/60 text-rose-300 border-rose-500/30' : 'bg-blue-950/60 text-blue-300 border-blue-500/30'">
              <span class="w-1.5 h-1.5 rounded-full" [ngClass]="item.type === 'opening' ? 'bg-rose-400 animate-pulse' : 'bg-blue-400'"></span>
              {{ item.type }}
            </div>

            <!-- Content Area -->
            <div>
              <!-- Large Theme Icon -->
              <div class="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5 shadow-inner bg-gradient-to-tr from-gray-800 to-gray-950 border border-gray-700/40 group-hover:scale-105 transition-transform">
                <op-emoji [symbol]="item.icon"></op-emoji>
              </div>

              <!-- Episode Range -->
              <span class="text-xs font-mono text-gray-500 block mb-1">Episodios: {{ item.episodes }}</span>

              <!-- Song Title -->
              <h3 class="text-xl font-bold text-white mb-2 leading-tight group-hover:text-yellow-400 transition-colors">
                {{ item.title }}
              </h3>

              <!-- Artist Name -->
              <p class="text-sm font-mono text-gray-400 mb-4">
                Por: <strong class="text-gray-200">{{ item.artist }}</strong>
              </p>

              <!-- Associated Arc Info -->
              <div class="bg-black/30 rounded-lg p-3 border border-white/5 mb-6">
                <span class="text-[10px] text-gray-500 font-mono block mb-0.5">ARCO DEL ANIME</span>
                <p class="text-xs text-yellow-500/90 font-bold flex items-center gap-1.5">
                  <op-emoji symbol="🚩" class="text-xs"></op-emoji>
                  {{ item.arcName }}
                </p>
              </div>
            </div>

            <!-- Action Button: Search Youtube -->
            <a [href]="item.youtubeUrl"
               target="_blank"
               class="w-full py-2.5 rounded-xl border border-red-500/40 hover:border-red-500 bg-red-950/20 hover:bg-red-900/40 text-red-400 hover:text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all duration-300">
              <op-emoji symbol="🔴"></op-emoji>
              ESCUCHAR EN YOUTUBE ↗
            </a>

          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .reveal, .reveal-scale {
      opacity: 0;
      transition: all 0.6s ease-out;
    }
    .reveal {
      transform: translateY(20px);
    }
    .reveal-scale {
      transform: scale(0.95);
    }
    .reveal.active, .reveal-scale.active {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  `]
})
export class SoundtrackComponent implements OnInit {
  selectedTab = signal<string>('all');

  soundtracks = SOUNDTRACKS;

  filteredThemes = computed(() => {
    let list = [...this.soundtracks];
    const tab = this.selectedTab();
    if (tab === 'opening') {
      list = list.filter(item => item.type === 'opening');
    } else if (tab === 'ending') {
      list = list.filter(item => item.type === 'ending');
    }
    return list.sort((a, b) => a.id - b.id);
  });

  ngOnInit() {
    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('active'));
    }, 100);
  }
}

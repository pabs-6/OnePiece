import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MOVIES, Movie } from '../../../data/movies';
import { OpEmojiComponent } from '../../../components/op-emoji/op-emoji.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden">
      <!-- Background elements -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-1/3 right-10 w-96 h-96 bg-red-950/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/3 left-10 w-80 h-80 bg-blue-950/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16 reveal">
          <a routerLink="/world" class="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 text-sm font-mono mb-8 transition-colors">
            <op-emoji symbol="🌍"></op-emoji> Volver a Mundo
          </a>
          <h2 class="font-pirate text-5xl md:text-7xl text-white mb-6 section-title">
            Películas de <span class="gradient-text">One Piece</span>
          </h2>
          <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Explora las 15 producciones cinematográficas de la franquicia. Desde aventuras clásicas hasta películas taquilleras mundiales escritas y supervisadas por Eiichiro Oda.
          </p>
        </div>

        <!-- Filters and Sorting -->
        <div class="flex flex-wrap gap-4 justify-center items-center mb-12 reveal delay-100">
          <div class="flex rounded-full bg-gray-900/80 border border-gray-800 p-1 shadow-2xl">
            <button *ngFor="let filter of ['all', 'canon', 'non-canon']"
                    (click)="selectedFilter.set(filter)"
                    class="px-5 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300"
                    [ngClass]="selectedFilter() === filter ? 'bg-yellow-500 text-black shadow-md' : 'text-gray-400 hover:text-white'">
              {{ filter === 'all' ? 'Todas' : filter === 'canon' ? 'Canon' : 'No Canon' }}
            </button>
          </div>

          <button (click)="toggleSortOrder()"
                  class="bg-gray-900/80 border border-gray-800 rounded-full px-6 py-3 text-xs font-mono font-bold text-white hover:border-yellow-500 hover:text-yellow-400 transition-colors shadow-2xl flex items-center gap-2">
            ORDENAR POR AÑO: {{ sortOrder() === 'asc' ? 'ANTIGUAS PRIMERO' : 'RECIENTES PRIMERO' }} 
            <span>{{ sortOrder() === 'asc' ? '↑' : '↓' }}</span>
          </button>
        </div>

        <!-- Results count -->
        <div class="text-center mb-8 reveal">
          <span class="text-gray-500 font-mono text-sm">
            Mostrando <strong class="text-yellow-400">{{ filteredMovies().length }}</strong> películas encontradas
          </span>
        </div>

        <!-- Movies Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let movie of filteredMovies(); let i = index"
               class="reveal-scale card-hover rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-slate-950 flex flex-col justify-between group"
               [style.transitionDelay]="((i % 6) * 0.05) + 's'">
            
            <div class="p-6 md:p-8 flex-1">
              <!-- Top details -->
              <div class="flex justify-between items-start mb-6">
                <!-- Large emoji representing the theme -->
                <div class="w-16 h-16 rounded-xl flex items-center justify-center text-4xl shadow-inner bg-gradient-to-br from-gray-800 to-gray-950 border border-gray-700/50 group-hover:scale-110 transition-transform">
                  <op-emoji [symbol]="movie.icon"></op-emoji>
                </div>
                <!-- Status tag -->
                <span class="text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase border shadow"
                      [ngClass]="movie.canon ? 'bg-green-950/60 text-green-300 border-green-500/30' : 'bg-red-950/60 text-red-300 border-red-500/30'">
                  {{ movie.canon ? 'Escrita/Canon Oda' : 'No Canon (Película)' }}
                </span>
              </div>

              <!-- Title & year -->
              <span class="text-xs text-gray-500 font-mono block mb-2">{{ movie.year }} · {{ movie.duration }}</span>
              <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors leading-snug">
                {{ movie.title }}
              </h3>
              
              <!-- Synopsis -->
              <p class="text-gray-300 text-sm leading-relaxed mb-6">
                {{ movie.description }}
              </p>
            </div>

            <!-- Footer Details -->
            <div class="px-6 md:px-8 py-4 border-t border-gray-800/80 bg-black/30 flex justify-between items-center text-xs font-mono text-gray-400">
              <span>Director: <strong class="text-white">{{ movie.director }}</strong></span>
              <span class="text-yellow-500">Nº {{ movie.id }}</span>
            </div>

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
export class MoviesComponent implements OnInit {
  selectedFilter = signal<string>('all');
  sortOrder = signal<'asc' | 'desc'>('asc');

  movies = MOVIES;

  filteredMovies = computed(() => {
    let result = [...this.movies];
    
    // Filter
    const f = this.selectedFilter();
    if (f === 'canon') {
      result = result.filter(m => m.canon);
    } else if (f === 'non-canon') {
      result = result.filter(m => !m.canon);
    }

    // Sort
    const order = this.sortOrder();
    result.sort((a, b) => {
      return order === 'asc' ? a.year - b.year : b.year - a.year;
    });

    return result;
  });

  ngOnInit() {
    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-scale').forEach(el => el.classList.add('active'));
    }, 100);
  }

  toggleSortOrder() {
    this.sortOrder.update(order => order === 'asc' ? 'desc' : 'asc');
  }
}

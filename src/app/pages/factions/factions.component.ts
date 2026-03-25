import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FACTIONS } from '../../data/factions';

@Component({
  selector: 'app-factions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden">
      <!-- Decoración fondo -->
      <div class="fixed inset-0 pointer-events-none">
        <div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-32 reveal">
          <p class="text-amber-400 font-mono text-sm tracking-widest mb-2">🏴‍☠️ BANDERAS PIRATAS Y ORGANIZACIONES</p>
          <h2 class="font-pirate text-5xl md:text-7xl text-white mb-6 section-title">
            Facciones y <span class="gradient-text">Tripulaciones</span>
          </h2>
          <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">Las agrupaciones que controlan y equilibran el poder masivo mundial entre la Marina, el Gobierno y los Piratas. Cada una con sus propios ideales, líderes y territorios reclamados.</p>
        </div>

        <!-- Factions Vertical Scroll -->
        <div class="space-y-40">
          <div *ngFor="let f of factions; let i = index" class="reveal relative flex flex-col md:flex-row items-center gap-12 md:gap-20" [ngClass]="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
            
            <!-- Graphic / Logo Half -->
            <div class="w-full md:w-5/12 relative flex justify-center group">
              <!-- Glow Effect -->
              <div class="absolute inset-0 scale-150 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-3xl rounded-full" [ngClass]="f.bg_gradient.replace('/40', '')"></div>
              
              <div class="relative w-64 h-64 md:w-96 md:h-96 rounded-full flex items-center justify-center filter drop-shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-all duration-1000 group-hover:scale-105 group-hover:rotate-3 overflow-hidden border-8 border-gray-900 shadow-2xl">
                <!-- Background pattern / texture -->
                <div class="absolute inset-0 bg-black/80 pointer-events-none"></div>
                <div class="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>
                
                <img [src]="f.jolly_roger" [alt]="f.name" 
                     class="relative z-10 w-full h-full object-cover brightness-110 contrast-110" 
                     (error)="$any($event.target).src='https://via.placeholder.com/400/000000/FFFFFF?text=☠️'">
              </div>

              <!-- Type Tag Overlay -->
              <div class="absolute -bottom-6 bg-black/80 font-mono border border-gray-600 text-xs text-white px-6 py-2 rounded-full shadow-2xl z-20 backdrop-blur-sm whitespace-nowrap">
                {{ f.type | uppercase }}
              </div>
            </div>

            <!-- Content Half -->
            <div class="w-full md:w-7/12">
              <h3 class="text-4xl md:text-5xl font-bold mb-6 font-pirate tracking-wide uppercase drop-shadow-lg" [ngClass]="f.color">{{ f.name }}</h3>
              
              <div class="mb-8">
                <p class="text-xs text-gray-500 font-mono tracking-widest mb-2 border-b border-gray-800 pb-2">LÍDER SUPREMO</p>
                <div class="flex items-center gap-3">
                  <span class="text-3xl">👑</span>
                  <p class="font-bold text-white text-2xl drop-shadow">{{ f.leader }}</p>
                </div>
              </div>

              <div class="relative mb-10 pl-6 border-l-4" [ngClass]="'border-' + f.color.replace('text-', '')">
                <span class="absolute -left-3 -top-3 text-4xl opacity-30 font-serif text-white">"</span>
                <p class="text-gray-300 text-lg md:text-xl leading-relaxed italic relative z-10">{{ f.description }}</p>
              </div>

              <div>
                <p class="text-xs font-mono tracking-widest mb-4 opacity-70" [ngClass]="f.color.replace('text-', 'text-')">MIEMBROS CLAVE CONFIRMADOS</p>
                <div class="flex flex-wrap gap-3">
                  <span *ngFor="let member of f.key_members; let mi = index" 
                        class="text-sm font-semibold px-4 py-2 bg-gray-900 text-gray-200 rounded-md border border-gray-700 hover:border-white hover:text-white transition-all duration-300 cursor-default shadow"
                        [style.animationDelay]="(mi * 0.1) + 's'">
                    {{ member }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class FactionsComponent implements OnInit {
  factions = FACTIONS;

  ngOnInit() {
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 100);
  }
}

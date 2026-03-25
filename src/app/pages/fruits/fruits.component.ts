import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEVIL_FRUITS } from '../../data/devil-fruits';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 right-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-20 reveal">
          <p class="text-purple-400 font-mono text-sm tracking-widest mb-2">🍎 EL SISTEMA DE PODERES</p>
          <h2 class="font-pirate text-5xl md:text-7xl text-white mb-6 section-title">
            Frutas del <span class="gradient-text">Diablo</span>
          </h2>
          <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Las enigmáticas Akuma no Mi. Otorga al usuario poderes sobrehumanos a cambio de la capacidad de nadar en el mar. Desde transformaciones míticas hasta el control elemental absoluto.
          </p>
        </div>

        <!-- Scrollable full-width sections for each fruit -->
        <div class="space-y-32">
          <div *ngFor="let fruit of fruits; let i = index" 
               class="reveal flex flex-col items-center justify-between"
               [ngClass]="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
            
            <!-- Fruit Image / Graphics -->
            <div class="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div class="relative w-72 h-72 md:w-96 md:h-96 transition-transform duration-700 hover:scale-105 rounded-full overflow-hidden border-8 border-white/5 shadow-2xl flex items-center justify-center bg-black/40">
                <div class="absolute inset-0 rounded-full blur-3xl opacity-30 bg-gradient-to-tr" [ngClass]="fruit.color"></div>
                <img [src]="fruit.img" [alt]="fruit.name" 
                     (error)="$any($event.target).src='https://via.placeholder.com/400?text=Akuma+no+Mi'"
                     class="relative z-10 w-full h-full object-cover filter brightness-110 drop-shadow-2xl hover:rotate-6 transition-all duration-500">
              </div>
            </div>

            <!-- Content -->
            <div class="w-full md:w-1/2 md:px-12">
              <div class="inline-block px-4 py-1 rounded-full text-xs font-mono font-bold mb-4 border"
                   [ngClass]="getTypeStyles(fruit.type)">
                👉 TIPO {{ fruit.type | uppercase }}
              </div>
              
              <h3 class="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight drop-shadow-lg" [ngClass]="getTextColor(fruit.color)">
                {{ fruit.name }}
              </h3>
              
              <p class="text-gray-400 font-mono text-sm mb-6 pb-6 border-b border-gray-800">
                Usuario Principal: <strong class="text-white">{{ fruit.user }}</strong>
              </p>
              
              <p class="text-gray-300 text-lg md:text-xl leading-relaxed italic border-l-4 border-gray-700 pl-6">
                "{{ fruit.description }}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FruitsComponent implements OnInit {
  fruits = DEVIL_FRUITS;

  ngOnInit() {
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 100);
  }

  getTypeStyles(type: string): string {
    if (type.includes('Logia')) return 'bg-purple-900/30 text-purple-300 border-purple-500/50';
    if (type.includes('Zoan')) return 'bg-green-900/30 text-green-300 border-green-500/50';
    return 'bg-blue-900/30 text-blue-300 border-blue-500/50';
  }

  getTextColor(gradient: string): string {
    return `text-transparent bg-clip-text bg-gradient-to-r ${gradient}`;
  }
}

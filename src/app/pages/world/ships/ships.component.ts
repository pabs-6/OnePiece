import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SHIPS, Ship } from '../../../data/ships';
import { OpEmojiComponent } from '../../../components/op-emoji/op-emoji.component';

@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden">
      <!-- Background elements -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-1/4 left-10 w-96 h-96 bg-cyan-950/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-blue-950/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16 reveal">
          <a routerLink="/world" class="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 text-sm font-mono mb-8 transition-colors">
            <op-emoji symbol="🌍"></op-emoji> Volver a Mundo
          </a>
          <h2 class="font-pirate text-5xl md:text-7xl text-white mb-6 section-title">
            Grandes <span class="gradient-text">Barcos</span>
          </h2>
          <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Los navíos que han marcado la historia de One Piece, desde el Going Merry hasta las legendarias naves de los Yonkou.
          </p>
        </div>

        <!-- Ships Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div *ngFor="let ship of ships" class="reveal card-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col bg-gray-900/60">
            <div class="relative aspect-[16/9] bg-gradient-to-br" [ngClass]="ship.color">
              <img [src]="ship.image" [alt]="ship.name" class="absolute inset-0 w-full h-full object-contain p-4">
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-3 mb-2">
                  <h3 class="text-2xl font-pirate font-bold text-white">{{ ship.name }}</h3>
                  <op-emoji symbol="⛵"></op-emoji>
                </div>
                <p class="text-xs font-mono text-gray-500 mb-4">{{ ship.faction }} · {{ ship.captain }}</p>
                <p class="text-gray-300 text-sm leading-relaxed mb-4">{{ ship.description }}</p>
              </div>
              <div class="pt-4 border-t border-gray-800 flex justify-between items-center text-xs font-mono text-gray-500">
                <span>TIPO: {{ ship.type }}</span>
                <span class="text-yellow-500">{{ ship.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease-out;
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
  `]
})
export class ShipsComponent implements OnInit {
  ships: Ship[] = [];

  ngOnInit() {
    this.ships = [...SHIPS].sort((a, b) => a.order - b.order);

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 100);
  }
}

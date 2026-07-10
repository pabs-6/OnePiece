import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CARD_GAME_DECKS, CARD_GAME_MECHANICS, CardGameDeck, CardGameMechanic } from '../../../data/card-game';
import { OpEmojiComponent } from '../../../components/op-emoji/op-emoji.component';

@Component({
  selector: 'app-card-game',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden">
      <!-- Background elements -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-1/4 left-10 w-96 h-96 bg-red-950/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-indigo-950/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16 reveal">
          <a routerLink="/world" class="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 text-sm font-mono mb-8 transition-colors">
            <op-emoji symbol="🌍"></op-emoji> Volver a Mundo
          </a>
          <h2 class="font-pirate text-5xl md:text-7xl text-white mb-6 section-title">
            One Piece <span class="gradient-text">Card Game</span>
          </h2>
          <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            El juego de cartas coleccionables oficial de Bandai: líderes, DON!! y mazos temáticos con los personajes y tripulaciones más icónicos de la serie.
          </p>
        </div>

        <!-- Mecánicas básicas -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 reveal">
          <div *ngFor="let m of mechanics" class="rounded-2xl border border-white/10 bg-gray-900/60 p-5 text-center">
            <div class="text-3xl mb-2"><op-emoji [symbol]="m.icon"></op-emoji></div>
            <h4 class="text-white font-bold text-sm mb-1">{{ m.name }}</h4>
            <p class="text-gray-400 text-xs leading-relaxed">{{ m.description }}</p>
          </div>
        </div>

        <!-- Mazos iniciales -->
        <h3 class="text-2xl md:text-3xl font-pirate font-bold text-white mb-8 border-b border-gray-800 pb-4 reveal">
          Mazos Iniciales (Starter Decks)
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div *ngFor="let deck of decks" class="reveal card-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col bg-gray-900/60">
            <div class="bg-gradient-to-br p-6 relative overflow-hidden" [ngClass]="deck.gradient">
              <div class="absolute -right-4 -bottom-4 text-7xl font-black font-pirate opacity-10">🃏</div>
              <div class="relative z-10">
                <span class="text-xs font-mono text-white/70">{{ deck.code }} · {{ deck.color }}</span>
                <h4 class="text-xl font-pirate font-bold text-white flex items-center gap-2 mt-1">
                  <op-emoji [symbol]="deck.icon"></op-emoji>
                  {{ deck.name }}
                </h4>
              </div>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p class="text-xs font-mono text-gray-500 mb-2">LÍDER: {{ deck.leader }}</p>
                <p class="text-gray-300 text-sm leading-relaxed">{{ deck.description }}</p>
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
export class CardGameComponent implements OnInit {
  decks: CardGameDeck[] = [];
  mechanics: CardGameMechanic[] = CARD_GAME_MECHANICS;

  ngOnInit() {
    this.decks = [...CARD_GAME_DECKS].sort((a, b) => a.order - b.order);

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 100);
  }
}

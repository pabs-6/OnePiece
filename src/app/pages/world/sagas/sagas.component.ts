import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SAGAS, Saga } from '../../../data/sagas';
import { ARCS, Arc } from '../../../data/arcs';
import { OpEmojiComponent } from '../../../components/op-emoji/op-emoji.component';

interface SagaWithArcs extends Saga {
  arcs: Arc[];
}

@Component({
  selector: 'app-sagas',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden">
      <!-- Background elements -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-1/4 left-10 w-96 h-96 bg-amber-950/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16 reveal">
          <a routerLink="/world" class="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 text-sm font-mono mb-8 transition-colors">
            <op-emoji symbol="🌍"></op-emoji> Volver a Mundo
          </a>
          <h2 class="font-pirate text-5xl md:text-7xl text-white mb-6 section-title">
            Las Grandes <span class="gradient-text">Sagas</span>
          </h2>
          <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            La epopeya de Eiichiro Oda dividida en 12 grandes sagas que estructuran todo el viaje de Luffy. Explora los arcos, los capítulos y la evolución de la historia.
          </p>
        </div>

        <!-- Sagas Timeline / Layout -->
        <div class="space-y-24">
          <div *ngFor="let saga of sagasWithArcs; let idx = index" class="reveal bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/5 shadow-2xl relative">
            <!-- Saga Order Badge -->
            <div class="absolute -top-5 left-8 bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-xs font-mono font-bold px-4 py-1.5 rounded-full shadow-lg">
              SAGA DE ONE PIECE #{{ saga.order }}
            </div>

            <!-- Saga Title -->
            <h3 class="text-3xl md:text-4xl font-pirate font-bold text-white mb-8 mt-2 border-b border-gray-800 pb-4">
              {{ saga.name }}
            </h3>

            <!-- Child Arcs Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div *ngFor="let arc of saga.arcs" class="card-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between bg-gray-900/60">
                <div class="bg-gradient-to-br p-6 relative overflow-hidden" [ngClass]="arc.color || 'from-slate-700 to-slate-900'">
                  <div class="absolute -right-4 -bottom-4 text-7xl font-black font-pirate opacity-10">{{ arc.icon || '⚓' }}</div>
                  <div class="relative z-10">
                    <h4 class="text-xl font-pirate font-bold text-white mb-1 flex items-center gap-2">
                      <op-emoji [symbol]="arc.icon || '⚓'"></op-emoji>
                      {{ arc.name }}
                    </h4>
                    <span class="text-xs font-mono text-white/70">
                      Capítulos: {{ arc.chapterRange.start }}{{ arc.chapterRange.end ? '–' + arc.chapterRange.end : '+' }}
                    </span>
                  </div>
                </div>
                <div class="p-6 flex-1 flex flex-col justify-between">
                  <p class="text-gray-300 text-sm leading-relaxed mb-4">
                    {{ arc.description }}
                  </p>
                  <div class="pt-4 border-t border-gray-800 flex justify-between items-center text-xs font-mono text-gray-500">
                    <span>ARCO IDENTIFICADOR: {{ arc.slug }}</span>
                    <span class="text-yellow-500">Activo</span>
                  </div>
                </div>
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
export class SagasComponent implements OnInit {
  sagasWithArcs: SagaWithArcs[] = [];

  ngOnInit() {
    this.sagasWithArcs = SAGAS.map(saga => ({
      ...saga,
      arcs: ARCS.filter(arc => arc.sagaId === saga.id)
    })).sort((a, b) => a.order - b.order);

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 100);
  }
}

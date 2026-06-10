import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { THEORIES } from '../../data/theories';
import { OpEmojiComponent } from '../../components/op-emoji/op-emoji.component';

@Component({
  selector: 'app-theories',
  standalone: true,
  imports: [CommonModule, OpEmojiComponent],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-op-navy to-op-dark min-h-screen relative overflow-hidden">
      <!-- Background elements -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-20 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="max-w-5xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-32 reveal">
          <p class="text-purple-400 font-mono text-sm tracking-widest mb-2"><op-emoji symbol="🔮"></op-emoji> TEORÍAS PROFUNDAS Y SECRETOS</p>
          <h2 class="font-pirate text-5xl md:text-7xl text-white mb-6 section-title">
            <span class="gradient-text-red">Misterios</span> de Oda
          </h2>
          <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">Una recopilación analítica extensa de todas las teorías de la comunidad. Algunas han sido confirmadas, otras siguen en debate.</p>
        </div>

        <!-- Vertical Scroll Area -->
        <div class="space-y-40">
          <div *ngFor="let t of theories; let i = index" class="reveal relative flex flex-col items-center">
            
            <!-- Connection Line (for aesthetic timeline feel) -->
            <div *ngIf="i !== theories.length - 1" class="absolute h-40 w-px bg-gradient-to-b from-purple-500/50 to-transparent left-1/2 -bottom-40 hidden md:block z-0"></div>

            <div class="w-full bg-black/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border shadow-2xl relative z-10" [ngClass]="t.border + ' ' + t.glow">
              
              <!-- Meta Info -->
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b border-gray-800 pb-6">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-inner bg-gradient-to-br" [ngClass]="t.color">
                    <op-emoji [symbol]="t.icon" class="text-4xl"></op-emoji>
                  </div>
                  <div>
                    <span class="text-xs font-mono text-gray-400 tracking-wider uppercase bg-gray-900/50 px-3 py-1 rounded inline-block mb-1">{{ t.category }}</span>
                    <h3 class="text-3xl md:text-4xl font-bold text-white leading-tight font-serif" [ngClass]="t.color.replace('from-', 'text-').split(' ')[0]">{{ t.title }}</h3>
                  </div>
                </div>
                
                <div class="flex flex-col items-end gap-2">
                  <span *ngIf="t.hot" class="text-xs bg-red-600 text-white font-bold px-4 py-1.5 rounded-full shadow-lg shadow-red-900/50 flex items-center gap-2">
                    <op-emoji symbol="🔥" class="animate-pulse"></op-emoji> POPULAR
                  </span>
                  <span class="text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2" 
                        [ngClass]="t.confirmed ? 'bg-green-600 text-white shadow-green-900/50' : 'bg-yellow-600 text-black shadow-yellow-900/50'">
                    <span><op-emoji [symbol]="t.confirmed ? '✅' : '❓'"></op-emoji></span>
                    {{ t.confirmed ? 'CONFIRMADA' : 'NO CONFIRMADA' }}
                  </span>
                </div>
              </div>

              <!-- Content Area -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <!-- Hypothesis -->
                <div>
                  <h4 class="text-sm font-mono text-purple-400 mb-3 tracking-widest border-l-2 border-purple-500 pl-3">LA HIPÓTESIS</h4>
                  <p class="text-gray-300 text-lg md:text-xl leading-relaxed italic pr-4">"{{ t.excerpt }}"</p>
                </div>
                
                <!-- Evidence Box -->
                <div class="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 shadow-inner">
                  <h4 class="text-yellow-400 font-bold mb-4 font-mono text-sm tracking-widest flex items-center gap-2">
                    <span><op-emoji symbol="⚡"></op-emoji></span> PUNTOS DE EVIDENCIA
                  </h4>
                  <ul class="space-y-4">
                    <li *ngFor="let ev of t.evidence" class="flex items-start gap-4">
                      <div class="min-w-[8px] mt-1.5 w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]"></div>
                      <p class="text-gray-400 text-sm md:text-base leading-snug">{{ ev }}</p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class TheoriesComponent implements OnInit {
  theories = THEORIES;

  ngOnInit() {
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 100);
  }
}

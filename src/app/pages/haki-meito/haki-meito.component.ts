import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HAKI_TYPES, MEITO_SWORDS, HakiType, MeitoSword } from '../../data/haki-meito';
import { OpEmojiComponent } from '../../components/op-emoji/op-emoji.component';

@Component({
  selector: 'app-haki-meito',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden">
      <!-- Background glow elements -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-950/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16 reveal">
          <p class="text-yellow-400 font-mono text-sm tracking-widest mb-2"><op-emoji symbol="⚡"></op-emoji> GUÍA DEL SISTEMA DE PODER</p>
          <h2 class="font-pirate text-5xl md:text-7xl text-white mb-6 section-title">
            Haki y <span class="gradient-text">Espadas Meito</span>
          </h2>
          <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Descubre los misterios de la energía espiritual del Haki y el compendio definitivo de las espadas de grado legendario que han forjado la historia del Grand Line.
          </p>
        </div>

        <!-- Tab switches -->
        <div class="flex justify-center mb-16 reveal delay-100">
          <div class="flex rounded-full bg-gray-900/80 border border-gray-800 p-1 shadow-2xl">
            <button (click)="activeTab.set('haki')"
                    class="px-8 py-3 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 flex items-center gap-2"
                    [ngClass]="activeTab() === 'haki' ? 'bg-gradient-to-r from-red-600 to-red-900 text-white shadow-md' : 'text-gray-400 hover:text-white'">
              <op-emoji symbol="⚡"></op-emoji> Tipos de Haki
            </button>
            <button (click)="activeTab.set('meito')"
                    class="px-8 py-3 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 flex items-center gap-2"
                    [ngClass]="activeTab() === 'meito' ? 'bg-gradient-to-r from-yellow-600 to-amber-600 text-black shadow-md' : 'text-gray-400 hover:text-white'">
              <op-emoji symbol="⚔️"></op-emoji> Espadas Meito
            </button>
          </div>
        </div>

        <!-- TAB CONTENT: HAKI -->
        <div [class.hidden]="activeTab() !== 'haki'" class="space-y-16 reveal">
          <div *ngFor="let haki of hakiTypes" 
               class="bg-black/60 border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
               [ngClass]="haki.color">
            <div class="absolute inset-0 opacity-5 bg-gradient-to-tr" [ngClass]="haki.color.split(' ')[0]"></div>

            <!-- Header Info -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-800 pb-6 relative z-10">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-inner bg-black/40">
                  <op-emoji [symbol]="haki.icon"></op-emoji>
                </div>
                <div>
                  <span class="text-xs font-mono text-gray-400 tracking-wider uppercase block mb-0.5">{{ haki.japanese }} · {{ haki.translation }}</span>
                  <h3 class="text-3xl font-pirate font-bold text-white leading-none">{{ haki.name }}</h3>
                </div>
              </div>
            </div>

            <!-- Main description and Advanced skills -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
              <div>
                <h4 class="text-xs font-mono text-gray-500 mb-4 tracking-widest uppercase">CONCEPTO FUNDAMENTAL</h4>
                <p class="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  {{ haki.description }}
                </p>
              </div>

              <div class="bg-black/40 rounded-2xl p-6 border border-white/5 shadow-inner">
                <h4 class="text-yellow-400 font-bold mb-5 font-mono text-xs tracking-widest uppercase flex items-center gap-2">
                  <span><op-emoji symbol="🔥"></op-emoji></span> APLICACIONES AVANZADAS
                </h4>
                <div class="space-y-6">
                  <div *ngFor="let adv of haki.advancedForms" class="border-l-2 border-yellow-500 pl-4">
                    <h5 class="text-white font-bold text-base mb-1 font-mono">{{ adv.name }}</h5>
                    <p class="text-gray-400 text-sm leading-relaxed">{{ adv.description }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- TAB CONTENT: MEITO SWORDS -->
        <div [class.hidden]="activeTab() !== 'meito'" class="space-y-16 reveal">
          <!-- Grouped by Grade -->
          <div *ngFor="let group of groupedSwords()" class="space-y-8">
            <div class="border-b border-gray-800 pb-4">
              <h3 class="text-2xl font-pirate font-bold text-yellow-500 tracking-wide flex items-center gap-2">
                <op-emoji symbol="⚔️"></op-emoji> Grado: {{ group.grade }}
              </h3>
              <p class="text-xs text-gray-500 font-mono mt-1">CLASE: {{ group.label }}</p>
            </div>

            <!-- Swords Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div *ngFor="let sword of group.swords" 
                   class="card-hover rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br p-6 md:p-8 flex flex-col justify-between"
                   [ngClass]="sword.bgGradient">
                
                <div>
                  <div class="flex justify-between items-start mb-6">
                    <div class="w-14 h-14 rounded-2xl bg-black/40 flex items-center justify-center text-3xl shadow-inner border border-white/5">
                      <op-emoji [symbol]="sword.icon"></op-emoji>
                    </div>
                    <!-- Status Badge -->
                    <span class="text-[9px] font-mono font-bold px-3 py-1 rounded-full uppercase border shadow"
                          [ngClass]="sword.status === 'Activa' ? 'bg-green-950/60 text-green-300 border-green-500/30' : sword.status === 'Destruida' ? 'bg-red-950/60 text-red-300 border-red-500/30' : 'bg-yellow-950/60 text-yellow-300 border-yellow-500/30'">
                      {{ sword.status }}
                    </span>
                  </div>

                  <!-- Sword Title -->
                  <span class="text-xs text-gray-500 font-mono block mb-1">{{ sword.japanese }}</span>
                  <h4 class="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {{ sword.name }}
                  </h4>

                  <!-- Description -->
                  <p class="text-gray-300 text-sm leading-relaxed mb-6">
                    {{ sword.description }}
                  </p>
                </div>

                <!-- Footer Details -->
                <div class="pt-4 border-t border-white/5 space-y-2 text-xs font-mono">
                  <div class="flex justify-between">
                    <span class="text-gray-500">PORTADOR ACTUAL:</span>
                    <span class="text-white font-bold">{{ sword.owner }}</span>
                  </div>
                  <div *ngIf="sword.previousOwners.length > 0" class="flex justify-between">
                    <span class="text-gray-500">PORTADORES ANTERIORES:</span>
                    <span class="text-gray-400 text-right">{{ sword.previousOwners.join(', ') }}</span>
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
export class HakiMeitoComponent implements OnInit {
  activeTab = signal<'haki' | 'meito'>('haki');

  hakiTypes = HAKI_TYPES;
  swords = MEITO_SWORDS;

  groupedSwords = computed(() => {
    const gradesOrder = ['Saijo O Wazamono', 'O Wazamono', 'Ryo Wazamono', 'Wazamono', 'Grado Desconocido'];
    
    return gradesOrder.map(grade => {
      const filtered = this.swords.filter(s => s.grade === grade);
      const label = filtered.length > 0 ? filtered[0].gradeLabel : '';
      return {
        grade,
        label,
        swords: filtered
      };
    }).filter(group => group.swords.length > 0);
  });

  ngOnInit() {
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 100);
  }
}

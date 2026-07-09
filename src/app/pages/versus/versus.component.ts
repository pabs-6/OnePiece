import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CharacterService, Character } from '../../services/character.service';
import { OpEmojiComponent } from '../../components/op-emoji/op-emoji.component';
import { getPowerColor, getPowerTextColor } from '../../utils/character-visuals';

interface BattleLogEntry {
  text: string;
  type: 'info' | 'c1' | 'c2' | 'clash' | 'victory';
}

@Component({
  selector: 'app-versus',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent, FormsModule],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden">
      <!-- Background glow effects -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-950/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-6xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-12 reveal">
          <p class="text-red-500 font-mono text-sm tracking-widest mb-2"><op-emoji symbol="⚔️"></op-emoji> SIMULADOR DE COMBATE</p>
          <h2 class="font-pirate text-5xl md:text-6xl text-white mb-4 section-title">
            Duelo en el <span class="gradient-text-red">Grand Line</span>
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Elige a dos guerreros legendarios de One Piece y simula un enfrentamiento épico para descubrir quién dominaría los mares del Nuevo Mundo.
          </p>
        </div>

        <!-- SELECTORS GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          <!-- Character 1 Box -->
          <div class="reveal bg-gradient-to-b from-gray-900/90 to-slate-950 border rounded-3xl p-6 shadow-2xl relative overflow-hidden"
               [ngClass]="char1() ? char1()!.border : 'border-gray-800'">
            <div *ngIf="char1()" class="absolute inset-0 opacity-10 bg-gradient-to-t" [ngClass]="char1()!.color"></div>
            
            <h3 class="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">COMBATIENTE 1</h3>
            
            <!-- Selection / Search UI -->
            <div class="relative mb-6">
              <input
                type="text"
                placeholder="Buscar combatiente 1 (ej: Luffy, Zoro)..."
                [ngModel]="search1()"
                (ngModelChange)="search1.set($event)"
                (focus)="showList1.set(true)"
                class="w-full bg-black/60 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:border-yellow-500 outline-none transition-colors shadow-inner"
              >
              <!-- Dropdown -->
              <div *ngIf="showList1() && filteredChar1().length > 0" 
                   class="absolute z-30 left-0 right-0 top-full mt-2 max-h-60 overflow-y-auto bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-2 space-y-1">
                <button
                  *ngFor="let c of filteredChar1()"
                  (click)="selectCharacter(c, 1)"
                  class="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-yellow-500/10 transition-colors flex items-center gap-3 cursor-pointer"
                >
                  <span class="text-xl"><op-emoji symbol="👤"></op-emoji></span>
                  <div>
                    <p class="font-bold">{{ c.name }}</p>
                    <p class="text-xs text-gray-500 font-mono">{{ c.epithet || c.role }}</p>
                  </div>
                </button>
              </div>
            </div>

            <!-- Character Card Details -->
            <div *ngIf="char1(); else placeholder1" class="relative z-10 flex flex-col md:flex-row gap-6 items-center">
              <div class="w-32 h-32 rounded-2xl border-4 border-white/5 overflow-hidden bg-black/40 flex-shrink-0">
                <img [src]="char1()!.img" [alt]="char1()!.name" 
                     (error)="$any($event.target).src='https://via.placeholder.com/150?text=Guerrero'"
                     class="w-full h-full object-cover object-top filter brightness-110">
              </div>
              <div class="flex-1 w-full text-center md:text-left">
                <p class="text-xs text-yellow-500 font-mono mb-1">{{ char1()!.epithet }}</p>
                <h4 class="text-2xl font-pirate font-bold text-white mb-2">{{ char1()!.name }}</h4>
                <p class="text-xs text-gray-400 mb-4">{{ char1()!.crew }} · {{ char1()!.role }}</p>

                <div class="space-y-3">
                  <!-- Power level bar -->
                  <div>
                    <div class="flex justify-between text-xs font-mono text-gray-500 mb-1">
                      <span>NIVEL DE PODER</span>
                      <span class="font-bold" [ngClass]="getPowerTextColor(char1()!.power_level)">{{ char1()!.power_level }}</span>
                    </div>
                    <div class="h-2 bg-black/40 rounded-full overflow-hidden border border-white/5">
                      <div class="h-full rounded-full" [ngClass]="getPowerColor(char1()!.power_level)" [style.width.%]="char1()!.power_level"></div>
                    </div>
                  </div>
                  <!-- Details -->
                  <div class="grid grid-cols-2 gap-2 text-xs font-mono text-gray-400">
                    <div class="bg-black/30 p-2 rounded border border-white/5">
                      <span class="block text-[9px] text-gray-500">FRUTA</span>
                      <span class="truncate block font-bold text-gray-300" [title]="char1()!.devil_fruit">{{ char1()!.devil_fruit }}</span>
                    </div>
                    <div class="bg-black/30 p-2 rounded border border-white/5">
                      <span class="block text-[9px] text-gray-500">HAKI</span>
                      <span class="truncate block font-bold text-gray-300">{{ char1()!.haki.join(', ') || 'Ninguno' }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Placeholder -->
            <ng-template #placeholder1>
              <div class="h-44 border-2 border-dashed border-gray-800 rounded-2xl flex flex-col items-center justify-center text-gray-500 font-mono text-sm p-6 text-center">
                <span class="text-4xl mb-2 animate-pulse"><op-emoji symbol="❓"></op-emoji></span>
                Selecciona al primer combatiente en el buscador superior.
              </div>
            </ng-template>
          </div>

          <!-- Character 2 Box -->
          <div class="reveal bg-gradient-to-b from-gray-900/90 to-slate-950 border rounded-3xl p-6 shadow-2xl relative overflow-hidden"
               [ngClass]="char2() ? char2()!.border : 'border-gray-800'">
            <div *ngIf="char2()" class="absolute inset-0 opacity-10 bg-gradient-to-t" [ngClass]="char2()!.color"></div>
            
            <h3 class="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4 font-right">COMBATIENTE 2</h3>
            
            <!-- Selection / Search UI -->
            <div class="relative mb-6">
              <input
                type="text"
                placeholder="Buscar combatiente 2 (ej: Shanks, Kaido)..."
                [ngModel]="search2()"
                (ngModelChange)="search2.set($event)"
                (focus)="showList2.set(true)"
                class="w-full bg-black/60 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:border-yellow-500 outline-none transition-colors shadow-inner"
              >
              <!-- Dropdown -->
              <div *ngIf="showList2() && filteredChar2().length > 0" 
                   class="absolute z-30 left-0 right-0 top-full mt-2 max-h-60 overflow-y-auto bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-2 space-y-1">
                <button
                  *ngFor="let c of filteredChar2()"
                  (click)="selectCharacter(c, 2)"
                  class="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-yellow-500/10 transition-colors flex items-center gap-3 cursor-pointer"
                >
                  <span class="text-xl"><op-emoji symbol="👤"></op-emoji></span>
                  <div>
                    <p class="font-bold">{{ c.name }}</p>
                    <p class="text-xs text-gray-500 font-mono">{{ c.epithet || c.role }}</p>
                  </div>
                </button>
              </div>
            </div>

            <!-- Character Card Details -->
            <div *ngIf="char2(); else placeholder2" class="relative z-10 flex flex-col md:flex-row gap-6 items-center">
              <div class="w-32 h-32 rounded-2xl border-4 border-white/5 overflow-hidden bg-black/40 flex-shrink-0">
                <img [src]="char2()!.img" [alt]="char2()!.name" 
                     (error)="$any($event.target).src='https://via.placeholder.com/150?text=Guerrero'"
                     class="w-full h-full object-cover object-top filter brightness-110">
              </div>
              <div class="flex-1 w-full text-center md:text-left">
                <p class="text-xs text-yellow-500 font-mono mb-1">{{ char2()!.epithet }}</p>
                <h4 class="text-2xl font-pirate font-bold text-white mb-2">{{ char2()!.name }}</h4>
                <p class="text-xs text-gray-400 mb-4">{{ char2()!.crew }} · {{ char2()!.role }}</p>

                <div class="space-y-3">
                  <!-- Power level bar -->
                  <div>
                    <div class="flex justify-between text-xs font-mono text-gray-500 mb-1">
                      <span>NIVEL DE PODER</span>
                      <span class="font-bold" [ngClass]="getPowerTextColor(char2()!.power_level)">{{ char2()!.power_level }}</span>
                    </div>
                    <div class="h-2 bg-black/40 rounded-full overflow-hidden border border-white/5">
                      <div class="h-full rounded-full" [ngClass]="getPowerColor(char2()!.power_level)" [style.width.%]="char2()!.power_level"></div>
                    </div>
                  </div>
                  <!-- Details -->
                  <div class="grid grid-cols-2 gap-2 text-xs font-mono text-gray-400">
                    <div class="bg-black/30 p-2 rounded border border-white/5">
                      <span class="block text-[9px] text-gray-500">FRUTA</span>
                      <span class="truncate block font-bold text-gray-300" [title]="char2()!.devil_fruit">{{ char2()!.devil_fruit }}</span>
                    </div>
                    <div class="bg-black/30 p-2 rounded border border-white/5">
                      <span class="block text-[9px] text-gray-500">HAKI</span>
                      <span class="truncate block font-bold text-gray-300">{{ char2()!.haki.join(', ') || 'Ninguno' }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Placeholder -->
            <ng-template #placeholder2>
              <div class="h-44 border-2 border-dashed border-gray-800 rounded-2xl flex flex-col items-center justify-center text-gray-500 font-mono text-sm p-6 text-center">
                <span class="text-4xl mb-2 animate-pulse"><op-emoji symbol="❓"></op-emoji></span>
                Selecciona al segundo combatiente en el buscador superior.
              </div>
            </ng-template>
          </div>

        </div>

        <!-- SIMULATION CONTROL BUTTON -->
        <div *ngIf="char1() && char2() && !simulating() && !winner()" class="text-center mb-12">
          <button
            (click)="startSimulation()"
            class="px-10 py-5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-pirate text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-950 flex items-center gap-3 mx-auto"
          >
            <op-emoji symbol="⚔️"></op-emoji> ¡INICIAR ENCUENTRO!
          </button>
        </div>

        <!-- BATTLE LOG AREA -->
        <div *ngIf="simulating() || battleLog().length > 0" class="bg-black/60 border border-gray-800 rounded-3xl p-6 md:p-8 max-w-3xl mx-auto shadow-2xl mb-12 relative overflow-hidden">
          
          <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
            <h4 class="font-mono text-xs font-bold text-yellow-500 tracking-wider">LOG DEL COMBATE</h4>
            <span *ngIf="simulating()" class="text-xs bg-red-900/60 border border-red-500/50 text-red-300 font-mono px-3 py-1 rounded-full animate-pulse flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> EN CURSO...
            </span>
          </div>

          <!-- Vertical list of steps -->
          <div class="space-y-4 max-h-96 overflow-y-auto pr-2" id="logScrollContainer">
            <div *ngFor="let log of battleLog()" 
                 class="p-4 rounded-xl text-sm leading-relaxed border transition-all duration-300 font-mono"
                 [ngClass]="getLogStyles(log.type)">
              {{ log.text }}
            </div>
          </div>
        </div>

        <!-- VICTORY SHIELD CARD -->
        <div *ngIf="winner() && !simulating()" class="bg-gradient-to-b from-yellow-950/40 to-amber-950/40 border border-yellow-500/40 rounded-3xl p-8 max-w-xl mx-auto shadow-2xl text-center">
          <div class="text-6xl mb-4 flex justify-center animate-bounce"><op-emoji symbol="👑"></op-emoji></div>
          <h4 class="font-mono text-xs text-yellow-400 tracking-widest uppercase mb-2">¡COMBATE CONCLUIDO!</h4>
          <h3 class="font-pirate text-3xl md:text-4xl text-white mb-4">GANADOR: {{ winner()!.name }}</h3>
          
          <div class="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500/50 mx-auto mb-6 bg-black/40 shadow-xl">
            <img [src]="winner()!.img" [alt]="winner()!.name" class="w-full h-full object-cover object-top">
          </div>

          <p class="text-gray-300 leading-relaxed italic text-base md:text-lg mb-8 px-4">
            "{{ victoryMsg() }}"
          </p>

          <button
            (click)="resetBattle()"
            class="px-8 py-3.5 bg-gray-900 border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl text-sm"
          >
            ⚔️ NUEVO COMBATE
          </button>
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
      transform: scale(0.9);
    }
    .reveal.active, .reveal-scale.active {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  `]
})
export class VersusComponent implements OnInit {
  // Service
  private characterService = inject(CharacterService);

  // States
  charactersList: Character[] = [];
  search1 = signal('');
  search2 = signal('');
  showList1 = signal(false);
  showList2 = signal(false);

  char1 = signal<Character | null>(null);
  char2 = signal<Character | null>(null);

  simulating = signal(false);
  battleLog = signal<BattleLogEntry[]>([]);
  winner = signal<Character | null>(null);
  victoryMsg = signal<string>('');

  // Computeds
  filteredChar1 = computed(() => {
    const val = this.search1();
    if (!val.trim()) return [];
    return this.charactersList
      .filter(c => c.name.toLowerCase().includes(val.toLowerCase()) && c.id !== this.char2()?.id)
      .slice(0, 5);
  });

  filteredChar2 = computed(() => {
    const val = this.search2();
    if (!val.trim()) return [];
    return this.charactersList
      .filter(c => c.name.toLowerCase().includes(val.toLowerCase()) && c.id !== this.char1()?.id)
      .slice(0, 5);
  });

  readonly getPowerColor = getPowerColor;
  readonly getPowerTextColor = getPowerTextColor;

  ngOnInit() {
    this.characterService.getAll().subscribe((chars: Character[]) => {
      this.charactersList = chars;
    });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 100);
  }

  selectCharacter(char: Character, slot: number) {
    if (slot === 1) {
      this.char1.set(char);
      this.search1.set(char.name);
      this.showList1.set(false);
    } else {
      this.char2.set(char);
      this.search2.set(char.name);
      this.showList2.set(false);
    }
    this.winner.set(null);
    this.battleLog.set([]);
  }

  getLogStyles(type: BattleLogEntry['type']) {
    switch (type) {
      case 'c1': return 'bg-red-950/20 border-red-500/20 text-red-300';
      case 'c2': return 'bg-blue-950/20 border-blue-500/20 text-blue-300';
      case 'clash': return 'bg-purple-950/40 border-purple-500/40 text-purple-200 font-bold';
      case 'victory': return 'bg-yellow-950/30 border-yellow-500/30 text-yellow-300 font-bold';
      default: return 'bg-gray-900/40 border-gray-800 text-gray-400';
    }
  }

  async startSimulation() {
    const c1 = this.char1();
    const c2 = this.char2();
    if (!c1 || !c2) return;

    this.simulating.set(true);
    this.battleLog.set([]);
    this.winner.set(null);

    const log: BattleLogEntry[] = [];
    const addLog = (text: string, type: BattleLogEntry['type']) => {
      log.push({ text, type });
      this.battleLog.set([...log]);
      
      // Auto scroll
      setTimeout(() => {
        const container = document.getElementById('logScrollContainer');
        if (container) container.scrollTop = container.scrollHeight;
      }, 50);
    };

    // Phase 1: Intro
    addLog(`📢 ¡Comienza el encuentro legendario en una isla desierta del Nuevo Mundo!`, 'info');
    await this.delay(1000);
    addLog(`⚔️ De un lado: ${c1.name} ${c1.epithet} (${c1.crew}). Nivel de poder: ${c1.power_level}.`, 'c1');
    await this.delay(1000);
    addLog(`⚔️ Del otro lado: ${c2.name} ${c2.epithet} (${c2.crew}). Nivel de poder: ${c2.power_level}.`, 'c2');
    await this.delay(1200);

    // Phase 2: Openers
    if (c1.haki.includes('Haoshoku') && c2.haki.includes('Haoshoku')) {
      addLog(`⚡ ¡Ambos combatientes liberan Haki del Conquistador! El cielo se parte en dos y el aire se llena de rayos negros.`, 'clash');
      await this.delay(1500);
    } else if (c1.haki.includes('Haoshoku')) {
      addLog(`⚡ ${c1.name} desata una onda masiva de Haki del Conquistador para intimidar a su rival.`, 'c1');
      await this.delay(1200);
    } else if (c2.haki.includes('Haoshoku')) {
      addLog(`⚡ ${c2.name} presiona a su oponente con un aura abrumadora de Haki del Conquistador.`, 'c2');
      await this.delay(1200);
    }

    // Phase 3: Clash details
    if (c1.devil_fruit !== 'Ninguna') {
      addLog(`🍎 ${c1.name} utiliza los poderes de su fruta ${c1.devil_fruit} para iniciar la ofensiva.`, 'c1');
    } else {
      addLog(`💪 ${c1.name} embiste velozmente confiando plenamente en su destreza física.`, 'c1');
    }
    await this.delay(1200);

    if (c2.devil_fruit !== 'Ninguna') {
      addLog(`🍎 ${c2.name} responde activando su fruta ${c2.devil_fruit} en un contraataque inmediato.`, 'c2');
    } else {
      addLog(`💪 ${c2.name} se pone en guardia desenvainando armas o endureciendo sus puños.`, 'c2');
    }
    await this.delay(1200);

    // Climax clash
    addLog(`💥 ¡Los guerreros chocan en el centro del campo de batalla! La onda expansiva destruye las rocas circundantes.`, 'clash');
    await this.delay(1500);

    // Phase 4: Resolution
    // Decide winner
    const score1 = c1.power_level + Math.floor(Math.random() * 20) - 10;
    const score2 = c2.power_level + Math.floor(Math.random() * 20) - 10;

    let victorious: Character;
    let message = '';

    if (score1 > score2) {
      victorious = c1;
      message = this.generateVictoryMessage(c1, c2);
    } else if (score2 > score1) {
      victorious = c2;
      message = this.generateVictoryMessage(c2, c1);
    } else {
      // Tie goes to highest power level originally
      if (c1.power_level >= c2.power_level) {
        victorious = c1;
        message = this.generateVictoryMessage(c1, c2);
      } else {
        victorious = c2;
        message = this.generateVictoryMessage(c2, c1);
      }
    }

    addLog(`🏆 ¡El combate se decide tras un cruce definitivo de voluntades!`, 'info');
    await this.delay(1000);
    addLog(`👑 ¡${victorious.name} se alza con la victoria!`, 'victory');

    this.winner.set(victorious);
    this.victoryMsg.set(message);
    this.simulating.set(false);

    setTimeout(() => {
      document.querySelectorAll('.reveal-scale').forEach(el => el.classList.add('active'));
    }, 100);
  }

  generateVictoryMessage(winner: Character, loser: Character): string {
    const wins = [
      `Tras una batalla encarnizada, ${winner.name} logra sobrepasar la defensa de ${loser.name} asestando un golpe decisivo que hace retumbar la isla completa.`,
      `El Haki de ${winner.name} demostró ser superior y más concentrado en el momento crítico del combate, neutralizando por completo las tácticas de ${loser.name}.`,
      `Aprovechando una mínima distracción de ${loser.name}, ${winner.name} desata el poder definitivo de su arsenal, dejándolo fuera de combate y ganándose el respeto de su rival.`
    ];
    
    // Custom lines for special characters
    if (winner.name.includes('Luffy')) {
      return `Monkey D. Luffy activa el Gear 5 y, riendo a carcajadas con los latidos del tambor de la liberación, asesta un puñetazo gigante de goma que manda a ${loser.name} volando fuera de la isla.`;
    }
    if (winner.name.includes('Zoro')) {
      return `Roronoa Zoro se coloca el Wado Ichimonji en la boca, imbuye sus tres katanas con Haki del Conquistador y realiza un corte tridimensional supremo que rebana las habilidades de ${loser.name}.`;
    }
    if (winner.name.includes('Shanks')) {
      return `Shanks desenvaina a Gryphon y ejecuta un "Kamusari" (Evitación Divina) envuelto en rayos de Haki del Conquistador que noquea a ${loser.name} antes de que este pueda predecir el futuro.`;
    }
    if (winner.name.includes('Kaido')) {
      return `Kaido, en su temible forma dragón-humano, descarga su mazo Hassaikai envuelto en truenos de Haki de Conquistador, aplastando por completo la ofensiva de ${loser.name}.`;
    }

    return wins[Math.floor(Math.random() * wins.length)];
  }

  resetBattle() {
    this.winner.set(null);
    this.battleLog.set([]);
    this.search1.set('');
    this.search2.set('');
    this.char1.set(null);
    this.char2.set(null);
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

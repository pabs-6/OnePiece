import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OpEmojiComponent } from '../../components/op-emoji/op-emoji.component';

interface Question {
  text: string;
  options: {
    text: string;
    points: { pirate: number; marine: number; revolutionary: number; hunter: number };
    emoji: string;
  }[];
}

@Component({
  selector: 'app-wanted',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent, FormsModule],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-slate-950 to-op-dark min-h-screen relative overflow-hidden flex items-center justify-center">
      <!-- Background elements -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-900/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-900/10 rounded-full blur-3xl"></div>
      </div>

      <div class="w-full max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
        <!-- Title Header when not completed -->
        <div *ngIf="!completed()" class="text-center mb-12 reveal w-full">
          <p class="text-yellow-400 font-mono text-sm tracking-widest mb-2"><op-emoji symbol="🎫"></op-emoji> INTERACTIVO</p>
          <h2 class="font-pirate text-5xl md:text-6xl text-white mb-4 section-title">
            Wanted Poster <span class="gradient-text">Generator</span>
          </h2>
          <p class="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            ¿Cuál sería tu recompensa en el universo de One Piece? Responde honestamente y descubre tu cartel oficial emitido por el Gobierno Mundial.
          </p>
        </div>

        <!-- STAGE 1: Name Input & Start -->
        <div [class.hidden]="started() || completed()" class="reveal w-full max-w-md bg-gray-900/80 border border-gray-800 rounded-3xl p-8 shadow-2xl text-center">
          <div class="text-6xl mb-6 flex justify-center"><op-emoji symbol="☠️"></op-emoji></div>
          <h3 class="text-2xl font-bold text-white mb-6">Ingresa tu Nombre de Pirata</h3>
          
          <input
            type="text"
            [(ngModel)]="userName"
            placeholder="Ej: Monkey D. Alex, Roronoa Sofi..."
            class="w-full bg-black/60 border border-gray-700 rounded-xl px-5 py-4 text-white text-lg focus:border-yellow-500 outline-none transition-colors mb-6 text-center shadow-inner"
            (keyup.enter)="startQuiz(userName)"
          >

          <button
            (click)="startQuiz(userName)"
            [disabled]="!userName || !userName.trim()"
            class="w-full py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-gold disabled:opacity-50 disabled:pointer-events-none"
          >
            COMENZAR EL TEST →
          </button>
        </div>

        <!-- STAGE 2: Quiz Questions -->
        <div [class.hidden]="!started() || completed()" class="reveal w-full max-w-2xl bg-gray-900/80 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <!-- Progress Bar -->
          <div class="w-full bg-gray-800 h-2 rounded-full overflow-hidden mb-8">
            <div class="h-full bg-yellow-500 transition-all duration-300" [style.width.%]="((currentQuestionIndex() + 1) / questions.length) * 100"></div>
          </div>

          <div class="flex justify-between items-center text-xs font-mono text-gray-500 mb-4">
            <span>PREGUNTA {{ currentQuestionIndex() + 1 }} DE {{ questions.length }}</span>
            <span class="text-yellow-500">TUS ACCIONES DETERMINAN TU AMENAZA</span>
          </div>

          <h3 class="text-xl md:text-2xl font-bold text-white mb-8 leading-snug">
            {{ questions[currentQuestionIndex()].text }}
          </h3>

          <div class="space-y-4">
            <button
              *ngFor="let opt of questions[currentQuestionIndex()].options; let i = index"
              (click)="selectAnswer(opt.points, opt.emoji)"
              class="w-full text-left p-5 bg-black/40 hover:bg-yellow-500/10 border border-gray-800 hover:border-yellow-500/50 rounded-2xl text-gray-300 hover:text-white transition-all duration-200 flex items-start gap-4 group cursor-pointer"
            >
              <span class="text-2xl group-hover:scale-110 transition-transform"><op-emoji [symbol]="opt.emoji"></op-emoji></span>
              <span class="text-sm md:text-base font-medium pt-0.5 leading-snug">{{ opt.text }}</span>
            </button>
          </div>
        </div>

        <!-- STAGE 3: Result Poster -->
        <div [class.hidden]="!completed()" class="reveal-scale flex flex-col items-center gap-10 w-full">
          
          <!-- WANTED POSTER WRAPPER -->
          <div class="relative w-80 md:w-[22rem] bg-gradient-to-b from-[#eaddc3] to-[#d6c4a5] border-[14px] border-[#2c1b10] rounded-sm p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col items-center justify-between text-[#2c1b10] select-none font-serif">
            
            <!-- Old Paper texture overlays -->
            <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] pointer-events-none"></div>
            <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/soft-wallpaper.png')] pointer-events-none"></div>

            <!-- Top Header -->
            <div class="text-center w-full mt-2">
              <h1 class="text-5xl md:text-6xl font-black font-pirate tracking-[0.1em] leading-none mb-1">WANTED</h1>
              <p class="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase font-sans border-t border-b border-[#2c1b10]/40 py-0.5 max-w-[80%] mx-auto">DEAD OR ALIVE</p>
            </div>

            <!-- Image Frame -->
            <div class="w-full h-56 md:h-64 border-4 border-[#2c1b10]/80 bg-[#bfaa82] my-4 md:my-5 relative flex items-center justify-center overflow-hidden shadow-inner group">
              <!-- Grid Background inside photo -->
              <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#2c1b10_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
              
              <!-- Large Animated Character Avatar/Emoji -->
              <span class="text-8xl md:text-9xl relative z-10 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
                <op-emoji [symbol]="computedAvatar()"></op-emoji>
              </span>

              <!-- Faction/Class Overlay in Photo -->
              <div class="absolute bottom-2 left-2 bg-[#2c1b10] text-[#eaddc3] font-mono text-[9px] px-2 py-0.5 rounded shadow">
                {{ computedFaction() | uppercase }}
              </div>
            </div>

            <!-- Character Name -->
            <div class="text-center w-full mb-3 md:mb-4 px-2">
              <h2 class="text-2xl md:text-3xl font-black uppercase font-pirate tracking-wider leading-none truncate max-w-full drop-shadow-[1px_1px_0px_rgba(255,255,255,0.6)]">
                {{ userName }}
              </h2>
              <p class="text-[9px] md:text-[10px] font-sans font-semibold tracking-widest text-[#2c1b10]/70 mt-1">
                {{ computedRole() }}
              </p>
            </div>

            <!-- Bounty Amount -->
            <div class="w-full flex items-center justify-center gap-1.5 md:gap-2 mb-2">
              <span class="text-2xl md:text-3xl font-extrabold font-pirate">฿</span>
              <h3 class="text-2xl md:text-3xl font-black font-pirate tracking-widest leading-none">
                {{ computedBounty() | number }} -
              </h3>
            </div>

            <!-- Bottom watermark/stamp -->
            <div class="w-full flex justify-between items-center text-[8px] md:text-[9px] font-mono font-bold border-t border-[#2c1b10]/20 pt-2 opacity-80">
              <span>COD. GF-{{ computedBounty().toString().substring(0,3) }}</span>
              <span class="text-right tracking-widest">MARINE</span>
            </div>

          </div>

          <!-- ACTIONS AFTER COMPLETED -->
          <div class="flex flex-wrap gap-4 justify-center max-w-md">
            <button
              (click)="resetQuiz()"
              class="px-8 py-3.5 bg-gray-900 border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl text-sm"
            >
              🔄 REPETIR EL TEST
            </button>
            <a
              routerLink="/characters"
              class="px-8 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-gold text-sm"
            >
              🏴‍☠️ VER DATABASE DE RECOMPENSAS
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
      transform: scale(0.9);
    }
    .reveal.active, .reveal-scale.active {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  `]
})
export class WantedComponent implements OnInit {
  userName = '';
  started = signal(false);
  completed = signal(false);
  currentQuestionIndex = signal(0);

  // Scores state
  scores = { pirate: 0, marine: 0, revolutionary: 0, hunter: 0 };
  selectedEmojis: string[] = [];

  // Output calculations
  computedBounty = signal<number>(0);
  computedRole = signal<string>('');
  computedFaction = signal<string>('');
  computedAvatar = signal<string>('☠️');

  questions: Question[] = [
    {
      text: '¿Qué valor es el más sagrado para ti en el mar?',
      options: [
        { text: 'La libertad absoluta de explorar sin restricciones ni leyes.', points: { pirate: 3, marine: 0, revolutionary: 1, hunter: 0 }, emoji: '⛵' },
        { text: 'La justicia absoluta, mantener la paz y proteger a los civiles.', points: { pirate: 0, marine: 3, revolutionary: 0, hunter: 1 }, emoji: '🛡️' },
        { text: 'Liberar a los pueblos oprimidos y derrocar al corrupto Gobierno Mundial.', points: { pirate: 1, marine: 0, revolutionary: 3, hunter: 0 }, emoji: '✊' },
        { text: 'La fortuna, el renombre y cobrar recompensas de malhechores.', points: { pirate: 0, marine: 1, revolutionary: 0, hunter: 3 }, emoji: '🪙' }
      ]
    },
    {
      text: 'Si encuentras una Akuma no Mi misteriosa y exótica...',
      options: [
        { text: '¡Me la como al instante! No le temo a no poder nadar en el mar.', points: { pirate: 3, marine: 0, revolutionary: 1, hunter: 0 }, emoji: '🍎' },
        { text: 'La llevo a un laboratorio o la entrego a mis superiores para investigación.', points: { pirate: 0, marine: 3, revolutionary: 0, hunter: 1 }, emoji: '🧪' },
        { text: 'La guardo en secreto como carta de triunfo para la revolución.', points: { pirate: 1, marine: 0, revolutionary: 3, hunter: 0 }, emoji: '📦' },
        { text: 'La vendo en el mercado negro por el mayor precio posible.', points: { pirate: 1, marine: 0, revolutionary: 0, hunter: 3 }, emoji: '💸' }
      ]
    },
    {
      text: 'Tus compañeros son arrestados injustamente por un Noble Mundial (Tenryubito)...',
      options: [
        { text: '¡Le rompo la cara de un puñetazo! Nadie toca a mis nakamas.', points: { pirate: 3, marine: 0, revolutionary: 1, hunter: 0 }, emoji: '👊' },
        { text: 'Intento calmar el conflicto diplomáticamente para evitar la ira de un Almirante.', points: { pirate: 0, marine: 3, revolutionary: 0, hunter: 1 }, emoji: '📜' },
        { text: 'Aprovecho la revuelta para incitar a una insurrección a gran escala.', points: { pirate: 1, marine: 0, revolutionary: 3, hunter: 0 }, emoji: '🔥' },
        { text: 'Evito intervenir si no me pagan, pero si hay buen dinero de por medio planificaré un rescate.', points: { pirate: 0, marine: 1, revolutionary: 0, hunter: 3 }, emoji: '🎯' }
      ]
    },
    {
      text: 'En un combate de vida o muerte, ¿cuál es tu estilo principal?',
      options: [
        { text: 'Transformaciones brutales o habilidades impredecibles de una Fruta del Diablo.', points: { pirate: 3, marine: 1, revolutionary: 0, hunter: 0 }, emoji: '🐉' },
        { text: 'Cortes limpios y veloces con espadas legendarias imbuida en Haki.', points: { pirate: 1, marine: 0, revolutionary: 0, hunter: 3 }, emoji: '⚔️' },
        { text: 'Lucha cuerpo a cuerpo apoyada por Haki de flujo (Ryuo) o golpes destructivos.', points: { pirate: 0, marine: 3, revolutionary: 1, hunter: 0 }, emoji: '🥊' },
        { text: 'Tácticas de sigilo, venenos, armas tecnológicas avanzadas y trampas.', points: { pirate: 0, marine: 0, revolutionary: 3, hunter: 1 }, emoji: '⚙️' }
      ]
    },
    {
      text: 'Si descubres el legendario tesoro One Piece y el Siglo Vacío...',
      options: [
        { text: 'Me proclamo Rey de los Piratas y celebro la mayor fiesta del mundo.', points: { pirate: 3, marine: 0, revolutionary: 0, hunter: 1 }, emoji: '👑' },
        { text: 'Clasifico la información y la destruyo por el bien del orden público.', points: { pirate: 0, marine: 3, revolutionary: 0, hunter: 0 }, emoji: '🔒' },
        { text: 'Difundo la verdad a todo el mundo y declaro la guerra final al Gobierno.', points: { pirate: 1, marine: 0, revolutionary: 3, hunter: 0 }, emoji: '📢' },
        { text: 'Utilizo los secretos como chantaje para enriquecer a mi gremio.', points: { pirate: 0, marine: 1, revolutionary: 0, hunter: 3 }, emoji: '💰' }
      ]
    }
  ];

  ngOnInit() {
    // Add logic to listen to model updates or triggers if any.
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 100);
  }

  startQuiz(name: string) {
    if (name && name.trim()) {
      this.userName = name;
      this.started.set(true);
      this.currentQuestionIndex.set(0);
      this.selectedEmojis = [];
      this.scores = { pirate: 0, marine: 0, revolutionary: 0, hunter: 0 };
    }
  }

  selectAnswer(points: { pirate: number; marine: number; revolutionary: number; hunter: number }, emoji: string) {
    this.scores.pirate += points.pirate;
    this.scores.marine += points.marine;
    this.scores.revolutionary += points.revolutionary;
    this.scores.hunter += points.hunter;
    this.selectedEmojis.push(emoji);

    const nextIndex = this.currentQuestionIndex() + 1;
    if (nextIndex < this.questions.length) {
      this.currentQuestionIndex.set(nextIndex);
    } else {
      this.calculateResults();
    }
  }

  calculateResults() {
    // Find the highest score
    const s = this.scores;
    const max = Math.max(s.pirate, s.marine, s.revolutionary, s.hunter);
    
    let faction = 'Pirata';
    let role = 'Capitán de la Peor Generación';
    let avatar = '☠️';
    let baseBounty = 100000000; // 100M

    if (max === s.pirate) {
      faction = 'Pirata';
      role = 'Comandante de Tripulación Yonko';
      avatar = this.selectedEmojis[0] || '☠️';
      baseBounty = 300000000 + Math.floor(Math.random() * 2700000000); // 300M to 3B
    } else if (max === s.marine) {
      faction = 'Marina';
      role = 'Ex-Oficial Desertor / Amenaza al Orden';
      avatar = '🦁';
      baseBounty = 80000000 + Math.floor(Math.random() * 720000000); // 80M to 800M
    } else if (max === s.revolutionary) {
      faction = 'Revolucionario';
      role = 'Líder de Célula Revolucionaria';
      avatar = '✊';
      baseBounty = 500000000 + Math.floor(Math.random() * 3500000000); // 500M to 4B
    } else {
      faction = 'Cazador';
      role = 'Cazarrecompensas de la Peor Fama';
      avatar = '⚔️';
      baseBounty = 150000000 + Math.floor(Math.random() * 1200000000); // 150M to 1.35B
    }

    // Add extra bounty for high choices
    const bonus = (this.scores.pirate * 20000000) + (this.scores.revolutionary * 30000000);
    this.computedBounty.set(baseBounty + bonus);
    this.computedFaction.set(faction);
    this.computedRole.set(role);
    this.computedAvatar.set(avatar);

    this.completed.set(true);
    setTimeout(() => {
      document.querySelectorAll('.reveal-scale').forEach(el => el.classList.add('active'));
    }, 100);
  }

  resetQuiz() {
    this.started.set(false);
    this.completed.set(false);
    this.userName = '';
  }
}

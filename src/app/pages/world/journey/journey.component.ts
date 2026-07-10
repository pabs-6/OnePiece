import { Component, OnDestroy, afterNextRender, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { JourneyService } from '../../../services/journey.service';
import { ArcService } from '../../../services/arc.service';
import { OpEmojiComponent } from '../../../components/op-emoji/op-emoji.component';
import { CHARACTERS } from '../../../data/characters';

interface JourneyStop {
  id: string;
  name: string;
  order: number;
  image?: string;
  hoverImage?: string;
  color: string;
  icon: string;
  crewIds: number[];
}

interface CrewFace {
  id: number;
  name: string;
  face: string;
}

const GOING_MERRY = '/img/journey/goingMerry.png';
const THOUSAND_SUNNY = '/img/journey/thousandSunny.png';
// El Merry se retira justo después de Enies Lobby; a partir de ahí el barco es el Sunny.
const SHIP_CHANGE_AFTER_STOP_ID = 'enies-lobby';

// El East Blue tiene un mar más claro y turquesa; a partir de Reverse Mountain (entrada al Grand Line)
// el fondo vuelve al degradado oscuro habitual.
// Degradado estático que cubre toda la pista de scroll (33 paradas, ~65 vh cada una).
// Los color-stops se calculan proporcionales: East Blue (paradas 1–8 ≈ 0–22%),
// transición hacia Grand Line Paradise (22–27%), Grand Line Paradise sólido (27–58%),
// transición hacia Nuevo Mundo (58–63%), Nuevo Mundo hasta el final (63–100%).
// Al hacer scroll el viewport actúa de ventana: en los límites de zona se ven los dos colores a la vez.
const SEA_GRADIENT =
  'linear-gradient(to bottom,' +
  '#45CFE7 0%, #45CFE7 22%,' +    // East Blue
  '#3090CA 27%, #3090CA 58%,' +   // Grand Line Paradise
  '#04263d 63%, #010c1a 100%)';   // Nuevo Mundo

// Genera un patrón de olas tileable (mismo periodo en x que en el borde derecho del path)
// para usarlo como background-image repetido en ambos ejes: así las olas cubren todo
// el alto del fondo en vez de solo una franja abajo.
const waveTile = (path: string, viewBox: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='${viewBox}'><path d='${path}' fill='white'/></svg>`)}")`;

const CHARACTERS_BY_ID = new Map(CHARACTERS.map(c => [c.id, c]));

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  styles: [`
    @keyframes wave-bg-scroll-1 { from { background-position: 0 0; } to { background-position: -720px 0; } }
    @keyframes wave-bg-scroll-2 { from { background-position: 0 0; } to { background-position: -720px 0; } }
    @keyframes wave-bg-scroll-3 { from { background-position: 0 0; } to { background-position: -480px 0; } }
    .wave-bg-1 { animation: wave-bg-scroll-1 20s linear infinite; }
    .wave-bg-2 { animation: wave-bg-scroll-2 13s linear infinite reverse; }
    .wave-bg-3 { animation: wave-bg-scroll-3 8s  linear infinite; }
  `],
  template: `
    <section class="relative min-h-screen bg-op-dark">

      <!-- Header: fondo fijo, no participa del degradado de agua dinámico -->
      <div class="relative z-20 bg-op-dark pt-32 pb-16 text-center px-4">
        <a routerLink="/world" class="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 text-sm font-mono mb-8 transition-colors">
          <op-emoji symbol="🌍"></op-emoji> Volver a Mundo
        </a>
        <h2 class="font-pirate text-4xl md:text-6xl text-white drop-shadow-lg">
          Ruta de los <span class="gradient-text">Sombrero de Paja</span>
        </h2>
      </div>

      <!-- Mar: a partir de aquí (donde empieza la línea discontinua) el fondo varía según la región -->
      <div class="relative" [style.background]="seaGradient">

        <!-- Oleaje: sticky + height:100vh + margin-bottom:-100vh = sin impacto en layout,
             siempre visible en viewport mientras se hace scroll por la sección de mar.
             Las 3 capas cubren todo el alto (background-repeat tileado), quedando SIEMPRE
             detrás de paradas/textos (z-10) gracias a su z-index más bajo. -->
        <div style="position:sticky; top:0; height:100vh; margin-bottom:-100vh; pointer-events:none; z-index:2; overflow:hidden;">
          <!-- Capa 1: más lenta, olas grandes -->
          <div class="wave-bg-1" [style.backgroundImage]="waveBg1"
               style="position:absolute; inset:0; background-repeat:repeat; background-size:720px 80px; opacity:0.08;"></div>
          <!-- Capa 2: velocidad media, fase inversa (va en sentido contrario) -->
          <div class="wave-bg-2" [style.backgroundImage]="waveBg2"
               style="position:absolute; inset:0; background-repeat:repeat; background-size:720px 55px; opacity:0.10;"></div>
          <!-- Capa 3: más rápida, olas cortas -->
          <div class="wave-bg-3" [style.backgroundImage]="waveBg3"
               style="position:absolute; inset:0; background-repeat:repeat; background-size:480px 35px; opacity:0.06;"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 pb-40">

        <!-- Línea discontinua central -->
        <div class="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l-4 border-dashed border-red-500/80 z-0"></div>

        <!-- Barco de la tripulación, fijo en el centro vertical del viewport mientras se hace scroll -->
        <div class="pointer-events-none sticky z-30 flex justify-center" style="top: 50vh;">
          <div class="relative pointer-events-auto -translate-y-1/2"
               (mouseenter)="shipHovered.set(true)"
               (mouseleave)="shipHovered.set(false)">
            <img [src]="shipImage()" alt="Barco de los Mugiwara" class="block w-16 sm:w-24 md:w-32 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">

            <!-- Bocadillo con las caras de la tripulación activa en esta parada del viaje -->
            <div class="absolute top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ease-out"
                 [ngClass]="[
                   bubbleOnRight() ? 'left-full ml-3 sm:ml-4' : 'right-full mr-3 sm:mr-4',
                   shipHovered() ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
                 ]">
              <div class="relative bg-op-cream rounded-2xl shadow-2xl border-2 border-op-gold px-2 py-1.5 sm:px-3 sm:py-2 flex flex-wrap content-start gap-1 sm:gap-1.5"
                   [ngClass]="bubbleWidthClass()">
                <div class="absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] sm:border-y-8 border-y-transparent"
                     [ngClass]="bubbleOnRight() ? '-left-[6px] sm:-left-2 border-r-[6px] sm:border-r-8 border-r-op-cream' : '-right-[6px] sm:-right-2 border-l-[6px] sm:border-l-8 border-l-op-cream'">
                </div>
                @for (member of activeCrew(); track member.id) {
                  <img [src]="member.face" [alt]="member.name" [title]="member.name"
                       class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover">
                }
              </div>
            </div>
          </div>
        </div>

        <!-- Paradas -->
        @for (stop of stops(); track stop.id; let i = $index) {
          <div class="journey-stop relative z-10 flex items-center"
               style="min-height: 65vh;"
               [attr.data-id]="stop.id"
               [ngClass]="i % 2 === 0 ? 'justify-start' : 'justify-end'">

            <!-- Punto exacto de la parada sobre la línea: solo se "alcanza" cuando el barco está justo encima -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 rounded-full transition-all duration-300"
                 [ngClass]="activeId() === stop.id
                   ? 'w-5 h-5 bg-yellow-400 border-2 border-yellow-200 shadow-[0_0_14px_rgba(250,204,21,0.9)]'
                   : 'w-3 h-3 bg-op-dark border-2 border-red-500/70'">
            </div>

            <div class="w-[44%] sm:w-[36%] flex flex-col items-center text-center transition-all duration-500 ease-out"
                 [ngClass]="activeId() === stop.id ? 'scale-110 opacity-100' : 'scale-[0.85] opacity-60'">

              @if (stop.image && !failedIds().has(stop.id)) {
                <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img [src]="stop.image" [alt]="stop.name"
                       (error)="onImgError(stop.id)"
                       class="absolute inset-0 w-full h-full object-contain"
                       [ngClass]="stop.hoverImage ? 'transition-opacity duration-1000 ease-in-out group-hover:opacity-0' : ''">
                  @if (stop.hoverImage) {
                    <img [src]="stop.hoverImage" [alt]="stop.name"
                         class="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                  }
                </div>
              } @else {
                <div class="w-full aspect-[4/3] rounded-2xl border-2 border-white/10 flex items-center justify-center text-6xl bg-gradient-to-br"
                     [ngClass]="stop.color">
                  <op-emoji [symbol]="stop.icon"></op-emoji>
                </div>
              }

              <p class="mt-4 font-pirate text-lg md:text-2xl text-white drop-shadow-lg">{{ stop.name }}</p>
            </div>
          </div>
        }
        </div>
      </div>
    </section>
  `
})
export class JourneyComponent implements OnDestroy {
  private journeyService = inject(JourneyService);
  private arcService = inject(ArcService);

  readonly seaGradient = SEA_GRADIENT;

  readonly waveBg1 = waveTile('M0,40 C90,0 270,0 360,40 C450,80 630,80 720,40 L720,80 L0,80 Z', '0 0 720 80');
  readonly waveBg2 = waveTile('M0,27 C90,55 270,55 360,27 C450,0 630,0 720,27 L720,55 L0,55 Z', '0 0 720 55');
  readonly waveBg3 = waveTile('M0,17 C60,0 180,0 240,17 C300,35 420,35 480,17 L480,35 L0,35 Z', '0 0 480 35');

  stops = signal<JourneyStop[]>([]);
  activeId = signal<string | null>(null);
  failedIds = signal<Set<string>>(new Set());
  shipHovered = signal(false);

  shipImage = computed(() => {
    const all = this.stops();
    const active = all.find(s => s.id === this.activeId());
    const changeoverStop = all.find(s => s.id === SHIP_CHANGE_AFTER_STOP_ID);
    if (!active || !changeoverStop) return GOING_MERRY;
    return active.order <= changeoverStop.order ? GOING_MERRY : THOUSAND_SUNNY;
  });


  // Las paradas alternan el lado en el que muestran su imagen (par => izquierda, impar => derecha);
  // el bocadillo se coloca siempre en el lado contrario para no solaparse con ella.
  private activeIndex = computed(() => this.stops().findIndex(s => s.id === this.activeId()));
  bubbleOnRight = computed(() => this.activeIndex() % 2 === 0);

  activeCrew = computed((): CrewFace[] => {
    const all = this.stops();
    const active = all.find(s => s.id === this.activeId());
    if (!active) return [];
    return active.crewIds.map(id => {
      const character = CHARACTERS_BY_ID.get(id);
      return { id, name: character?.name ?? '', face: character?.face ?? character?.img ?? '' };
    });
  });

  // Ancho del bocadillo ajustado a cuántas caras hay que mostrar, para que no quede
  // un hueco enorme cuando la tripulación está reducida (p.ej. Luffy solo en Marineford).
  bubbleWidthClass = computed(() => {
    const count = this.activeCrew().length;
    if (count <= 1) return 'w-9 sm:w-12 md:w-14';
    if (count === 2) return 'w-16 sm:w-20 md:w-24';
    if (count <= 4) return 'w-24 sm:w-32 md:w-40';
    return 'w-24 sm:w-40 md:w-52';
  });

  private observer?: IntersectionObserver;

  constructor() {
    combineLatest([this.journeyService.getAll(), this.arcService.getAll()])
      .pipe(
        map(([locations, arcs]): JourneyStop[] => locations.map(loc => {
          const arc = arcs.find(a => a.id === loc.arcId);
          return {
            id: loc.id,
            name: loc.name,
            order: loc.order,
            image: loc.image,
            hoverImage: loc.hoverImage,
            color: arc?.color ?? 'from-gray-700 to-gray-900',
            icon: arc?.icon ?? '🗺️',
            crewIds: loc.crewIds,
          };
        }))
      )
      .subscribe(stops => {
        this.stops.set(stops);
        if (stops.length) this.activeId.set(stops[0].id);
      });

    // Espera a que Angular haya confirmado el render de las paradas en el DOM
    // antes de observarlas (un setTimeout(0) llegaba demasiado pronto).
    afterNextRender(() => this.setupObserver());
  }

  private setupObserver() {
    this.observer?.disconnect();
    // Línea de intersección de altura 0 en el centro exacto del viewport:
    // la parada que la cruza en cada momento es la "activa".
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeId.set(entry.target.getAttribute('data-id'));
        }
      });
    }, { threshold: 0, rootMargin: '-50% 0px -50% 0px' });

    document.querySelectorAll('.journey-stop').forEach(el => this.observer!.observe(el));
  }

  onImgError(id: string) {
    this.failedIds.update(set => new Set(set).add(id));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}

import { Component, OnDestroy, afterNextRender, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { JourneyService } from '../../../services/journey.service';
import { ArcService } from '../../../services/arc.service';
import { OpEmojiComponent } from '../../../components/op-emoji/op-emoji.component';

interface JourneyStop {
  id: string;
  name: string;
  order: number;
  image?: string;
  color: string;
  icon: string;
}

const GOING_MERRY = '/img/journey/goingMerry.png';
const THOUSAND_SUNNY = '/img/journey/thousandSunny.png';
// El Merry se retira justo después de Enies Lobby; a partir de ahí el barco es el Sunny.
const SHIP_CHANGE_AFTER_STOP_ID = 'enies-lobby';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  template: `
    <section class="relative min-h-screen" style="background: linear-gradient(180deg, #04263d 0%, #0a4d7a 45%, #136a9e 100%);">

      <!-- Header -->
      <div class="relative z-20 pt-32 pb-16 text-center px-4">
        <a routerLink="/world" class="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 text-sm font-mono mb-8 transition-colors">
          <op-emoji symbol="🌍"></op-emoji> Volver a Mundo
        </a>
        <h2 class="font-pirate text-4xl md:text-6xl text-white drop-shadow-lg">
          Ruta de los <span class="gradient-text">Sombrero de Paja</span>
        </h2>
      </div>

      <!-- Scroll track -->
      <div class="relative max-w-2xl mx-auto px-4 pb-40">

        <!-- Línea discontinua central -->
        <div class="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l-4 border-dashed border-red-500/80 z-0"></div>

        <!-- Barco de la tripulación, fijo en el centro vertical del viewport mientras se hace scroll -->
        <div class="pointer-events-none sticky z-30 flex justify-center" style="top: 50vh;">
          <img [src]="shipImage()" alt="Barco de los Mugiwara" class="w-16 sm:w-24 md:w-32 -translate-y-1/2 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
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

            <div class="w-[58%] sm:w-[44%] flex flex-col items-center text-center transition-all duration-500 ease-out"
                 [ngClass]="activeId() === stop.id ? 'scale-105 opacity-100' : 'scale-90 opacity-60'">

              @if (stop.image && !failedIds().has(stop.id)) {
                <img [src]="stop.image" [alt]="stop.name"
                     (error)="onImgError(stop.id)"
                     class="w-full aspect-square object-cover rounded-2xl shadow-2xl border-2 border-white/10">
              } @else {
                <div class="w-full aspect-square rounded-2xl shadow-2xl border-2 border-white/10 flex items-center justify-center text-6xl bg-gradient-to-br"
                     [ngClass]="stop.color">
                  <op-emoji [symbol]="stop.icon"></op-emoji>
                </div>
              }

              <p class="mt-4 font-pirate text-lg md:text-2xl text-white drop-shadow-lg">{{ stop.name }}</p>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class JourneyComponent implements OnDestroy {
  private journeyService = inject(JourneyService);
  private arcService = inject(ArcService);

  stops = signal<JourneyStop[]>([]);
  activeId = signal<string | null>(null);
  failedIds = signal<Set<string>>(new Set());

  shipImage = computed(() => {
    const all = this.stops();
    const active = all.find(s => s.id === this.activeId());
    const changeoverStop = all.find(s => s.id === SHIP_CHANGE_AFTER_STOP_ID);
    if (!active || !changeoverStop) return GOING_MERRY;
    return active.order <= changeoverStop.order ? GOING_MERRY : THOUSAND_SUNNY;
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
            color: arc?.color ?? 'from-gray-700 to-gray-900',
            icon: arc?.icon ?? '🗺️',
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

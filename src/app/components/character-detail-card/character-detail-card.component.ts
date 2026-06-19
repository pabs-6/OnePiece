import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../services/character.service';
import { OpEmojiComponent } from '../op-emoji/op-emoji.component';
import {
  getPowerColor as powerColor,
  getPowerTextColor as powerTextColor,
  nextCharacterImageFallback
} from '../../utils/character-visuals';

@Component({
  selector: 'app-character-detail-card',
  standalone: true,
  imports: [CommonModule, OpEmojiComponent],
  template: `
    <!-- Character image banner -->
    <div class="relative h-56 overflow-hidden rounded-t-2xl bg-gradient-to-br" [ngClass]="character.color">
      <img [src]="character.img" [alt]="character.name"
           class="w-full h-full object-cover object-top opacity-80"
           (error)="handleImgError($event)">
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
      <div class="absolute bottom-4 left-6 right-12">
        <p class="text-yellow-400 text-xs font-mono mb-1">{{ character.epithet }}</p>
        <h2 class="text-3xl font-pirate font-bold text-white drop-shadow-lg">{{ character.name }}</h2>
      </div>
      <div class="absolute top-4 left-4">
        <span class="bg-black/50 text-gray-300 text-xs font-mono px-3 py-1 rounded-full border border-gray-700">#{{ character.id }}</span>
      </div>
    </div>

    <!-- Body -->
    <div class="p-6 space-y-5">

      <!-- Badges -->
      <div class="flex flex-wrap gap-2">
        <span class="bg-blue-900/50 border border-blue-500/40 text-blue-300 text-xs px-3 py-1.5 rounded-full font-bold">{{ character.role }}</span>
        <span class="bg-gray-800 border border-gray-600/40 text-gray-300 text-xs px-3 py-1.5 rounded-full font-bold">{{ character.crew }}</span>
      </div>

      <!-- Description -->
      <p class="text-gray-300 leading-relaxed text-base">{{ character.description }}</p>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-black/40 rounded-xl p-4 border border-white/5">
          <p class="text-gray-500 text-xs font-mono mb-1">RECOMPENSA</p>
          <p class="text-yellow-400 font-pirate font-bold text-lg">฿ {{ character.bounty }}</p>
        </div>
        <div class="bg-black/40 rounded-xl p-4 border border-white/5">
          <p class="text-gray-500 text-xs font-mono mb-2">NIVEL DE PODER</p>
          <div class="flex items-center gap-2">
            <div class="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div class="h-full rounded-full" [ngClass]="getPowerColor(character.power_level)" [style.width.%]="character.power_level"></div>
            </div>
            <span class="font-bold text-sm" [ngClass]="getPowerTextColor(character.power_level)">{{ character.power_level }}</span>
          </div>
        </div>
      </div>

      <!-- Devil Fruit -->
      <div *ngIf="character.devil_fruit !== 'Ninguna'"
           class="flex items-center gap-3 bg-gradient-to-r from-purple-900/40 to-transparent rounded-xl px-4 py-3 border-l-4 border-purple-500">
        <op-emoji symbol="🍎" class="text-2xl"></op-emoji>
        <div>
          <p class="text-gray-500 text-xs font-mono">FRUTA DEL DIABLO</p>
          <p class="text-purple-300 font-bold">{{ character.devil_fruit }}</p>
        </div>
      </div>

      <!-- Haki -->
      <div *ngIf="character.haki.length > 0"
           class="flex items-start gap-3 bg-gradient-to-r from-red-900/40 to-transparent rounded-xl px-4 py-3 border-l-4 border-red-500">
        <op-emoji symbol="⚡" class="text-2xl mt-1"></op-emoji>
        <div>
          <p class="text-gray-500 text-xs font-mono mb-2">TIPOS DE HAKI</p>
          <div class="flex flex-wrap gap-2">
            <span *ngFor="let h of character.haki"
                  class="text-xs text-red-300 bg-red-900/60 px-3 py-1 rounded-full font-bold border border-red-500/30">{{ h }}</span>
          </div>
        </div>
      </div>

      <!-- No powers -->
      <div *ngIf="character.devil_fruit === 'Ninguna' && character.haki.length === 0"
           class="flex items-center gap-3 bg-gray-800/40 rounded-xl px-4 py-3 border border-gray-700/40">
        <op-emoji symbol="💪" class="text-2xl"></op-emoji>
        <p class="text-gray-400 text-sm">Combatiente sin poderes sobrenaturales — fuerza pura.</p>
      </div>
    </div>
  `
})
export class CharacterDetailCardComponent {
  @Input({ required: true }) character!: Character;

  readonly getPowerColor = powerColor;
  readonly getPowerTextColor = powerTextColor;

  handleImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    const next = nextCharacterImageFallback(img.src, this.character);
    if (next) img.src = next;
  }
}

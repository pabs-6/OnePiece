import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHARACTERS, Character } from '../../data/characters';
import { OpEmojiComponent } from '../../components/op-emoji/op-emoji.component';

// Alternative image sources per character name keyword
const FALLBACK_IMAGES: Record<string, string> = {
  'Luffy':    'https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png',
  'Zoro':     'https://static.wikia.nocookie.net/onepiece/images/1/15/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png',
  'Nami':     'https://static.wikia.nocookie.net/onepiece/images/1/1c/Nami_Anime_Post_Timeskip_Infobox.png',
  'Usopp':    'https://static.wikia.nocookie.net/onepiece/images/5/5f/Usopp_Anime_Post_Timeskip_Infobox.png',
  'Sanji':    'https://static.wikia.nocookie.net/onepiece/images/e/e2/Sanji_Anime_Post_Timeskip_Infobox.png',
  'Chopper':  'https://static.wikia.nocookie.net/onepiece/images/d/d1/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png',
  'Robin':    'https://static.wikia.nocookie.net/onepiece/images/5/5c/Nico_Robin_Anime_Post_Timeskip_Infobox.png',
  'Franky':   'https://static.wikia.nocookie.net/onepiece/images/c/ca/Franky_Anime_Post_Timeskip_Infobox.png',
  'Brook':    'https://static.wikia.nocookie.net/onepiece/images/8/8e/Brook_Anime_Post_Timeskip_Infobox.png',
  'Jinbe':    'https://static.wikia.nocookie.net/onepiece/images/a/a3/Jinbe_Anime_Post_Timeskip_Infobox.png',
};

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, OpEmojiComponent],
  styles: [`
    .modal-backdrop { animation: fadeIn 0.25s ease; }
    .modal-panel    { animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
    @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
    @keyframes slideUp { from{opacity:0;transform:translateY(40px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
    .img-loading { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); }
  `],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-op-dark to-op-navy min-h-screen relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16 reveal">
          <p class="text-blue-400 font-mono text-sm tracking-widest mb-2"><op-emoji symbol="⚓"></op-emoji> DATABASE COMPLETA</p>
          <h2 class="font-pirate text-5xl md:text-6xl text-white mb-4 section-title">
            <span class="gradient-text">Enciclopedia</span> de Personajes
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">250+ personajes clave de One Piece: Mugiwaras, Yonkos, Shichibukai, Marines y villanos del Gobierno Mundial. Haz clic en cualquier personaje para ver más detalles.</p>
        </div>

        <!-- Filter / Search -->
        <div class="flex flex-wrap gap-4 justify-center mb-12 reveal delay-100">
          <input 
            type="text" 
            placeholder="Buscar personaje (ej: Luffy, Kaido)..." 
            class="bg-gray-900/80 border border-gray-700 rounded-full px-6 py-3 text-white w-full max-w-md focus:border-yellow-500 outline-none transition-colors shadow-2xl"
            (input)="onSearch($event)"
          >
          <select 
            class="bg-gray-900/80 border border-gray-700 rounded-full px-6 py-3 text-white outline-none focus:border-yellow-500 shadow-2xl cursor-pointer"
            (change)="onFilter($event)"
          >
            <option value="All">Todas las facciones / Roles</option>
            <optgroup label="TRIPULACIONES">
              <option value="Piratas del Sombrero de Paja">Mugiwaras</option>
              <option value="Piratas de Barbanegra">Piratas de Barbanegra</option>
              <option value="Piratas del Pelirrojo">Piratas del Pelirrojo</option>
              <option value="Piratas de las Bestias">Piratas de las Bestias</option>
              <option value="Piratas de Big Mom">Piratas de Big Mom</option>
              <option value="Cross Guild">Cross Guild</option>
              <option value="Barto Club">Barto Club</option>
              <option value="Piratas Hermosos">Piratas Hermosos</option>
              <option value="Armada Happo">Armada Happo</option>
              <option value="Nuevos Piratas Gigantes de Elbaf">Nuevos Piratas Gigantes</option>
              <option value="Tonta Corps (Tontatta)">Tonta Corps</option>
              <option value="Piratas de Bellamy">Piratas de Bellamy</option>
              <option value="Piratas de Foxy">Piratas de Foxy</option>
              <option value="Piratas de Caribou">Piratas de Caribou</option>
            </optgroup>
            <optgroup label="ORGANIZACIONES / REINOS">
              <option value="Marina">Marina</option>
              <option value="Ejército Revolucionario">Ejército Revolucionario</option>
              <option value="Baroque Works">Baroque Works</option>
              <option value="CP0">CP0 / CP9</option>
              <option value="Impel Down">Impel Down</option>
              <option value="Reino de Ryugu">Reino de Ryugu</option>
              <option value="Reino de Arabasta">Reino de Arabasta</option>
            </optgroup>
            <optgroup label="ARCOS / ALIADOS">
              <option value="Aliado Wano">Wano Kuni</option>
              <option value="Aliado Dressrosa">Dressrosa</option>
              <option value="Supernova">Supernovas</option>
            </optgroup>
          </select>
        </div>

        <!-- Results count -->
        <div class="text-center mb-8 reveal">
          <span class="text-gray-500 font-mono text-sm">Mostrando <strong class="text-yellow-400">{{ filteredCharacters.length }}</strong> de {{ allCharacters.length }} personajes</span>
        </div>

        <!-- Characters Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div *ngFor="let char of filteredCharacters; let i = index" 
               class="reveal-scale card-hover rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-900 to-slate-950 group cursor-pointer" 
               [style.transitionDelay]="((i % 8) * 0.05) + 's'"
               (click)="openModal(char)">
            <!-- Character Image -->
            <div class="relative h-64 overflow-hidden bg-gradient-to-br img-loading" [ngClass]="char.color">
              <img [src]="char.img" [alt]="char.name" 
                   class="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                   (error)="handleError($event, char)">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>

              <!-- Bounty badge -->
              <div class="absolute bottom-3 left-3 right-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div class="wanted-poster rounded px-2 py-1 text-center shadow-lg">
                  <p class="text-[9px] font-bold font-mono uppercase tracking-tighter" style="color:#1a0a00;">RECOMPENSA / BOUNTY</p>
                  <p class="text-sm font-black font-pirate tracking-wider truncate" style="color:#8B1A1A;">฿ {{ char.bounty }}</p>
                </div>
              </div>
            </div>

            <!-- Character Info -->
            <div class="p-5">
              <div class="mb-4">
                <div class="flex justify-between items-start">
                  <h3 class="font-bold text-white text-lg leading-tight group-hover:text-yellow-400 transition-colors line-clamp-1">{{ char.name }}</h3>
                  <span class="text-xs text-gray-500 font-mono">#{{ char.id }}</span>
                </div>
                <p class="text-yellow-500 text-xs font-mono mt-1 italic">{{ char.epithet }}</p>
                <div class="flex flex-wrap items-center gap-1.5 mt-3">
                  <span class="bg-blue-900/40 border border-blue-500/30 text-blue-300 text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-tight">{{ char.role }}</span>
                  <span class="bg-gray-800/80 border border-gray-600/30 text-gray-400 text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-tight">{{ char.crew }}</span>
                </div>
              </div>

              <p class="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 h-15">{{ char.description }}</p>

              <!-- Power Level -->
              <div class="mb-4 bg-black/40 p-3 rounded-lg border border-white/5 group-hover:border-yellow-500/20 transition-colors">
                <div class="flex justify-between text-xs mb-1.5">
                  <span class="text-gray-500 font-mono">Nivel de Poder</span>
                  <span class="font-bold" [ngClass]="getPowerTextColor(char.power_level)">{{ char.power_level }}/100</span>
                </div>
                <div class="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-1000" [ngClass]="getPowerColor(char.power_level)" [style.width.%]="char.power_level"></div>
                </div>
              </div>

              <!-- Extra tags -->
              <div class="flex flex-col gap-2">
                <div *ngIf="char.devil_fruit !== 'Ninguna'" class="flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-transparent rounded px-2 py-1 border-l-2 border-purple-500 group-hover:from-purple-900/50 transition-all">
                  <op-emoji symbol="🍎" class="text-sm"></op-emoji><span class="text-[11px] text-purple-300 font-semibold truncate">{{ char.devil_fruit }}</span>
                </div>
                <div *ngIf="char.haki.length > 0" class="flex items-center gap-2 bg-gradient-to-r from-red-900/30 to-transparent rounded px-2 py-1 border-l-2 border-red-500 group-hover:from-red-900/50 transition-all">
                  <op-emoji symbol="⚡" class="text-sm"></op-emoji>
                  <div class="flex flex-wrap gap-1">
                    <span *ngFor="let h of char.haki" class="text-[9px] text-red-300 bg-red-900/50 px-1.5 py-0.5 rounded-sm font-bold border border-red-500/20">{{ h }}</span>
                  </div>
                </div>
              </div>

              <!-- CTA hint -->
              <div class="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
                <span class="text-xs text-gray-600 font-mono">Click para ver más</span>
                <span class="text-yellow-500 text-xs font-bold group-hover:text-yellow-300 transition-colors">→</span>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div *ngIf="filteredCharacters.length === 0" class="text-center py-32 reveal animation-pulse">
          <op-emoji symbol="🏜️" class="text-6xl mb-6 block"></op-emoji>
          <h3 class="text-3xl font-bold text-white mb-2">No se encontraron piratas</h3>
          <p class="text-gray-400">Prueba con otro nombre o cambia el filtro de facción.</p>
        </div>
      </div>
    </section>

    <!-- ===== MODAL PERSONAJE ===== -->
    <div *ngIf="activeChar"
         class="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
         (click)="closeModal()">
      <div class="modal-panel relative bg-gradient-to-b from-gray-900 to-slate-950 border border-yellow-700/30 rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto"
           (click)="$event.stopPropagation()">

        <!-- Close btn -->
        <button (click)="closeModal()" 
                class="absolute top-4 right-4 z-20 text-gray-400 hover:text-white bg-gray-800/80 hover:bg-gray-700 rounded-full w-9 h-9 flex items-center justify-center text-xl transition-all hover:scale-110">
          ✕
        </button>

        <!-- Character image banner -->
        <div class="relative h-56 overflow-hidden rounded-t-2xl bg-gradient-to-br" [ngClass]="activeChar!.color">
          <img [src]="activeChar!.img" [alt]="activeChar!.name" 
               class="w-full h-full object-cover object-top opacity-80"
               (error)="handleError($event, activeChar!)">
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
          <div class="absolute bottom-4 left-6 right-12">
            <p class="text-yellow-400 text-xs font-mono mb-1">{{ activeChar!.epithet }}</p>
            <h2 class="text-3xl font-pirate font-bold text-white drop-shadow-lg">{{ activeChar!.name }}</h2>
          </div>
          <div class="absolute top-4 left-4">
            <span class="bg-black/50 text-gray-300 text-xs font-mono px-3 py-1 rounded-full border border-gray-700">#{{ activeChar!.id }}</span>
          </div>
        </div>

        <!-- Modal body -->
        <div class="p-6 space-y-5">

          <!-- Badges -->
          <div class="flex flex-wrap gap-2">
            <span class="bg-blue-900/50 border border-blue-500/40 text-blue-300 text-xs px-3 py-1.5 rounded-full font-bold">{{ activeChar!.role }}</span>
            <span class="bg-gray-800 border border-gray-600/40 text-gray-300 text-xs px-3 py-1.5 rounded-full font-bold">{{ activeChar!.crew }}</span>
          </div>

          <!-- Description -->
          <p class="text-gray-300 leading-relaxed text-base">{{ activeChar!.description }}</p>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-black/40 rounded-xl p-4 border border-white/5">
              <p class="text-gray-500 text-xs font-mono mb-1">RECOMPENSA</p>
              <p class="text-yellow-400 font-pirate font-bold text-lg">฿ {{ activeChar!.bounty }}</p>
            </div>
            <div class="bg-black/40 rounded-xl p-4 border border-white/5">
              <p class="text-gray-500 text-xs font-mono mb-2">NIVEL DE PODER</p>
              <div class="flex items-center gap-2">
                <div class="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div class="h-full rounded-full" [ngClass]="getPowerColor(activeChar!.power_level)" [style.width.%]="activeChar!.power_level"></div>
                </div>
                <span class="font-bold text-sm" [ngClass]="getPowerTextColor(activeChar!.power_level)">{{ activeChar!.power_level }}</span>
              </div>
            </div>
          </div>

          <!-- Devil Fruit -->
          <div *ngIf="activeChar!.devil_fruit !== 'Ninguna'" 
               class="flex items-center gap-3 bg-gradient-to-r from-purple-900/40 to-transparent rounded-xl px-4 py-3 border-l-4 border-purple-500">
            <op-emoji symbol="🍎" class="text-2xl"></op-emoji>
            <div>
              <p class="text-gray-500 text-xs font-mono">FRUTA DEL DIABLO</p>
              <p class="text-purple-300 font-bold">{{ activeChar!.devil_fruit }}</p>
            </div>
          </div>

          <!-- Haki -->
          <div *ngIf="activeChar!.haki.length > 0"
               class="flex items-start gap-3 bg-gradient-to-r from-red-900/40 to-transparent rounded-xl px-4 py-3 border-l-4 border-red-500">
            <op-emoji symbol="⚡" class="text-2xl mt-1"></op-emoji>
            <div>
              <p class="text-gray-500 text-xs font-mono mb-2">TIPOS DE HAKI</p>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let h of activeChar!.haki" 
                      class="text-xs text-red-300 bg-red-900/60 px-3 py-1 rounded-full font-bold border border-red-500/30">{{ h }}</span>
              </div>
            </div>
          </div>

          <!-- No powers -->
          <div *ngIf="activeChar!.devil_fruit === 'Ninguna' && activeChar!.haki.length === 0"
               class="flex items-center gap-3 bg-gray-800/40 rounded-xl px-4 py-3 border border-gray-700/40">
            <op-emoji symbol="💪" class="text-2xl"></op-emoji>
            <p class="text-gray-400 text-sm">Combatiente sin poderes sobrenaturales — fuerza pura.</p>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-5 border-t border-gray-800 flex justify-end">
          <button (click)="closeModal()"
                  class="px-6 py-2.5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 text-black font-bold rounded-full transition-all hover:scale-105 text-sm">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  `
})
export class CharactersComponent implements OnInit {
  allCharacters = CHARACTERS;
  filteredCharacters = CHARACTERS;
  activeChar: Character | null = null;
  
  searchTerm: string = '';
  selectedFaction: string = 'All';

  ngOnInit() {
    this.applyFilters();
    setTimeout(() => {
      this.triggerAnimations();
    }, 100);
  }

  onSearch(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.applyFilters();
  }

  onFilter(event: any) {
    this.selectedFaction = event.target.value;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredCharacters = this.allCharacters.filter(char => {
      const matchesSearch = char.name.toLowerCase().includes(this.searchTerm) || 
                            char.epithet.toLowerCase().includes(this.searchTerm) ||
                            char.description.toLowerCase().includes(this.searchTerm);
      
      const matchesFaction = this.selectedFaction === 'All' || 
                             char.crew === this.selectedFaction || 
                             char.role.includes(this.selectedFaction);
      
      return matchesSearch && matchesFaction;
    });

    setTimeout(() => this.triggerAnimations(), 50);
  }

  triggerAnimations() {
    document.querySelectorAll('.reveal, .reveal-scale').forEach(el => {
      el.classList.add('active');
    });
  }

  openModal(char: Character) {
    this.activeChar = char;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.activeChar = null;
    document.body.style.overflow = '';
  }

  handleError(event: any, char: Character) {
    // Try static.wikia.nocookie.net (CDN mirror) first
    const originalSrc = event.target.src as string;
    
    if (originalSrc.includes('onepiece.fandom.com')) {
      // Extract filename and try the CDN mirror
      const filename = originalSrc.split('/').pop() || '';
      event.target.src = `https://static.wikia.nocookie.net/onepiece/images/thumb/${filename}/revision/latest/scale-to-width-down/300`;
      return;
    }

    if (originalSrc.includes('static.wikia.nocookie.net')) {
      // Try a known alternative: via.placeholder styled
      event.target.src = this.getPlaceholder(char.name, char.color);
      return;
    }
  }

  private getPlaceholder(name: string, color: string): string {
    // Generate a styled placeholder
    const bgColors: Record<string, string> = {
      'from-red': 'C0392B', 'from-green': '27AE60', 'from-blue': '2980B9',
      'from-yellow': 'F39C12', 'from-purple': '8E44AD', 'from-orange': 'E67E22',
      'from-pink': 'E91E63', 'from-teal': '00BCD4', 'from-indigo': '3F51B5',
      'from-gray': '607D8B', 'from-amber': 'FF8F00', 'from-cyan': '00ACC1',
      'from-violet': '7C3AED', 'from-fuchsia': 'D81B60', 'from-rose': 'E53935',
      'from-emerald': '2E7D32', 'from-lime': '827717', 'from-sky': '0288D1',
    };
    
    let bg = '1a1a2e';
    for (const [key, val] of Object.entries(bgColors)) {
      if (color.includes(key)) { bg = val; break; }
    }
    
    return `https://via.placeholder.com/400x600/${bg}/F39C12?text=${encodeURIComponent(name.split(' ')[0])}`;
  }

  getPowerColor(n: number): string {
    if (n >= 95) return 'bg-gradient-to-r from-red-600 to-orange-500';
    if (n >= 85) return 'bg-gradient-to-r from-orange-500 to-yellow-500';
    if (n >= 75) return 'bg-gradient-to-r from-yellow-500 to-green-500';
    return 'bg-gradient-to-r from-blue-500 to-cyan-500';
  }

  getPowerTextColor(n: number): string {
    if (n >= 95) return 'text-red-500';
    if (n >= 85) return 'text-orange-400';
    if (n >= 75) return 'text-yellow-400';
    return 'text-blue-400';
  }
}

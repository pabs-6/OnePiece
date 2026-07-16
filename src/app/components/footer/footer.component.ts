import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="bg-black border-t border-yellow-900/30 pt-16 pb-8 mt-20 text-gray-500 text-sm">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Ko-fi Support Section -->
        <div class="relative rounded-2xl overflow-hidden mb-12 p-8 text-center"
             style="background: linear-gradient(135deg, rgba(255,94,91,0.08) 0%, rgba(255,140,66,0.05) 100%); border: 1px solid rgba(255,94,91,0.2);">
          <div class="absolute top-0 left-0 right-0 h-px"
               style="background: linear-gradient(90deg, transparent, rgba(255,94,91,0.5), transparent)"></div>
          <div class="text-4xl mb-3">☕</div>
          <h3 class="text-white font-bold text-xl mb-2">¿Disfrutas el contenido?</h3>
          <p class="text-gray-400 mb-6 max-w-md mx-auto">
            Este proyecto es completamente gratuito y sin ánimo de lucro. Si te resulta útil,
            puedes invitarme un café para mantenerlo actualizado. ¡Cada apoyo cuenta! 🙌
          </p>
          <a href="https://ko-fi.com/TU_USUARIO_KOFI"
             target="_blank"
             rel="noopener noreferrer"
             id="kofi-btn-footer"
             class="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
             style="background: linear-gradient(135deg, #FF5E5B 0%, #FF8C42 100%); box-shadow: 0 0 30px rgba(255,94,91,0.25);">
            <span class="text-xl">☕</span>
            <span>Apóyame en Ko-fi</span>
          </a>
        </div>

        <!-- Footer Links Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-yellow-900/20">
          <div>
            <h4 class="text-yellow-400 font-bold font-mono text-xs tracking-widest uppercase mb-4">Explorar</h4>
            <ul class="space-y-2">
              <li><a routerLink="/characters" class="hover:text-yellow-400 transition-colors cursor-pointer">👤 Personajes</a></li>
              <li><a routerLink="/factions" class="hover:text-yellow-400 transition-colors cursor-pointer">🏴‍☠️ Facciones</a></li>
              <li><a routerLink="/fruits" class="hover:text-yellow-400 transition-colors cursor-pointer">🍎 Frutas del Diablo</a></li>
              <li><a routerLink="/world" class="hover:text-yellow-400 transition-colors cursor-pointer">🌍 El Mundo</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-yellow-400 font-bold font-mono text-xs tracking-widest uppercase mb-4">Más Contenido</h4>
            <ul class="space-y-2">
              <li><a routerLink="/versus" class="hover:text-yellow-400 transition-colors cursor-pointer">⚔️ Versus</a></li>
              <li><a routerLink="/haki-meito" class="hover:text-yellow-400 transition-colors cursor-pointer">⚡ Haki / Espadas</a></li>
              <li><a routerLink="/wanted" class="hover:text-yellow-400 transition-colors cursor-pointer">🎫 Carteles Wanted</a></li>
              <li><a routerLink="/theories" class="hover:text-yellow-400 transition-colors cursor-pointer">💡 Teorías</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-yellow-400 font-bold font-mono text-xs tracking-widest uppercase mb-4">Apoya</h4>
            <ul class="space-y-2">
              <li>
                <a href="https://ko-fi.com/TU_USUARIO_KOFI" target="_blank" rel="noopener noreferrer"
                   class="hover:text-orange-400 transition-colors cursor-pointer flex items-center gap-1">
                  ☕ Ko-fi
                </a>
              </li>
              <li>
                <a href="https://www.amazon.es/?tag=TU_TAG_AFILIADO" target="_blank" rel="noopener noreferrer sponsored"
                   class="hover:text-yellow-400 transition-colors cursor-pointer flex items-center gap-1">
                  🛒 Merchandise
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-yellow-400 font-bold font-mono text-xs tracking-widest uppercase mb-4">Oficial</h4>
            <ul class="space-y-2">
              <li>
                <a href="https://mangaplus.shueisha.co.jp/titles/100020" target="_blank" rel="noopener noreferrer"
                   class="hover:text-blue-400 transition-colors cursor-pointer">📖 Manga Plus</a>
              </li>
              <li>
                <a href="https://www.crunchyroll.com/es/one-piece" target="_blank" rel="noopener noreferrer"
                   class="hover:text-orange-400 transition-colors cursor-pointer">📺 Crunchyroll</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div class="flex items-center gap-2">
            <span class="text-lg">☠️</span>
            <span><strong class="text-gray-500">One Piece Universe</strong> © 2026 · Hecho por pxbs</span>
          </div>
          <div class="text-center text-gray-700 max-w-xl">
            Fan site no oficial. One Piece es propiedad de Eiichiro Oda / Shueisha / Toei Animation.
            Todo el contenido se comparte con fines educativos y sin ánimo de lucro.
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {}


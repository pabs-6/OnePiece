import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-black border-t border-yellow-900/30 py-12 mt-20 text-gray-500 text-sm">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p>One Piece Universe © 2026. Hecho por pxbs.</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}

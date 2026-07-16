import { Component, Input, OnInit, AfterViewInit, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

@Component({
  selector: 'app-ad-banner',
  standalone: true,
  template: `
    <div class="ad-wrapper relative my-6 rounded-xl overflow-hidden" [class]="wrapperClass">
      <!-- AdSense ins tag (active when Publisher ID is configured) -->
      @if (publisherId !== 'ca-pub-XXXXXXXXXXXXXXXXX') {
        <ins class="adsbygoogle"
             style="display:block"
             [attr.data-ad-client]="publisherId"
             [attr.data-ad-slot]="slot"
             [attr.data-ad-format]="adFormat"
             data-full-width-responsive="true">
        </ins>
      } @else {
        <!-- Placeholder visual (mientras configuras AdSense) -->
        <div class="ad-placeholder flex items-center justify-center gap-4 border border-dashed rounded-xl px-6 py-4"
             [class]="placeholderClass">
          <div class="flex-shrink-0 text-2xl opacity-60">📢</div>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-mono tracking-widest uppercase mb-0.5" style="color: rgba(255,200,50,0.4)">Espacio Publicitario</p>
            <p class="text-xs truncate" style="color: rgba(255,255,255,0.2)">Google AdSense · Slot {{ slot }} · {{ formatLabel }}</p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-[10px] font-bold px-2 py-1 rounded-full border"
                  style="border-color:rgba(255,200,50,0.2); color:rgba(255,200,50,0.35)">AD</span>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .ad-wrapper { transition: opacity 0.3s ease; }
    .ad-placeholder {
      background: linear-gradient(135deg, rgba(255,200,50,0.03) 0%, rgba(0,0,0,0) 100%);
      border-color: rgba(255, 200, 50, 0.12);
      min-height: 60px;
    }
    .ad-placeholder:hover {
      border-color: rgba(255, 200, 50, 0.2);
      background: linear-gradient(135deg, rgba(255,200,50,0.05) 0%, rgba(0,0,0,0) 100%);
    }
  `]
})
export class AdBannerComponent implements OnInit, AfterViewInit {
  /** Slot ID del anuncio de AdSense (obtenido en tu cuenta de AdSense) */
  @Input() slot: string = '0000000000';

  /** Formato del anuncio */
  @Input() format: 'horizontal' | 'square' | 'vertical' = 'horizontal';

  /**
   * Tu Publisher ID de Google AdSense.
   * Reemplaza 'ca-pub-XXXXXXXXXXXXXXXXX' con tu ID real cuando tengas cuenta.
   * Ejemplo: 'ca-pub-1234567890123456'
   */
  @Input() publisherId: string = 'ca-pub-XXXXXXXXXXXXXXXXX';

  private platformId = inject(PLATFORM_ID);
  private el = inject(ElementRef);

  get adFormat(): string {
    return this.format === 'horizontal' ? 'auto' : this.format === 'square' ? 'rectangle' : 'vertical';
  }

  get formatLabel(): string {
    const labels = { horizontal: 'Banner Horizontal', square: 'Rectángulo', vertical: 'Vertical' };
    return labels[this.format];
  }

  get wrapperClass(): string {
    const classes: Record<string, string> = {
      horizontal: 'w-full',
      square: 'max-w-sm mx-auto',
      vertical: 'max-w-xs mx-auto'
    };
    return classes[this.format] || 'w-full';
  }

  get placeholderClass(): string {
    const classes: Record<string, string> = {
      horizontal: 'w-full',
      square: 'w-full aspect-square flex-col text-center',
      vertical: 'w-full min-h-[250px] flex-col text-center'
    };
    return classes[this.format] || 'w-full';
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && this.publisherId !== 'ca-pub-XXXXXXXXXXXXXXXXX') {
      this.loadAdSenseScript();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && this.publisherId !== 'ca-pub-XXXXXXXXXXXXXXXXX') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.warn('AdSense init error:', e);
      }
    }
  }

  private loadAdSenseScript(): void {
    if (document.getElementById('adsense-script')) return;
    const script = document.createElement('script');
    script.id = 'adsense-script';
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.publisherId}`;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }
}

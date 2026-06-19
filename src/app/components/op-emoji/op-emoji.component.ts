import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMOJI_MAP, EmojiIcon } from './op-emoji.icons';

@Component({
  selector: 'op-emoji',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="op-emoji-container inline-flex items-center justify-center align-middle" [ngClass]="className">
      <svg *ngIf="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [class]="icon.class">
        <ng-container *ngFor="let shape of icon.shapes">
          <path *ngIf="shape.tag === 'path'"
                [attr.d]="shape.d"
                [attr.fill]="shape.fill"
                [attr.stroke]="shape.stroke"
                [attr.stroke-width]="shape.strokeWidth"
                [attr.stroke-linecap]="shape.strokeLinecap"
                [attr.stroke-linejoin]="shape.strokeLinejoin"
                [attr.opacity]="shape.opacity" />
          <circle *ngIf="shape.tag === 'circle'"
                  [attr.cx]="shape.cx"
                  [attr.cy]="shape.cy"
                  [attr.r]="shape.r"
                  [attr.fill]="shape.fill"
                  [attr.stroke]="shape.stroke"
                  [attr.stroke-width]="shape.strokeWidth"
                  [attr.opacity]="shape.opacity" />
          <rect *ngIf="shape.tag === 'rect'"
                [attr.x]="shape.x"
                [attr.y]="shape.y"
                [attr.width]="shape.width"
                [attr.height]="shape.height"
                [attr.rx]="shape.rx"
                [attr.fill]="shape.fill"
                [attr.stroke]="shape.stroke"
                [attr.stroke-width]="shape.strokeWidth"
                [attr.transform]="shape.transform" />
          <polygon *ngIf="shape.tag === 'polygon'"
                   [attr.points]="shape.points"
                   [attr.fill]="shape.fill" />
        </ng-container>
      </svg>
      <span *ngIf="!icon" class="op-coin inline-block px-1.5 py-0.5 rounded-full border border-yellow-500/40 bg-gradient-to-br from-yellow-500/20 to-amber-500/10 text-xs font-mono font-bold select-none text-yellow-400 shadow-[0_0_8px_rgba(243,156,18,0.3)] transform hover:scale-110 transition-transform duration-300">
        {{ symbol }}
      </span>
    </span>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
    }
    .op-emoji-container {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.25em;
      height: 1.25em;
    }
    svg {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
    .op-coin {
      box-shadow: inset 0 0 4px rgba(243, 156, 18, 0.4), 0 2px 4px rgba(0,0,0,0.5);
      text-shadow: 0 0 4px rgba(243, 156, 18, 0.5);
    }
  `]
})
export class OpEmojiComponent {
  @Input() symbol: string = '';
  @Input('class') className: string = '';

  get icon(): EmojiIcon | null {
    return EMOJI_MAP[this.normalize(this.symbol)] ?? null;
  }

  normalize(sym: string): string {
    if (!sym) return '';
    // Strip variation selectors or standard modifier characters for cleaner matching
    return sym.trim();
  }
}

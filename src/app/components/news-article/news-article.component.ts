import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsBlock } from '../../data/news';
import { RichTextComponent } from '../rich-text/rich-text.component';

@Component({
  selector: 'app-news-article',
  standalone: true,
  imports: [CommonModule, RichTextComponent],
  template: `
    <ng-container *ngFor="let block of blocks">
      <h4 *ngIf="block.type === 'subtitle'">{{ block.text }}</h4>

      <p *ngIf="block.type === 'paragraph'">
        <app-rich-text [segments]="block.content"></app-rich-text>
      </p>

      <ul *ngIf="block.type === 'list'">
        <li *ngFor="let item of block.items">
          <app-rich-text [segments]="item"></app-rich-text>
        </li>
      </ul>

      <figure *ngIf="block.type === 'image'">
        <img [src]="block.src" [alt]="block.alt">
        <figcaption *ngIf="block.caption">{{ block.caption }}</figcaption>
      </figure>
    </ng-container>
  `
})
export class NewsArticleComponent {
  @Input() blocks: NewsBlock[] = [];
}

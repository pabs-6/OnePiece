import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextSegment } from '../../data/news';

@Component({
  selector: 'app-rich-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngFor="let seg of segments">
      <strong *ngIf="seg.bold">{{ seg.text }}</strong>
      <em *ngIf="seg.italic">{{ seg.text }}</em>
      <ng-container *ngIf="!seg.bold && !seg.italic">{{ seg.text }}</ng-container>
    </ng-container>
  `
})
export class RichTextComponent {
  @Input() segments: RichTextSegment[] = [];
}

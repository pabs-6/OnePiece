import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NEWS } from '../../data/news';
import { CHAPTERS } from '../../data/chapters';
import { OpEmojiComponent } from '../../components/op-emoji/op-emoji.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  templateUrl: './home.component.html',
  styles: [`
    .modal-backdrop {
      animation: fadeIn 0.25s ease;
    }
    .modal-panel {
      animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0)   scale(1);    }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  news = NEWS;
  chapters = CHAPTERS;

  // Modal state
  activeModal: any = null;

  private scrollObserver!: IntersectionObserver;

  ngOnInit() {
    if ('IntersectionObserver' in window) {
      this.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('active');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

      setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-scale').forEach(el => {
          this.scrollObserver.observe(el);
        });
      }, 300);
    }
  }

  ngOnDestroy() {
    if (this.scrollObserver) this.scrollObserver.disconnect();
    document.body.style.overflow = '';
  }

  openModal(item: any) {
    this.activeModal = item;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.activeModal = null;
    document.body.style.overflow = '';
  }

  getStars(n: number): number[] { return Array(n).fill(0); }
  getEmptyStars(n: number): number[] { return Array(10 - n).fill(0); }
}

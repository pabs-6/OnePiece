import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NEWS } from '../../data/news';
import { CHAPTERS } from '../../data/chapters';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  news = NEWS;
  chapters = CHAPTERS;

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
  }

  getStars(n: number): number[] { return Array(n).fill(0); }
  getEmptyStars(n: number): number[] { return Array(10 - n).fill(0); }
}

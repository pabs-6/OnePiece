import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent],
  template: `
    <!-- Top Progress Bar -->
    <div class="progress-bar" [style.width.%]="scrollProgress"></div>
    <app-navbar></app-navbar>

    <!-- Main Content Routed -->
    <main class="min-h-screen">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  scrollProgress = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  }
}

import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OpEmojiComponent } from '../op-emoji/op-emoji.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, OpEmojiComponent],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur"
         [class.bg-op-dark]="navScrolled" [class.bg-opacity-95]="navScrolled"
         [class.border-b]="navScrolled" [class.border-yellow-900]="navScrolled"
         [ngClass]="navScrolled ? 'py-2 shadow-2xl' : 'py-4'">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-3 cursor-pointer group">
          <div class="relative">
            <op-emoji symbol="☠️" class="text-3xl animate-spin-slow inline-block"></op-emoji>
            <div class="absolute -inset-1 bg-yellow-500/20 rounded-full blur animate-pulse-slow"></div>
          </div>
          <div>
            <h1 class="font-pirate text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 leading-none">ONE PIECE</h1>
            <p class="text-xs text-gray-400 font-mono">UNIVERSE DATABASE</p>
          </div>
        </a>

        <!-- Desktop Nav -->
        <ul class="hidden md:flex items-center gap-1">
          <li *ngFor="let link of links">
            <a [routerLink]="link.path"
               routerLinkActive="text-yellow-400 bg-yellow-500/10"
               [routerLinkActiveOptions]="{exact: link.path === '/'}"
               class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-400 hover:bg-yellow-500/10">
              <op-emoji [symbol]="link.icon"></op-emoji>{{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button (click)="menuOpen = !menuOpen" class="md:hidden text-2xl text-yellow-400 relative z-50">
          <span *ngIf="!menuOpen">☰</span><span *ngIf="menuOpen">✕</span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="menuOpen" class="md:hidden absolute top-full left-0 right-0 bg-op-dark/95 nav-blur border-t border-yellow-900/50 px-4 py-4">
        <ul class="flex flex-col gap-2">
          <li *ngFor="let link of links">
            <a [routerLink]="link.path" (click)="menuOpen = false" class="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-yellow-500/10 hover:text-yellow-400 text-gray-200">
              <op-emoji [symbol]="link.icon" class="text-xl"></op-emoji>{{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  navScrolled = false;
  menuOpen = false;
  links = [
    { label: 'Inicio', path: '/', icon: '🏠' },
    { label: 'Personajes', path: '/characters', icon: '👤' },
    { label: 'Facciones', path: '/factions', icon: '🏴‍☠️' },
    { label: 'Frutas', path: '/fruits', icon: '🍎' },
    { label: 'Mundo', path: '/world', icon: '🌍' },
    { label: 'Wanted', path: '/wanted', icon: '🎫' },
    { label: 'Versus', path: '/versus', icon: '⚔️' },
    { label: 'Haki/Espadas', path: '/haki-meito', icon: '⚡' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.navScrolled = window.scrollY > 80;
  }
}

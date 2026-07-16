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

          <!-- Ko-fi Button (Desktop) -->
          <li class="ml-2">
            <a href="https://ko-fi.com/TU_USUARIO_KOFI"
               target="_blank"
               rel="noopener noreferrer"
               id="kofi-btn-desktop"
               class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
               style="background: linear-gradient(135deg, #FF5E5B 0%, #FF8C42 100%); color: white; box-shadow: 0 0 15px rgba(255,94,91,0.3);"
               title="Apoya el proyecto en Ko-fi">
              <span style="font-size:1rem;">☕</span>
              <span>Apóyame</span>
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
          <!-- Ko-fi (Mobile) -->
          <li class="mt-2 pt-2 border-t border-yellow-900/30">
            <a href="https://ko-fi.com/TU_USUARIO_KOFI"
               target="_blank"
               rel="noopener noreferrer"
               id="kofi-btn-mobile"
               (click)="menuOpen = false"
               class="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-bold transition-all duration-300"
               style="background: linear-gradient(135deg, rgba(255,94,91,0.15), rgba(255,140,66,0.15)); border: 1px solid rgba(255,94,91,0.3); color: #FF8C42;">
              <span class="text-xl">☕</span>
              <div>
                <div>Apoya el Proyecto</div>
                <div class="text-xs font-normal opacity-70">Ko-fi · ¡Invítame un café!</div>
              </div>
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

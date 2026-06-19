import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CharacterService, Character } from '../../../services/character.service';
import { CharacterDetailCardComponent } from '../../../components/character-detail-card/character-detail-card.component';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, CharacterDetailCardComponent],
  template: `
    <section class="pt-32 pb-24 bg-gradient-to-b from-op-dark to-op-navy min-h-screen relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-2xl mx-auto px-4 relative z-10">
        <a routerLink="/characters" class="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm font-mono mb-8 transition-colors">
          ← Volver a Personajes
        </a>

        <div *ngIf="character" class="bg-gradient-to-b from-gray-900 to-slate-950 border border-yellow-700/30 rounded-2xl shadow-2xl overflow-hidden">
          <app-character-detail-card [character]="character"></app-character-detail-card>
        </div>
      </div>
    </section>
  `
})
export class CharacterDetailComponent implements OnChanges {
  @Input() slug!: string;
  character: Character | null = null;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['slug']) {
      this.loadCharacter();
    }
  }

  private loadCharacter() {
    this.characterService.getBySlug(this.slug).subscribe(character => {
      if (!character) {
        this.router.navigate(['/characters']);
        return;
      }
      this.character = character;
      this.title.setTitle(`${character.name} | One Piece Universe`);
      this.meta.updateTag({ name: 'description', content: character.description });
    });
  }
}

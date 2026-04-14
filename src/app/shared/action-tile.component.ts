import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-action-tile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a class="btn btn-s action-tile" [routerLink]="['/', route()]">
      <span class="action-icon" [innerHTML]="safeIcon"></span>
      <span>{{ label() }}</span>
      <svg
        class="btn-arr"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </a>
  `
})
export class ActionTileComponent {
  readonly label = input.required<string>();
  readonly route = input.required<string>();
  readonly icon = input.required<string>();

  constructor(private readonly sanitizer: DomSanitizer) {}

  get safeIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.icon());
  }
}

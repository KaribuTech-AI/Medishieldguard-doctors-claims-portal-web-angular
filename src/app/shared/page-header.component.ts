import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pg-head">
      <div class="pg-title">{{ title() }}</div>
      <div class="pg-sub">{{ subtitle() }}</div>
    </div>
  `
})
export class PageHeaderComponent {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
}

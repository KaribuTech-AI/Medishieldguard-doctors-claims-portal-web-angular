import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <button
      *ngIf="route(); else staticCard"
      type="button"
      class="metric metric-button"
      [class.ok-tone]="tone() === 'ok'"
      [class.warn-tone]="tone() === 'warn'"
      [class.danger-tone]="tone() === 'danger'"
      [class.sky-tone]="tone() === 'sky'"
      [routerLink]="['/', route()]">
      <div class="metric-lbl">{{ label() }}</div>
      <div class="metric-val" [class]="tone()">{{ value() }}</div>
      <div class="metric-sub" [class]="tone()">{{ subtitle() }}</div>
    </button>

    <ng-template #staticCard>
      <div
        class="metric"
        [class.ok-tone]="tone() === 'ok'"
        [class.warn-tone]="tone() === 'warn'"
        [class.danger-tone]="tone() === 'danger'"
        [class.sky-tone]="tone() === 'sky'">
        <div class="metric-lbl">{{ label() }}</div>
        <div class="metric-val" [class]="tone()">{{ value() }}</div>
        <div class="metric-sub" [class]="tone()">{{ subtitle() }}</div>
      </div>
    </ng-template>
  `
})
export class MetricCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly tone = input<'ok' | 'warn' | 'danger' | 'sky' | ''>('');
  readonly route = input<string | null>(null);
}

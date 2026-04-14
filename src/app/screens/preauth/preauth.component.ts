import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { activePreauths, pendingPreauths, preauthSummaryMetrics, type PreauthCard } from '../../data/portal-data';
import { MetricCardComponent } from '../../shared/metric-card.component';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-preauth-screen',
  standalone: true,
  imports: [CommonModule, MetricCardComponent, PageHeaderComponent],
  templateUrl: './preauth.component.html'
})
export class PreauthScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'preauth';

  readonly summaryMetrics = preauthSummaryMetrics;
  readonly activeItems = activePreauths;
  readonly pendingItems = pendingPreauths;

  constructor(private readonly sanitizer: DomSanitizer) {
    super();
  }

  icon(card: PreauthCard): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(card.iconPath);
  }

  openRequest(): void {
    this.uiState.showToast('Pre-authorisation request form opened');
    void this.router.navigateByUrl('/submit');
  }
}

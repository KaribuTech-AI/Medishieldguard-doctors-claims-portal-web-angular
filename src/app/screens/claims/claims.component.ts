import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { claimsRows, claimsSummaryMetrics, claimsTabs, type ClaimRow, type ClaimsTab } from '../../data/portal-data';
import { MetricCardComponent } from '../../shared/metric-card.component';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-claims-screen',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent, MetricCardComponent],
  templateUrl: './claims.component.html'
})
export class ClaimsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'claims';

  readonly summaryMetrics = claimsSummaryMetrics;
  readonly tabs = claimsTabs;
  readonly rows = claimsRows;
  activeTab: ClaimsTab['key'] = 'all';

  selectTab(tab: ClaimsTab['key']): void {
    this.activeTab = tab;
  }

  visibleRows(): ClaimRow[] {
    if (this.activeTab === 'all') {
      return this.rows;
    }
    return this.rows.filter((row) => row.filter === this.activeTab);
  }
}

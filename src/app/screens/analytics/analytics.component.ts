import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { analyticsCategories, analyticsMonthlyBars, analyticsSummaryMetrics, analyticsTopIcdCodes } from '../../data/portal-data';
import { MetricCardComponent } from '../../shared/metric-card.component';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-analytics-screen',
  standalone: true,
  imports: [CommonModule, MetricCardComponent, PageHeaderComponent],
  templateUrl: './analytics.component.html'
})
export class AnalyticsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'analytics';

  readonly summaryMetrics = analyticsSummaryMetrics;
  readonly monthlyBars = analyticsMonthlyBars;
  readonly categories = analyticsCategories;
  readonly topCodes = analyticsTopIcdCodes;
}

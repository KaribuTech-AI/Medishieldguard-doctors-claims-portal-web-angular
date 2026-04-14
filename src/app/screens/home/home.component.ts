import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  dashboardMetrics,
  homeAlerts,
  quickActions,
  recentClaims,
  upcomingPayments,
  type RecentClaim
} from '../../data/portal-data';
import { ActionTileComponent } from '../../shared/action-tile.component';
import { MetricCardComponent } from '../../shared/metric-card.component';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent, MetricCardComponent, ActionTileComponent],
  templateUrl: './home.component.html'
})
export class HomeScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'home';

  readonly alerts = homeAlerts;
  readonly metrics = dashboardMetrics;
  readonly actions = quickActions;
  readonly claims = recentClaims;
  readonly payments = upcomingPayments;

  constructor(private readonly sanitizer: DomSanitizer) {
    super();
  }

  claimIcon(claim: RecentClaim): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(claim.iconPath);
  }
}

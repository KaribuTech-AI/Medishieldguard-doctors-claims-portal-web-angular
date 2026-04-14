import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { notificationSections, type NotificationItem } from '../../data/portal-data';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-notifications-screen',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './notifications.component.html'
})
export class NotificationsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'notifications';

  readonly sections = notificationSections;

  constructor(private readonly sanitizer: DomSanitizer) {
    super();
  }

  markAllRead(): void {
    this.uiState.showToast('All notifications marked as read');
  }

  icon(item: NotificationItem): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(item.iconPath);
  }
}

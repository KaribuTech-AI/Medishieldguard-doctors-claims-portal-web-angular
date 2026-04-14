import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  settingsClaimTypeOptions,
  settingsDateFormatOptions,
  settingsIntegrationToggles,
  settingsNotificationToggles,
  settingsSessionOptions
} from '../../data/portal-data';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-settings-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeaderComponent],
  templateUrl: './settings.component.html'
})
export class SettingsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'settings';

  notificationToggles = settingsNotificationToggles.map((item) => ({ ...item }));
  integrationToggles = settingsIntegrationToggles.map((item) => ({ ...item }));
  readonly claimTypeOptions = settingsClaimTypeOptions;
  readonly dateFormatOptions = settingsDateFormatOptions;
  readonly sessionOptions = settingsSessionOptions;

  preferences = {
    claimType: this.claimTypeOptions[0]?.value ?? '',
    dateFormat: this.dateFormatOptions[0]?.value ?? '',
    sessionTimeout: '60 minutes'
  };

  toggleSetting(title: string, enabled: boolean): void {
    this.uiState.showToast(`${title} ${enabled ? 'enabled' : 'disabled'}`);
  }

  savePreferences(): void {
    this.uiState.showToast('Settings saved');
  }
}

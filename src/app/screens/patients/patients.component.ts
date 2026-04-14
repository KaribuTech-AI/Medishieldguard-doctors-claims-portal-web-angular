import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { patientBenefitBreakdown, patientRecentClaims } from '../../data/portal-data';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-patients-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeaderComponent],
  templateUrl: './patients.component.html'
})
export class PatientsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'patients';

  readonly benefitBreakdown = patientBenefitBreakdown;
  readonly recentClaims = patientRecentClaims;
  searchValue = '';
  hasSearched = false;

  search(): void {
    this.hasSearched = this.searchValue.trim().length > 0;
    this.uiState.showToast(this.hasSearched ? 'Patient record loaded' : 'Enter a policy or ID number');
  }
}

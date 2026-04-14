import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dependantOptions, placeOfServiceOptions, submitClaimTypes } from '../../data/portal-data';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-submit-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeaderComponent],
  templateUrl: './submit.component.html'
})
export class SubmitScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'submit';

  readonly dependantOptions = dependantOptions;
  readonly claimTypes = submitClaimTypes;
  readonly placeOfServiceOptions = placeOfServiceOptions;

  form = {
    policyNumber: '',
    dependant: 'main',
    serviceDate: '2026-04-14',
    claimType: '',
    icdPrimary: '',
    icdSecondary: '',
    procedureCodes: '',
    clinicalNotes: '',
    placeOfService: 'Consulting rooms',
    amount: 0,
    referringProvider: '',
    confirm: false
  };

  get memberFound(): boolean {
    return this.form.policyNumber.trim().length >= 6;
  }

  get billedAmount(): string {
    return `R ${Number(this.form.amount || 0).toFixed(2)}`;
  }

  uploadDocuments(): void {
    this.uiState.showToast('Upload queue opened');
  }

  override submitNewClaim(): void {
    if (!this.form.confirm) {
      this.uiState.showToast('Please confirm the declaration checkbox');
      return;
    }

    if (!this.form.policyNumber || !this.form.claimType || !this.form.icdPrimary || !this.form.procedureCodes) {
      this.uiState.showToast('Complete the required claim fields first');
      return;
    }

    const ref = `CLM-2026-${Math.floor(Math.random() * 900 + 100)}`;
    this.uiState.setClaimSuccessRef(ref);
    this.uiState.showToast('Claim submitted successfully');
    void this.router.navigateByUrl('/claim-success');
  }
}

import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiStateService {
  readonly toastMessage = signal('');
  readonly toastVisible = signal(false);
  readonly claimSuccessRef = signal('CLM-2026-0229');

  private toastTimer?: ReturnType<typeof setTimeout>;

  showToast(message: string): void {
    this.toastMessage.set(message);
    this.toastVisible.set(true);
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }
    this.toastTimer = setTimeout(() => this.toastVisible.set(false), 3500);
  }

  setClaimSuccessRef(reference: string): void {
    this.claimSuccessRef.set(reference);
  }
}

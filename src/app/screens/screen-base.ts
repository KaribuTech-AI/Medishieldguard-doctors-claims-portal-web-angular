import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UiStateService } from '../ui-state.service';

@Directive()
export abstract class ScreenBaseComponent implements AfterViewInit {
  @HostBinding('class.screen') readonly screenClass = true;
  @HostBinding('class.active') readonly activeClass = true;

  protected readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  protected readonly router = inject(Router);
  protected readonly uiState = inject(UiStateService);

  protected abstract readonly screenId: string;

  ngAfterViewInit(): void {
    queueMicrotask(() => this.afterRender());
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    const target = event.target as HTMLElement | null;
    if (!target) {
      return;
    }

    const actionable = target.closest<HTMLElement>('[data-go],[data-toast],[data-action]');
    if (!actionable) {
      return;
    }

    const go = actionable.dataset['go'];
    const toast = actionable.dataset['toast'];
    const action = actionable.dataset['action'];

    if (go) {
      void this.router.navigateByUrl(`/${go}`);
      return;
    }

    if (toast) {
      this.handleUtilityAction(actionable, toast);
      this.uiState.showToast(toast);
      return;
    }

    switch (action) {
      case 'toggle-self':
        actionable.classList.toggle('on');
        this.uiState.showToast(actionable.classList.contains('on') ? 'Setting enabled' : 'Setting disabled');
        break;
      case 'select-tab':
        this.host.nativeElement.querySelectorAll<HTMLElement>('.tab').forEach((tab: HTMLElement) => tab.classList.remove('on'));
        actionable.classList.add('on');
        this.filterClaimRows(actionable.textContent?.trim() ?? '');
        break;
      case 'show-patient-result':
        this.toggleDisplay('pat-result', true);
        this.uiState.showToast('Patient results loaded');
        break;
      case 'submit-new-claim':
        this.submitNewClaim();
        break;
      default:
        break;
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const target = event.target as HTMLElement | null;
    if (!target) {
      return;
    }

    const input = target.closest<HTMLElement>('[data-input]');
    const action = input?.dataset['input'];

    switch (action) {
      case 'lookup-member':
        this.lookupMember();
        break;
      case 'update-new-claim-preview':
        this.updateNewClaimPreview();
        break;
      case 'filter-icd':
        this.filterIcd();
        break;
      default:
        break;
    }
  }

  protected afterRender(): void {
    if (this.screenId === 'claim-success') {
      const refEl = this.host.nativeElement.querySelector<HTMLElement>('#claimSuccessRef');
      if (refEl) {
        refEl.textContent = this.uiState.claimSuccessRef();
      }
    }

    if (this.screenId === 'submit') {
      this.lookupMember();
      this.updateNewClaimPreview();
    }
  }

  protected lookupMember(): void {
    const policy = this.host.nativeElement.querySelector<HTMLInputElement>('#nc-policy');
    const card = this.host.nativeElement.querySelector<HTMLElement>('#nc-member-card');
    if (policy && card) {
      card.style.display = policy.value.trim().length >= 6 ? 'block' : 'none';
    }
  }

  protected updateNewClaimPreview(): void {
    const amountInput = this.host.nativeElement.querySelector<HTMLInputElement>('#nc-amount');
    const billed = this.host.nativeElement.querySelector<HTMLElement>('#nc-prev-amt');
    const estimate = this.host.nativeElement.querySelector<HTMLElement>('#nc-prev-est');
    const amount = amountInput ? Number.parseFloat(amountInput.value) || 0 : 0;
    const formatted = `R ${amount.toFixed(2)}`;
    if (billed) {
      billed.textContent = formatted;
    }
    if (estimate) {
      estimate.textContent = formatted;
    }
  }

  protected filterIcd(): void {
    const input = this.host.nativeElement.querySelector<HTMLInputElement>('#icd-search');
    const rows = this.host.nativeElement.querySelectorAll<HTMLTableRowElement>('#icd-table tbody tr');
    const query = input?.value.toLowerCase() ?? '';
    rows.forEach((row: HTMLTableRowElement) => {
      row.style.display = row.textContent?.toLowerCase().includes(query) ? '' : 'none';
    });
  }

  protected submitNewClaim(): void {
    const checkbox = this.host.nativeElement.querySelector<HTMLInputElement>('#nc-confirm');
    if (!checkbox?.checked) {
      this.uiState.showToast('Please confirm the declaration checkbox');
      return;
    }

    const ref = `CLM-2026-0${Math.floor(Math.random() * 900 + 229)}`;
    this.uiState.setClaimSuccessRef(ref);
    void this.router.navigateByUrl('/claim-success');
  }

  protected handleUtilityAction(actionable: HTMLElement, toast: string): void {
    const label = actionable.textContent?.trim() ?? '';
    if (/download|pdf|csv|statement|template/i.test(label) || /downloading/i.test(toast)) {
      this.downloadStub(label || 'download', toast);
    }
  }

  protected filterClaimRows(activeTab: string): void {
    if (this.screenId !== 'claims') {
      return;
    }

    const rows = this.host.nativeElement.querySelectorAll<HTMLTableRowElement>('.tbl tbody tr');
    const mode = activeTab.toLowerCase();

    rows.forEach((row: HTMLTableRowElement) => {
      const text = row.textContent?.toLowerCase() ?? '';
      let show = true;

      if (mode.includes('pending')) {
        show = text.includes('under review') || text.includes('docs needed');
      } else if (mode.includes('approved')) {
        show = text.includes('approved') || text.includes('paid');
      } else if (mode.includes('rejected')) {
        show = text.includes('rejected');
      }

      row.style.display = show ? '' : 'none';
    });
  }

  protected downloadStub(label: string, description: string): void {
    const content = `${label}\n${description}\nGenerated from medishieldguard Doctors Claims Portal`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'download'}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  }

  protected toggleDisplay(id: string, show: boolean): void {
    const element = this.host.nativeElement.querySelector<HTMLElement>(`#${id}`);
    if (element) {
      element.style.display = show ? 'block' : 'none';
    }
  }
}

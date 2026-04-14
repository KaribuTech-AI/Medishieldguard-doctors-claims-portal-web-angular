import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { navSections, type NavSection } from './portal.config';
import { UiStateService } from './ui-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);

  readonly uiState = inject(UiStateService);
  readonly navSections: Array<NavSection & { items: Array<NavSection['items'][number] & { safeIcon: SafeHtml }> }> =
    navSections.map((section) => ({
      ...section,
      items: section.items.map((item) => ({
        ...item,
        safeIcon: this.sanitizer.bypassSecurityTrustHtml(item.icon)
      }))
    }));
  currentTitle = 'Dashboard';

  readonly toastMessage = computed(() => this.uiState.toastMessage());
  readonly toastVisible = computed(() => this.uiState.toastVisible());

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let route = this.activatedRoute;
      while (route.firstChild) {
        route = route.firstChild;
      }
      this.currentTitle = route.snapshot.data['title'] ?? 'Dashboard';
    });
  }
}

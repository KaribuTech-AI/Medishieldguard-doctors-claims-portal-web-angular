import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-audit-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audit.component.html'
})
export class AuditScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'audit';
}

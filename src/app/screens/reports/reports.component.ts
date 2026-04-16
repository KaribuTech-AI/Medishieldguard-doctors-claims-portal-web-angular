import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-reports-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html'
})
export class ReportsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'reports';
}

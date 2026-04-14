import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-benefits-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html'
})
export class BenefitsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'benefits';
}

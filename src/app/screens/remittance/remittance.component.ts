import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-remittance-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remittance.component.html'
})
export class RemittanceScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'remittance';
}

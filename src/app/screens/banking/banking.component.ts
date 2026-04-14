import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-banking-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banking.component.html'
})
export class BankingScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'banking';
}

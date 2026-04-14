import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-payhistory-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payhistory.component.html'
})
export class PayhistoryScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'payhistory';
}

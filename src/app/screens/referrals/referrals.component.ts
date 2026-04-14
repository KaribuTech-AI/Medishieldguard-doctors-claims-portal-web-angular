import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-referrals-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referrals.component.html'
})
export class ReferralsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'referrals';
}

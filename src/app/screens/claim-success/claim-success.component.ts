import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-claim-success-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-success.component.html'
})
export class ClaimSuccessScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'claim-success';
}

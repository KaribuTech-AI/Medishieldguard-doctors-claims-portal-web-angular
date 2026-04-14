import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-claim-detail-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-detail.component.html'
})
export class ClaimDetailScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'claim-detail';
}

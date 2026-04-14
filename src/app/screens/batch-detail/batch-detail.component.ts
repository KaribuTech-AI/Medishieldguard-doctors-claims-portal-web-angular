import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-batch-detail-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-detail.component.html'
})
export class BatchDetailScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'batch-detail';
}

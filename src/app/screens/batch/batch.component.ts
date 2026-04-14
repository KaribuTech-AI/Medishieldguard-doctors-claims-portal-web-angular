import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-batch-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch.component.html'
})
export class BatchScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'batch';
}

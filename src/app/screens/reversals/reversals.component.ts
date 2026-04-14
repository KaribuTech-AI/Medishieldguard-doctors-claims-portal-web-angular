import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-reversals-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reversals.component.html'
})
export class ReversalsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'reversals';
}

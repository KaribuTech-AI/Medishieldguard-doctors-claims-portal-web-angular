import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-support-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './support.component.html'
})
export class SupportScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'support';
}

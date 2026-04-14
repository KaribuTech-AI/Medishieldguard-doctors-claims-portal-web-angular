import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-rejections-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rejections.component.html'
})
export class RejectionsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'rejections';
}

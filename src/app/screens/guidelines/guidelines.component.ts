import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-guidelines-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guidelines.component.html'
})
export class GuidelinesScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'guidelines';
}

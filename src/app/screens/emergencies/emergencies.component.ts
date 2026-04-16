import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-emergencies-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emergencies.component.html'
})
export class EmergenciesScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'emergencies';
}

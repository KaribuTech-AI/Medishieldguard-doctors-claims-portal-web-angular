import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-calendar-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html'
})
export class CalendarScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'calendar';
}

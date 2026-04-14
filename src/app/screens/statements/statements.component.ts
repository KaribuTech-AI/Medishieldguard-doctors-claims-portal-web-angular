import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-statements-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statements.component.html'
})
export class StatementsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'statements';
}

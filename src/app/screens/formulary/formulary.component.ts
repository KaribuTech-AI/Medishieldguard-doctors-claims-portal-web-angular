import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-formulary-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulary.component.html'
})
export class FormularyScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'formulary';
}

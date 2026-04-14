import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-tariffs-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tariffs.component.html'
})
export class TariffsScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'tariffs';
}

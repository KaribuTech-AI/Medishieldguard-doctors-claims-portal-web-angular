import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-dsp-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dsp.component.html'
})
export class DspScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'dsp';
}

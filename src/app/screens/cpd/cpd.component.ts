import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-cpd-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cpd.component.html'
})
export class CpdScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'cpd';
}

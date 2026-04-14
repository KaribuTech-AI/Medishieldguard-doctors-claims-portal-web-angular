import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-icd-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icd.component.html'
})
export class IcdScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'icd';
}

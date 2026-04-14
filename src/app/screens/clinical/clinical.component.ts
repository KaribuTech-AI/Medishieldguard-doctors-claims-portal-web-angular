import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-clinical-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clinical.component.html'
})
export class ClinicalScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'clinical';
}

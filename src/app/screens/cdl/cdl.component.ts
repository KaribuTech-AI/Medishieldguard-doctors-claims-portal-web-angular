import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-cdl-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cdl.component.html'
})
export class CdlScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'cdl';
}

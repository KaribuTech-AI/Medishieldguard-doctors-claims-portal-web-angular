import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-rules-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rules.component.html'
})
export class RulesScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'rules';
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-messages-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html'
})
export class MessagesScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'messages';
}

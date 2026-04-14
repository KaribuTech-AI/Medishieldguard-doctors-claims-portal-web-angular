import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-users-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html'
})
export class UsersScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'users';
}

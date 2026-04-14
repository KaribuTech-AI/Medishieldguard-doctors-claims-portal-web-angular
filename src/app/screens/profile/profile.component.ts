import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenBaseComponent } from '../screen-base';

@Component({
  selector: 'app-profile-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html'
})
export class ProfileScreenComponent extends ScreenBaseComponent {
  protected readonly screenId = 'profile';
}

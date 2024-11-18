import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'profile-page',
  standalone: true,
  templateUrl: './ProfilePage.html',
  imports: [ReactiveFormsModule, JsonPipe,AsyncPipe],
})
export class ProfilePage {
  authService = inject(AuthService);
  user = this.authService.user$
}

import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { ApiService } from '../../service';


@Component({
  selector: 'sign-up',
  standalone: true,
  templateUrl: './signUp.html',
  providers: [{ provide: AuthService, useClass: AuthService }],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatButtonModule,
    CommonModule,
    MatTabsModule,
  ],
})
export class SignUpPage implements OnInit {
  form = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  authService = inject(AuthService);
  constructor(private apiService: ApiService, private router: Router) {}
  ngOnInit(): void {}
  onSubmit() {
    this.apiService.signUp(this.form.value).subscribe(
      (data) => {
        console.log('Sign-up successful. Status:', data.status);
        // this.router.navigate(['login']);
      },
      (error) => {
        console.error('Sign-up failed:', error);
      }
    );
  }
}

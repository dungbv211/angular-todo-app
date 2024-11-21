import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { TextFieldModule } from '@angular/cdk/text-field';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ApiService } from '../../service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'login-page',
  standalone: true,
  templateUrl: './LoginPage.html',
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
export class LoginPage implements OnInit {
  form = new FormGroup({
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
  apiService = inject(ApiService);
  router = inject(Router);
  ngOnInit(): void {}
  onSubmit() {
    this.apiService.signIn(this.form.value).subscribe((data: any) => {
      localStorage.setItem('access_Token', JSON.stringify(data.access_token));
      this.authService.updateUser(data.user);
    });
    this.authService.setIsLogin(true);
    this.router.navigate(['article']);
  }
}

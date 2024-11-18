import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
type user = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roleId: number;
  avatar: string;
  status: string;
  username: string;
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<user | null>(null);
  accessToken = new BehaviorSubject<string | null>(
    JSON.parse(localStorage.getItem('currentUser') || '{}')?.token || null
  );
  isLogin$ = false;
  setIsLogin(isLogin: boolean) {
    this.isLogin$ = isLogin;
  }
  updateUser(data: user) {
    this.user$.next(data);
  }
}

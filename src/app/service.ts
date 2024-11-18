import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements CanActivate {
  apiUrl = 'http://localhost:3000/v1';
  authService: any;
  router: any;

  constructor(private http: HttpClient) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLogin$) {
      return true;
    } else {
      // Redirect to login page if not authenticated
      return this.router.createUrlTree(['/login']);
    }
  }

  login(data: Partial<{ email: string|null; password: string |null}>): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, data);
  }
  categories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categories`, );
  }
}

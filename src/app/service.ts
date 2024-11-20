import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class ApiService implements CanActivate {
  apiUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isLogin$) {
      return true;
    } else {
      // Redirect to login page if not authenticated
      return this.router.createUrlTree(['/login']);
    }
  }
  private getHeaders(): HttpHeaders {
    const accessToken = localStorage.getItem('access_Token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken?.replace(/"/g, '')}`,
    });
    return headers;
  }
  access_Token = inject(AuthService);
  signIn(
    data: Partial<{ email: string | null; password: string | null }>
  ): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sign-in`, data);
  }
  signUp(
    data: Partial<{
      email: string | null;
      password: string | null;
      userName: string | null;
    }>
  ): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sign-up`, data);
  }
  forgotPassword(
    data: Partial<{
      email: string | null;
    }>
  ): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/forgot-password`, data);
  }
  getUser(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}/me`, { headers });
  }
  updateUser(data: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.apiUrl}/me/update`, data, { headers });
  }
  getBuckets(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}/buckets`, { headers });
  }
  postBucket(bucketData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.apiUrl}/buckets`, bucketData, {
      headers,
    });
  }

  getBucketId(bucketId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}/buckets/${bucketId}`, {
      headers,
    });
  }
  patchBucketId(bucketId: string, data: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.apiUrl}/buckets/${bucketId}`, data, {
      headers,
    });
  }
  deleteBucket(bucketId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete<any>(`${this.apiUrl}/buckets/${bucketId}`, {
      headers,
    });
  }
  getBucketItems(bucketId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}/buckets/${bucketId}/items`, {
      headers,
    });
  }
  postBucketItem(bucketId: string, itemData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post<any>(
      `${this.apiUrl}/buckets/${bucketId}/items`,
      itemData,
      { headers }
    );
  }
  patchBucketItem(bucketId: string, itemData: any, itemId: string) {
    const headers = this.getHeaders();
    return this.http.post<any>(
      `${this.apiUrl}/buckets/${bucketId}/items/${itemId}`,
      itemData,
      { headers }
    );
  }
  deleteBucketItem(bucketId: string, itemId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete<any>(
      `${this.apiUrl}/buckets/${bucketId}/items/${itemId}`,
      { headers }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  apiUrl = 'http://localhost:3000/swagger';
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
    return this.http.get<any>(`${this.apiUrl}/me`);
  }
  updateUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/me/update`, data);
  }
  getBuckets(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/buckets`);
  }
  postBucket(bucketData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/buckets`, bucketData);
  }

  getBucketId(bucketId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/buckets/${bucketId}`);
  }
  patchBucketId(bucketId: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/buckets/${bucketId}`, data);
  }
  deleteBucket(bucketId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/buckets/${bucketId}`);
  }
  getBucketItems(bucketId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/buckets/${bucketId}/items`);
  }
  postBucketItem(bucketId: string, itemData: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/buckets/${bucketId}/items`,
      itemData
    );
  }
  patchBucketItem(bucketId: string, itemData: any, itemId: string) {
    return this.http.post<any>(
      `${this.apiUrl}/buckets/${bucketId}/items/${itemId}`,
      itemData
    );
  }
  deleteBucketItem(bucketId: string, itemId: string): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/buckets/${bucketId}/items/${itemId}`
    );
  }
}

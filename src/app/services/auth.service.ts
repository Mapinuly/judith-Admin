import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { AppConfig } from 'src/config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = AppConfig.baseUrl+AppConfig.login
  isLoggedIn = localStorage.getItem('access_token') ? true : false

  constructor(
    private http: HttpClient,
    private route: Router,
    ) {}

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(this.loginUrl, body)
      .pipe(
        tap((response) => {
          if (response && response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            this.isLoggedIn = true;
          }
        }),
        catchError((error) => {
          console.error('Login failed', error);
          throw error;
        })
      );
  }


  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('accessToken');
    this.route.navigate(['/login'])
  }

  isAuthenticatedUser(): boolean {
    return this.isLoggedIn;
  }
}

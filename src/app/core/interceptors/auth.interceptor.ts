import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, of, switchMap} from 'rxjs';
import {AuthService} from "../../shared/services/auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.getUserRefreshToken().pipe(switchMap((user) => {
      return next.handle(this.addAuthToken(request, user.refreshToken));
    }));
  }

  addAuthToken(request: HttpRequest<unknown>, token:string): HttpRequest<unknown> {
    console.log("TOKEN", token)
    if (token) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      const headers = request.headers.delete('Authorization');
      return request.clone({headers});
    }
  }
}

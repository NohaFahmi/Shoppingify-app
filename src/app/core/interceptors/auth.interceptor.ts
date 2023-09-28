import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, of, switchMap} from 'rxjs';
import {AuthService} from "../../shared/services/auth/auth.service";
import {Store} from "@ngrx/store";
import {AuthorizationSelectors, AuthState} from "../../store/authorization";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  refreshToken$: Observable<any> = of(null);

  constructor(private authService: AuthService, private store: Store<AuthState>) {
    this.refreshToken$ = this.store.select(AuthorizationSelectors.selectUserRefreshToken);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //TODO: Refactor this part
    return this.refreshToken$.pipe(switchMap((token) => {
      return next.handle(this.addAuthToken(request, token));
    }));
  }

  addAuthToken(request: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
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

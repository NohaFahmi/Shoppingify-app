import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from "../../../shared/services/auth/auth.service";
import {catchError, map, of, switchMap, tap} from "rxjs";
import * as AuthorizationActions from '../actions/authorization.actions';
import {IUserInfo} from "../../../shared/interfaces/auth.interface";
import {Router} from "@angular/router";


@Injectable()
export class AuthorizationEffects {

  checkAuth$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.loadCheckAuth),
      switchMap(() => {
        return this.authService.checkAuth().pipe(
          map(
            (user) => {
              if (user !== null) {
                const authUser: IUserInfo = {
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                  emailVerified: user.emailVerified,
                  refreshToken: user.refreshToken
                };
                return AuthorizationActions.checkAuthSuccess({
                  user: authUser
                })
              } else {
                return AuthorizationActions.checkAuthFailure({error: ''})
              }
            }),
          catchError((error) => of(AuthorizationActions.checkAuthFailure({error})))
        );
      })
    );
  });
  checkAuthSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.checkAuthSuccess),
      tap(() => {
        this.router.navigate(['/app/items']);
      })
    )
  }, {dispatch: false});
  checkAuthFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.checkAuthFailure),
      tap(() => {
        this.router.navigate(['/auth/login']);
      })
    )
  }, {dispatch: false});
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.login),
      switchMap((action) =>
        this.authService.loginWithEmail(action)
          .then((user) => {
            const authUser: IUserInfo = {
              uid: user.user.uid,
              email: user.user.email,
              displayName: user.user.displayName,
              photoURL: user.user.photoURL,
              emailVerified: user.user.emailVerified,
              refreshToken: user.user.refreshToken
            };
            return AuthorizationActions.loginSuccess({userInfo: authUser});
          })
          .catch((error) => AuthorizationActions.loginFailure({error}
          ))
      )
    )
  });
  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.loginSuccess),
      tap(() => {
        this.router.navigate(['/app/items']);
      })
    )
  }, {dispatch: false});
  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.signup),
      switchMap((action) => {
          return this.authService.signupWithEmail(action.user).pipe(
            map((data) => AuthorizationActions.signupSuccess({
              user: {
                uid: data.user.uid,
                email: data.user.email,
                displayName: data.user.username,
                photoURL: data.user.photoURL,
                emailVerified: data.user.emailVerified,
                _id: data.user._id
              }
            })),
            catchError((error) => of(AuthorizationActions.signupFailure({error})))
          );
        }
      )
    );
  });
  signupSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.signupSuccess),
      tap((action) => {
        this.router.navigate(['/app/items']);
      })
    );
  }, {dispatch: false});
  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.logout),
      switchMap(() =>
        this.authService.logoutUser()
          .then(() => AuthorizationActions.logoutSuccess())
          .catch((error) => AuthorizationActions.logoutFailure({error}))
      )
    );
  });
  logoutSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.logoutSuccess),
      tap(() => {
        this.router.navigate(['/auth/login']);
      })
    )
  }, {dispatch: false});

  constructor(private actions$: Actions,
              private authService: AuthService, private router: Router) {
  }
}


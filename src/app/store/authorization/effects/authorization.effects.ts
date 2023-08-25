import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from "../../../shared/services/auth/auth.service";
import {catchError, map, of, switchMap} from "rxjs";
import * as AuthorizationActions from '../actions/authorization.actions';


@Injectable()
export class AuthorizationEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.login),
      switchMap((action) =>
        this.authService.loginWithEmail(action).pipe(
          map((userInfo) => AuthorizationActions.loginSuccess({userInfo})),
          catchError((error) => of(AuthorizationActions.loginFailure({error})))
        )
      )
    );
  });
  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.signup),
      switchMap((action) =>
        this.authService.emailSignup(action).pipe(
          map((userInfo) => AuthorizationActions.signupSuccess({userInfo: userInfo.user})),
          catchError((error) => of(AuthorizationActions.signupFailure({error})))
        )
      )
    );
  });

  createUserInDB$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.signupSuccess),
      switchMap((action) =>
        this.authService.createUserInDB(action.userInfo).pipe(
          map(() => AuthorizationActions.createUserInDBSuccess({user: action.userInfo})),
          catchError((error) => of(AuthorizationActions.createUserInDBFailure({error})))
        )
      )
    );
  });
  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorizationActions.logout),
      switchMap(() =>
        this.authService.logoutUser().pipe(
          map(() => AuthorizationActions.logoutSuccess()),
          catchError((error) => of(AuthorizationActions.logoutFailure({error})))
        )
      )
    );
  });

  constructor(private actions$: Actions,
              private authService: AuthService) {
  }
}


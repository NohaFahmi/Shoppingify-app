import {createReducer, on} from '@ngrx/store';
import {IUserInfo} from "../../../shared/interfaces/auth.interface";
import * as AuthorizationActions from '../actions/authorization.actions';

export const authorizationFeatureKey = 'authorization';

export interface AuthState {
  userInfo: IUserInfo | null;
  loading: boolean;
  errors?: any;
}

export const initialState: AuthState = {
  userInfo: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthorizationActions.loadCheckAuth, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthorizationActions.checkAuthSuccess, (state, {user}) => ({
    ...state,
    userInfo: user,
    loading: false,
  })),
  on(AuthorizationActions.checkAuthFailure, (state, {error}) => ({
    ...state,
    userInfo: null,
    errors: error,
    loading: false,
  })),
  on(AuthorizationActions.signup, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthorizationActions.signupSuccess, (state, {user}) => ({
    ...state,
    userInfo: user,
    loading: false
  })),
  on(AuthorizationActions.signupFailure, (state, {error}) => ({
    ...state,
    userInfo: null,
    loading: false,
    errors: error.code,
  })),
  on(AuthorizationActions.login, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthorizationActions.setUserInfo, (state, {userInfo}) => ({
    ...state,
    // userInfo,
    loading: false
  })),
  on(AuthorizationActions.loginSuccess, (state, {user}) => ({
    ...state,
    userInfo: user ? user : null,
    loading: false
  })),
  on(AuthorizationActions.loginFailure, (state, {error}) => ({
    ...state,
    // userInfo: null,
    loading: false,
    errors: error,
  })),
  on(AuthorizationActions.logout, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthorizationActions.logoutSuccess, (state) => ({
    ...state,
    userInfo: null,
    loading: false,
  })),
  on(AuthorizationActions.logoutFailure, (state, {error}) => ({
    ...state,
    userInfo: null,
    loading: false,
    errors: error,
  }))
);


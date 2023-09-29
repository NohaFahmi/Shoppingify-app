import {createAction, props} from "@ngrx/store";
import {IAuthInfo, IUserInfo} from "../../../shared/interfaces/auth.interface";


export const loadCheckAuth = createAction('[Authorization] Load Check Auth');

export const checkAuthSuccess = createAction('[Authorization] Check Auth Success', props<{ user: IUserInfo | null }>());
export const checkAuthFailure = createAction('[Authorization] Check Aut Failure', props<{ error: string }>());
export const login = createAction('[Authorization] Login',
  props<IAuthInfo>());
export const loginSuccess = createAction('[Authorization] Login Success',
  props<{
    user?: IUserInfo
  }>());

export const loginFailure = createAction('[Authorization] Login Failure',
  props<{ error: any }>());

export const logout = createAction('[Authorization] Logout');

export const logoutSuccess = createAction('[Authorization] Logout Success');

export const logoutFailure = createAction('[Authorization] Logout Failure',
  props<{ error: any }>());
export const signup = createAction('[Authorization] Signup',
  props<{
    user: IUserInfo
  }>());

export const signupSuccess = createAction('[Authorization] Signup Success',
  props<{
    user: IUserInfo
  }>());

export const signupFailure = createAction('[Authorization] Signup Failure', props<{ error: any }>());

export const setUserInfo = createAction('[Authorization] Set User Info', props<{ userInfo: IUserInfo | null }>());

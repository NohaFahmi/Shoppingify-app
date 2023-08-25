import {createAction, props} from "@ngrx/store";
import {IAuthInfo, IUserInfo} from "../../../shared/interfaces/auth.interface";

export const login = createAction('[Authorization] Login',
  props<IAuthInfo>());
export const loginSuccess = createAction('[Authorization] Login Success',
  props<{
    userInfo: IUserInfo
  }>());

export const loginFailure = createAction('[Authorization] Login Failure',
  props<{ error: any }>());

export const setUserInfo = createAction('[Authorization] Set UserInfo', props<{ userInfo: IUserInfo }>());
export const logout = createAction('[Authorization] Logout');

export const logoutSuccess = createAction('[Authorization] Logout Success');

export const logoutFailure = createAction('[Authorization] Logout Failure',
  props<{ error: any }>());
export const signup = createAction('[Authorization] Signup',
  props<IAuthInfo>());

export const signupSuccess = createAction('[Authorization] Signup Success',
  props<{
    userInfo: IUserInfo
  }>());

export const signupFailure = createAction('[Authorization] Signup Failure', props<{ error: any }>());

export const createUserInDBSuccess = createAction('[Authorization] Create User In DB Success', props<{ user: IUserInfo }>());

export const createUserInDBFailure = createAction('[Authorization] Create User In DB Failure', props<{ error: any }>());

export const refreshToken = createAction('[Authorization] Refresh Token', props<{ user: IUserInfo | null }>());

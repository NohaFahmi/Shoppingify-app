import {createFeatureSelector, createSelector} from "@ngrx/store";
import {authorizationFeatureKey, AuthState} from "../reducers/authorization.reducer";

export const selectAuthorizationState = createFeatureSelector<AuthState>(authorizationFeatureKey);
export const selectIsLoading = createSelector(
  selectAuthorizationState,
  (authState) => authState.loading
);

export const selectUserRefreshToken = createSelector(
  selectAuthorizationState,
  (authState) => authState.userInfo?.refreshToken
);
export const selectUserInfo = createSelector(
  selectAuthorizationState,
  (authState) => authState.userInfo
);

export const selectIsLoggedIn = createSelector(
  selectAuthorizationState,
  (authState) => !!authState.userInfo
);

export const selectErrors = createSelector(
  selectAuthorizationState,
  (authState) => authState.errors
);

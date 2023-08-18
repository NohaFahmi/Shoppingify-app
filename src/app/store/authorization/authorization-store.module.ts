import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthorizationEffects} from './effects/authorization.effects';
import {authorizationFeatureKey, authReducer} from "./reducers/authorization.reducer";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authorizationFeatureKey, authReducer),
    EffectsModule.forFeature([AuthorizationEffects])
  ]
})
export class AuthorizationStoreModule {
}

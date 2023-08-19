import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationStoreModule} from "./authorization/authorization-store.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ItemsListStoreModule} from "./items-list/items-list-store.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AuthorizationStoreModule,
    ItemsListStoreModule
  ]
})
export class AppStoreModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {itemsListFeatureKey, itemsListReducer} from "./reducers/items-list.reducers.";
import {ItemsListEffects} from "./effects/items-list.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(itemsListFeatureKey, itemsListReducer),
    EffectsModule.forFeature([ItemsListEffects])
  ]
})
export class ItemsListStoreModule {
}

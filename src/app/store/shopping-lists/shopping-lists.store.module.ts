import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {shoppingListsFeatureKey, shoppingListsReducer} from "./reducers/shopping-lists.reducers";
import {ShoppingListsEffects} from "./effects/shopping-lists.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(shoppingListsFeatureKey, shoppingListsReducer),
    EffectsModule.forFeature([ShoppingListsEffects])
  ]
})
export class ShoppingListsStoreModule {
}

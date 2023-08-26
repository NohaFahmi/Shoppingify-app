import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {categoriesFeatureKey, categoriesReducers} from "./reducers/categories.reducers";
import {CategoriesEffects} from "./effects/categories.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(categoriesFeatureKey, categoriesReducers),
    EffectsModule.forFeature([CategoriesEffects])
  ]
})
export class CategoriesStoreModule {
}

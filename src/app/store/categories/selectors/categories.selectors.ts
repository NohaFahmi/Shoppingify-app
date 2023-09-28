import {categoriesFeatureKey, CategoriesState} from "../reducers/categories.reducers";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectCategoriesState = createFeatureSelector<CategoriesState>(categoriesFeatureKey);
export const selectCategories = createSelector(
  selectCategoriesState,
  (categoriesState) => categoriesState.categories
)
export const selectCategoryDetails = createSelector(
  selectCategoriesState,
  (categoriesState) => categoriesState.categoryDetails
)
export const selectIsLoading = createSelector(
  selectCategoriesState,
  (categoriesState) => categoriesState.loading
)
export const selectCategoriesErrors = createSelector(
  selectCategoriesState,
  (categoriesState) => categoriesState.errors
)

import {createFeatureSelector, createSelector} from "@ngrx/store";
import {shoppingListsFeatureKey, ShoppingListsState} from "../reducers/shopping-lists.reducers";

export const selectShoppingListsState = createFeatureSelector<ShoppingListsState>(shoppingListsFeatureKey);

export const selectIsLoading = createSelector(
  selectShoppingListsState,
  (shoppingListState) => shoppingListState.loading
);

export const selectShoppingListDetails = createSelector(
  selectShoppingListsState,
  (shoppingListState) => shoppingListState.listDetails
);

export const selectShoppingLists = createSelector(
  selectShoppingListsState,
  (shoppingListState) => shoppingListState.lists
);

export const selectShoppingListsErrors = createSelector(
  selectShoppingListsState,
  (shoppingListState) => shoppingListState.errors
);

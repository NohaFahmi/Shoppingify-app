import {createFeatureSelector, createSelector} from "@ngrx/store";
import {itemsListFeatureKey, ItemsListState} from "../reducers/items-list.reducers.";

export const selectItemsListState = createFeatureSelector<ItemsListState>(itemsListFeatureKey);

export const selectIsLoading = createSelector(
  selectItemsListState,
  (itemsListState) => itemsListState.loading
);
export const selectItemsList = createSelector(
  selectItemsListState,
  (itemsListState) => itemsListState.itemsList
);

export const selectItemDetails = createSelector(
  selectItemsListState,
  (itemsListState) => itemsListState.itemDetails
);

export const selectErrors = createSelector(
  selectItemsListState,
  (itemsListState) => itemsListState.errors
);

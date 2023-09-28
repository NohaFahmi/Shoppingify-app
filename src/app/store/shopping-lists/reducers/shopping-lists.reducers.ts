import {createReducer, on} from "@ngrx/store";
import * as ShoppingListsActions from '../actions/shopping-lists.actions';

export const shoppingListsFeatureKey = 'shoppingLists';

export interface ShoppingListsState {
  lists: { _id: string, items: any[] }[] | null;
  listDetails: { _id: string, items: any[] } | null;
  loading: boolean;
  errors?: any;
}

export const initialState: ShoppingListsState = {
  lists: null,
  listDetails: null,
  loading: false,
}
export const shoppingListsReducer = createReducer(
  initialState,
  on(ShoppingListsActions.getShoppingListDetails, (state) => ({
    ...state,
    loading: true,
  })),

  on(ShoppingListsActions.getShoppingListDetailsSuccess, (state, {list}) => ({
    ...state,
    listDetails: list,
    loading: false
  })),

  on(ShoppingListsActions.getShoppingListDetailsFailure, (state, {error}) => ({
    ...state,
    listDetails: null,
    loading: false,
    errors: error
  })),

  on(ShoppingListsActions.getShoppingHistory, (state) => ({
    ...state,
    loading: true,
  })),

  on(ShoppingListsActions.getShoppingHistorySuccess, (state, {lists}) => ({
    ...state,
    lists: lists,
    loading: true,
  })),

  on(ShoppingListsActions.getShoppingHistoryFailure, (state, {error}) => ({
    ...state,
    errors: error,
    loading: false,
  })),

  on(ShoppingListsActions.createShoppingList, (state) => ({
    ...state,
    loading: true,
  })),

  on(ShoppingListsActions.createShoppingListSuccess, (state, {list}) => ({
    ...state,
    listDetails: list,
    loading: false,
  })),

  on(ShoppingListsActions.createShoppingListFailure, (state, {error}) => ({
    ...state,
    errors: error,
    loading: false,
  })),

  on(ShoppingListsActions.updateShoppingList, (state) => ({
    ...state,
    loading: true,
  })),

  on(ShoppingListsActions.updateShoppingListSuccess, (state, {list}) => ({
    ...state,
    listDetails: list,
    loading: false,
  })),

  on(ShoppingListsActions.updateShoppingListFailure, (state, {error}) => ({
    ...state,
    errors: error,
    loading: false,
  })),

  on(ShoppingListsActions.updateShoppingListStatus, (state) => ({
    ...state,
    loading: true,
  })),

  on(ShoppingListsActions.updateShoppingListStatusSuccess, (state, {list}) => ({
    ...state,
    listDetails: list,
    loading: false,
  })),

  on(ShoppingListsActions.updateShoppingListStatusFailure, (state, {error}) => ({
    ...state,
    errors: error,
    loading: false,
  })),
);

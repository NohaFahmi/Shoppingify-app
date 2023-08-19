import {createReducer, on} from "@ngrx/store";
import {IListItem} from "../../../shared/interfaces/list-items.interface";
import * as ItemsListActions from '../actions/items-list.actions';

export const itemsListFeatureKey = 'itemsList';

export interface ItemsListState {
  itemsList: { [key: string]: IListItem[] } | null;
  itemDetails: IListItem | null;
  loading: boolean;
  errors?: any;
}

export const initialState: ItemsListState = {
  itemsList: null,
  itemDetails: null,
  loading: false,
}
export const itemsListReducer = createReducer(
  initialState,
  on(ItemsListActions.getItemsList, (state) => ({
    ...state,
    loading: true,
  })),

  on(ItemsListActions.getItemsListSuccess, (state, {items}) => {
    const listOfItems: { [key: string]: IListItem[] } = {};
    items.map((item) => {
      if (listOfItems)
        listOfItems[item.categoryName] = [...item.items];
    });
    return {
      ...state,
      itemsList: listOfItems,
      loading: false
    }
  }),

  on(ItemsListActions.getItemsListFailure, (state, {error}) => ({
    ...state,
    itemsList: null,
    loading: false,
    errors: error
  })),

  on(ItemsListActions.getItemDetails, (state) => ({
    ...state,
    loading: true,
  })),

  on(ItemsListActions.getItemDetailsSuccess, (state, {item}) => ({
    ...state,
    itemDetails: item,
    loading: true,
  })),

  on(ItemsListActions.getItemDetailsFailure, (state, {error}) => ({
    ...state,
    errors: error,
    loading: false,
  })),

  on(ItemsListActions.createItem, (state) => ({
    ...state,
    loading: true
  })),
  on(ItemsListActions.createItemSuccess, (state, {item}) => ({
    ...state,
    itemDetails: item,
    loading: false
  })),
  on(ItemsListActions.createItemFailure, (state, {error}) => ({
    ...state,
    loading: false,
    errors: error
  })),

  on(ItemsListActions.updateItem, (state) => ({
    ...state,
    loading: true
  })),
  on(ItemsListActions.updateItemSuccess, (state, {item}) => ({
    ...state,
    itemDetails: item,
    loading: false
  })),
  on(ItemsListActions.updateItemFailure, (state, {error}) => ({
    ...state,
    loading: false,
    errors: error
  }))
);

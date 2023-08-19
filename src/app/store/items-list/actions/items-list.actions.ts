import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import {IListItem} from "../../../shared/interfaces/list-items.interface";

export const getItemsList = createAction('[Items List] Get Items List');
export const getItemsListSuccess = createAction('[Items List] Get Items List Success', props<{ items: { _id: string, categoryName: string; items: IListItem[] }[] }>());
export const getItemsListFailure = createAction('[Items List] Get Items List Failure', props<{ error: any }>());
export const createItem = createAction('[Items List] Create Item', props<{ item: IListItem }>());
export const createItemSuccess = createAction('[Items List] Create Item Success', props<{ item: IListItem }>());
export const createItemFailure = createAction('[Items List] Create Item Failure', props<{ error: any }>());
export const updateItem = createAction('[Items List] Update Item', props<{ itemId: string, item: IListItem }>());
export const updateItemSuccess = createAction('[Items List] Update Item Success', props<{ item: IListItem }>());
export const updateItemFailure = createAction('[Items List] Update Item Failure', props<{ error: any }>());
export const getItemDetails = createAction('[Items List] Get Item Details', props<{ itemId: string }>());
export const getItemDetailsSuccess = createAction('[Items List] Get Item Details Success', props<{ item: IListItem }>());
export const getItemDetailsFailure = createAction('[Items List] Get Item Details Failure', props<{ error: any }>());


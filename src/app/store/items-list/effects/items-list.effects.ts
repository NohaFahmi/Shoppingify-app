import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ListItemsService} from "../../../shared/services/integrations/list-items/list-items.service";
import * as ListItemsActions from '../actions/items-list.actions';
import {catchError, map, of, switchMap} from "rxjs";

@Injectable()
export class ItemsListEffects {
  getAllItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListItemsActions.getItemsList),
      switchMap(() =>
        this.listItemsService.getAllListItems().pipe(
          map((list) => ListItemsActions.getItemsListSuccess({items: list.items})),
          catchError((error) => of(ListItemsActions.getItemsListFailure({error})))
        ))
    );
  });
  createItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListItemsActions.createItem),
      switchMap((action) =>
        this.listItemsService.createListItem(action.item).pipe(
          map((results) => ListItemsActions.createItemSuccess({item: results.item})),
          catchError((error) => of(ListItemsActions.createItemFailure({error})))
        ))
    );
  });
  updateItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListItemsActions.updateItem),
      switchMap((action) =>
        this.listItemsService.updateListItem(action.itemId, action.item).pipe(
          map((results) => ListItemsActions.updateItemSuccess({item: results.item})),
          catchError((error) => of(ListItemsActions.updateItemFailure({error})))
        ))
    );
  });
  getItemDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListItemsActions.getItemDetails),
      switchMap((action) =>
        this.listItemsService.getItemById(action.itemId).pipe(
          map((results) => ListItemsActions.getItemDetailsSuccess({item: results.item})),
          catchError((error) => of(ListItemsActions.getItemDetailsFailure({error})))
        ))
    );
  });

  constructor(private actions$: Actions,
              private listItemsService: ListItemsService) {
  }
}

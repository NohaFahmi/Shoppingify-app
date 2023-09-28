import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as ShoppingListActions from "../actions/shopping-lists.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {ShoppingListsService} from "../../../shared/services/integrations/shopping-lists/shopping-lists.service";

@Injectable()
export class ShoppingListsEffects {
  getShoppingHistory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingListActions.getShoppingHistory),
      switchMap((action) =>
        this.shoppingListService.getShoppingListsHistoryByUserId(action.userId).pipe(
          map((results) => ShoppingListActions.getShoppingHistorySuccess({lists: results.lists})),
          catchError((error) => of(ShoppingListActions.getShoppingHistoryFailure({error})))
        ))
    );
  });

  getShoppingListDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingListActions.getShoppingListDetails),
      switchMap((action) =>
        this.shoppingListService.getShoppingListById(action.listId).pipe(
          map((results) => ShoppingListActions.getShoppingListDetailsSuccess({list: results.list})),
          catchError((error) => of(ShoppingListActions.getShoppingListDetailsFailure({error})))
        ))
    );
  });

  updateShoppingList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingListActions.updateShoppingList),
      switchMap((action) =>
        this.shoppingListService.updateShoppingList(action.listId, action.list).pipe(
          map((results) => ShoppingListActions.updateShoppingListSuccess({list: results.list})),
          catchError((error) => of(ShoppingListActions.updateShoppingListFailure({error})))
        ))
    );
  });

  updateShoppingListStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingListActions.updateShoppingListStatus),
      switchMap((action) =>
        this.shoppingListService.updateShoppingListStatus(action.listId, action.status).pipe(
          map((results) => ShoppingListActions.updateShoppingListStatusSuccess({list: results.list})),
          catchError((error) => of(ShoppingListActions.updateShoppingListStatusFailure({error})))
        ))
    );
  });

  deleteShoppingList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingListActions.deleteShoppingList),
      switchMap((action) =>
        this.shoppingListService.deleteShoppingList(action.listId).pipe(
          map(() => ShoppingListActions.deleteShoppingListSuccess()),
          catchError((error) => of(ShoppingListActions.deleteShoppingListFailure({error})))
        ))
    );
  });

  createShoppingList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShoppingListActions.createShoppingList),
      switchMap((action) =>
        this.shoppingListService.createShoppingList(action.list).pipe(
          map((results) => ShoppingListActions.createShoppingListSuccess({list: results.list})),
          catchError((error) => of(ShoppingListActions.createShoppingListFailure({error})))
        ))
    );
  });

  constructor(private actions$: Actions,
              private shoppingListService: ShoppingListsService) {
  }
}

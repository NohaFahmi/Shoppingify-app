import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as CategoriesActions from "../actions/categories.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {CategoriesService} from "../../../shared/services/integrations/categories/categories.service";

@Injectable()
export class CategoriesEffects {

  getCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoriesActions.getCategories),
      switchMap(() =>
        this.categoriesService.getAllCategories().pipe(
          map((results) => CategoriesActions.getCategoriesSuccess({categories: results.categories})),
          catchError((error) => of(CategoriesActions.getCategoriesFailure({error})))
        ))
    );
  });

  getCategoryById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CategoriesActions.getCategoryById),
      switchMap((action) =>
        this.categoriesService.getCategoryById(action.categoryId).pipe(
          map((category) => CategoriesActions.getCategoryByIdSuccess({category})),
          catchError((error) => of(CategoriesActions.getCategoryByIdFailure({error})))
        ))
    );
  });

  constructor(private actions$: Actions, private categoriesService: CategoriesService) {
  }
}

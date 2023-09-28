import {createReducer, on} from "@ngrx/store";
import * as CategoriesActions from "../actions/categories.actions";
import {ICategory} from "../../../shared/interfaces/categories.interface";

export const categoriesFeatureKey = 'categories';

export interface CategoriesState {
  categories: ICategory[] | [];
  categoryDetails: ICategory | null;
  loading: boolean;
  errors?: any;
}

export const initialState: CategoriesState = {
  categories: [],
  categoryDetails: null,
  loading: false,
};

export const categoriesReducers = createReducer(
  initialState,
  on(CategoriesActions.getCategories, (state) => ({
    ...state,
    loading: true,
  })),
  on(CategoriesActions.getCategoriesSuccess, (state, {categories}) => ({
    ...state,
    categories: categories,
    loading: false
  })),
  on(CategoriesActions.getCategoriesFailure, (state, {error}) => ({
      ...state,
      categories: [],
      loading: false,
      errors: error
    }
  )),
  on(CategoriesActions.getCategoryById, (state) => ({
    ...state,
    loading: true,
  })),
  on(CategoriesActions.getCategoryByIdSuccess, (state, {category}) => ({
    ...state,
    categoryDetails: category,
    loading: false
  })),
  on(CategoriesActions.getCategoryByIdFailure, (state, {error}) => ({
    ...state,
    categoryDetails: null,
    loading: false,
    errors: error
  })),
);

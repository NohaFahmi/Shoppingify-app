import {createAction, props} from "@ngrx/store";
import {ICategory} from "../../../shared/interfaces/categories.interface";

export const createCategory = createAction('[Category] Create Category', props<{ category: ICategory }>());
export const createCategorySuccess = createAction('[Category] Create Category Success', props<{ category: ICategory }>());
export const createCategoryFailure = createAction('[Category] Create Category Failure', props<{ error: any }>());
export const getCategories = createAction('[Category] Get Categories');
export const getCategoriesSuccess = createAction('[Category] Get Categories Success', props<{ categories: ICategory[] }>());
export const getCategoriesFailure = createAction('[Category] Get Categories Failure', props<{ error: any }>());
export const getCategoryById = createAction('[Category] Get Category By Id', props<{ categoryId: string }>());
export const getCategoryByIdSuccess = createAction('[Category] Get Category By Id Success', props<{ category: ICategory }>());
export const getCategoryByIdFailure = createAction('[Category] Get Category By Id Failure', props<{ error: any }>());
export const updateCategory = createAction('[Category] Update Category', props<{ categoryId: string, category: ICategory }>());
export const updateCategorySuccess = createAction('[Category] Update Category Success', props<{ category: ICategory }>());
export const updateCategoryFailure = createAction('[Category] Update Category Failure', props<{ error: any }>());
export const deleteCategory = createAction('[Category] Delete Category', props<{ categoryId: string }>());
export const deleteCategorySuccess = createAction('[Category] Delete Category Success');
export const deleteCategoryFailure = createAction('[Category] Delete Category Failure', props<{ error: any }>());

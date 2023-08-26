import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../http/http.service";
import {Observable} from "rxjs";
import {ICategory} from "../../../interfaces/categories.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpService: HttpService) { }

  getAllCategories(): Observable<{ categories: ICategory[] }> {
    return this.httpService.get('categories/getAll');
  }

  getCategoryById(id: string): Observable<ICategory> {
    return this.httpService.get(`categories/get/${id}`);
  }
}

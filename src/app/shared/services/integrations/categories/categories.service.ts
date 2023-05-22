import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../http/http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpService: HttpService) { }

  getAllCategories(): Observable<any> {
    return this.httpService.get('categories/getAll');
  }
  getCategoryById(id: string): Observable<any> {
    return this.httpService.get(`categories/get/${id}`);
  }
}

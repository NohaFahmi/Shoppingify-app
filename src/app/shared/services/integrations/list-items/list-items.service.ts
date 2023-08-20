import { Injectable } from '@angular/core';
import {HttpService} from "../../http/http.service";
import {Observable} from "rxjs";
import {IListItem} from "../../../interfaces/list-items.interface";

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {

  constructor(private httpService: HttpService) { }

  getAllListItems(): Observable<{items: {_id: string,categoryName:string; items: IListItem[]}[]}> {
    return this.httpService.get('list-items/getAll');
  }

  getItemById(id: string): Observable<{item: IListItem}> {
    return this.httpService.get(`list-items/get/${id}`);
  }
  updateListItem(id: string, item: IListItem): Observable<{item: IListItem}> {
    return this.httpService.put(`list-items/update`, {itemId: id, item});
  }
  deleteListItem(id: string): Observable<{item: IListItem}> {
    return this.httpService.delete(`list-items/delete?id=${id}`);
  }
  createListItem(item: IListItem): Observable<{item: IListItem}> {
    return this.httpService.post(`list-items/create`, item);
  }
}

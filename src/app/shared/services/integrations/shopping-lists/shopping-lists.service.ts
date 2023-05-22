import {Injectable} from '@angular/core';
import {HttpService} from "../../http/http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListsService {

  constructor(private httpService: HttpService) {
  }

  getShoppingListsHistoryByUserId(): Observable<{ lists: { _id: string, items: any[] }[] }> {
    return this.httpService.get('shopping-lists/history');
  }

  getShoppingListById(id: string): Observable<{ list: any }> {
    return this.httpService.get(`shopping-lists/get/${id}`);
  }

  updateShoppingList(id: string, list: any): Observable<{ list: any }> {
    return this.httpService.put(`shopping-lists/update`, list);
  }

  deleteShoppingList(id: string): Observable<{ list: any }> {
    return this.httpService.delete(`shopping-lists/delete/${id}`);
  }

  createShoppingList(list: any): Observable<{ list: any }> {
    return this.httpService.post(`shopping-lists/create`, list);
  }

  updateShoppingListStatus(id: string, status: string): Observable<{ list: any }> {
    return this.httpService.put(`shopping-lists/updateStatus`, {id, status});
  }
}

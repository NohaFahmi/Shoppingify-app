import {Injectable} from '@angular/core';
import {HttpService} from "../../http/http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListsService {

  constructor(private httpService: HttpService) {
  }

  getShoppingListsHistoryByUserId(userId: string): Observable<{ lists: { _id: string, items: any[] }[] }> {
    return this.httpService.get(`shopping-lists/history?id=${userId}`);
  }

  getShoppingListById(listId: string): Observable<{ list: any }> {
    return this.httpService.get(`shopping-lists/get?id=${listId}`);
  }

  updateShoppingList(id: string, list: any): Observable<{ list: any }> {
    return this.httpService.put(`shopping-lists/update?id=${id}`, list);
  }

  deleteShoppingList(id: string): Observable<{ list: any }> {
    return this.httpService.delete(`shopping-lists/delete?id=${id}`);
  }

  createShoppingList(list: any): Observable<{ list: any }> {
    return this.httpService.post(`shopping-lists/create`, list);
  }

  updateShoppingListStatus(listId: string, listStatus: string): Observable<{ list: any }> {
    return this.httpService.put(`shopping-lists/updateStatus`, {listId, listStatus});
  }
}

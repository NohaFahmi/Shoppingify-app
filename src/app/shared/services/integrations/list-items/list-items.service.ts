import { Injectable } from '@angular/core';
import {HttpService} from "../../http/http.service";
import {Observable} from "rxjs";
import {IListItem} from "../../../interfaces/list-items.interface";

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {

  constructor(private httpService: HttpService) { }

  getAllListItems(): Observable<{items: {_id: string, items: IListItem[]}[]}> {
    return this.httpService.get('list-items.interface.ts');
  }
}

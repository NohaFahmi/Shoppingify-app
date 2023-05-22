import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IListItem} from "../../shared/interfaces/list-items.interface";

@Component({
  selector: 'app-list-items.interface.ts',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListItemsComponent implements OnInit {

   listOfItems: {[key: string]: IListItem[]} = {}
  constructor() {
  }
  ngOnInit() {}

}

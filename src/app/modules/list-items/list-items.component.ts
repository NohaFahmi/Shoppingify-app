import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IListItem} from "../../shared/interfaces/list-items.interface";
import {ListItemsService} from "../../shared/services/integrations/list-items/list-items.service";
import {ShoppingListsService} from "../../shared/services/integrations/shopping-lists/shopping-lists.service";

@Component({
  selector: 'app-list-items.interface.ts',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListItemsComponent implements OnInit {

  listOfItems?: {[key: string]: IListItem[]};
  constructor(private listItemsService: ListItemsService,
              private shoppingListService: ShoppingListsService) {
  }
  ngOnInit() {
    this.getAllListItems();
  }

  getAllListItems() {
    this.listItemsService.getAllListItems().pipe().subscribe({
        next: (items) => {
          this.listOfItems = {};
          items.items.map((item) => {
            if(this.listOfItems)
              this.listOfItems[item.categoryName] = [...item.items];
          });
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      });
  }

  viewItemDetails(item: IListItem) {
    console.log("ITEM", item)
  }

  onAddingItemToList(item: IListItem) {
  }
}

import {Component, Input} from '@angular/core';
import {IListItem} from "../../interfaces/list-items.interface";

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.scss']
})
export class ShoppingListItemComponent {
  @Input() listOfShoppingItems: { [key: string]: IListItem[] } = {};
  @Input() isEditMode: boolean = false;
}

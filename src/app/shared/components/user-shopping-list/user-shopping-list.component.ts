import {Component, ViewEncapsulation} from '@angular/core';
import {IListItem} from "../../interfaces/list-items.interface";

@Component({
  selector: 'app-user-shopping-list',
  templateUrl: './user-shopping-list.component.html',
  styleUrls: ['./user-shopping-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserShoppingListComponent {
  isEditMode: boolean = false;
  listOfShoppingItems: {[key: string]: IListItem[]} = {
      "Fruits": [
          {
              _id: '1',
              name: 'Apple',
              description: 'Red apple',
              price: 1.99,
              quantity: 1,
              imageURL: 'https://www.thermofisher.com/blog/wp-content/uploads/sites/5/2015/11/apple.jpg',
              categoryId: '1',
              quantityUnit: 'kg'
          }
      ]
  }
  constructor() {
  }

  displayEditingQuantityInput() {
  }

  toggleEditMode(isEditMode: boolean) {
    this.isEditMode = isEditMode;
  }
}


import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListItemsComponent implements OnInit {

  listOfItems: {[key: string]: {itemId: number; itemName: string;}[]} = {}
  constructor() {
  }
  ngOnInit() {
    this.listOfItems = {
      "Fruit and vegetables": [
        {itemId: 1, itemName: 'Avocado'},
        {itemId: 1, itemName: 'Potato'},
        {itemId: 1, itemName: 'Banana'},
        {itemId: 1, itemName: 'Chicken 1kg'},
        {itemId: 1, itemName: 'Watermelon'},
        {itemId: 1, itemName: 'Piele De Sapo Melon'},
      ],
      "Meat and Fish": [
        {itemId: 1, itemName: 'Chicken 1kg'},
        {itemId: 1, itemName: 'Pork fillets 450g'},
        {itemId: 1, itemName: 'Chicken leg box'},
        {itemId: 1, itemName: 'Salmon'}
      ]
    }
  }

}

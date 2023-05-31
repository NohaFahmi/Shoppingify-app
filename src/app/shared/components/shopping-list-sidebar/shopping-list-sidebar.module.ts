import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListSidebarComponent } from './shopping-list-sidebar.component';
import {UserShoppingListModule} from "../user-shopping-list/user-shopping-list.module";
import {NewItemFormModule} from "../new-item-form/new-item-form.module";
import {ItemDetailsModule} from "../item-details/item-details.module";



@NgModule({
    declarations: [
        ShoppingListSidebarComponent
    ],
    exports: [
        ShoppingListSidebarComponent
    ],
  imports: [
    CommonModule,
    UserShoppingListModule,
    NewItemFormModule,
    ItemDetailsModule
  ]
})
export class ShoppingListSidebarModule { }

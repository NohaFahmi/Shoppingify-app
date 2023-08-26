import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserShoppingListComponent} from './user-shopping-list.component';
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";
import {CheckboxModule} from "primeng/checkbox";
import {NewItemBannerModule} from "../new-item-banner/new-item-banner.module";
import {ShoppingListItemModule} from "../shopping-list-item/shopping-list-item.module";


@NgModule({
  declarations: [
    UserShoppingListComponent
  ],
  exports: [
    UserShoppingListComponent
  ],
  imports: [
    CommonModule,
    InputNumberModule,
    ButtonModule,
    ChipsModule,
    CheckboxModule,
    NewItemBannerModule,
    ShoppingListItemModule
  ]
})
export class UserShoppingListModule { }

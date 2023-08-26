import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingListItemComponent} from './shopping-list-item.component';
import {CheckboxModule} from "primeng/checkbox";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    ShoppingListItemComponent
  ],
  exports: [
    ShoppingListItemComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    InputNumberModule,
    ButtonModule
  ]
})
export class ShoppingListItemModule {
}

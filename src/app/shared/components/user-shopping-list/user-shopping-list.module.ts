import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserShoppingListComponent } from './user-shopping-list.component';
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";
import {CheckboxModule} from "primeng/checkbox";



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
    CheckboxModule
  ]
})
export class UserShoppingListModule { }

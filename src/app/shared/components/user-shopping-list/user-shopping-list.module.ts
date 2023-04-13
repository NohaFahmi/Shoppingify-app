import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserShoppingListComponent } from './user-shopping-list.component';



@NgModule({
    declarations: [
        UserShoppingListComponent
    ],
    exports: [
        UserShoppingListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UserShoppingListModule { }

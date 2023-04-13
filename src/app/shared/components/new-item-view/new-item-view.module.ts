import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemViewComponent } from './new-item-view.component';



@NgModule({
    declarations: [
        NewItemViewComponent
    ],
    exports: [
        NewItemViewComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NewItemViewModule { }

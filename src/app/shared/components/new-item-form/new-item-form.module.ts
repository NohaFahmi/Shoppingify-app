import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemFormComponent } from './new-item-form.component';



@NgModule({
    declarations: [
        NewItemFormComponent
    ],
    exports: [
        NewItemFormComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NewItemFormModule { }

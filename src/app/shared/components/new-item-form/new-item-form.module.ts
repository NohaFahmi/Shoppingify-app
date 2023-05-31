import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemFormComponent } from './new-item-form.component';
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";



@NgModule({
    declarations: [
        NewItemFormComponent
    ],
    exports: [
        NewItemFormComponent
    ],
  imports: [
    CommonModule,
    ChipsModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule
  ]
})
export class NewItemFormModule { }

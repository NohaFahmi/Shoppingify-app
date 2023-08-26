import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewItemFormComponent} from './new-item-form.component';
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {ReactiveFormsModule} from "@angular/forms";


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
    ButtonModule,
    FileUploadModule,
    ReactiveFormsModule
  ]
})
export class NewItemFormModule { }

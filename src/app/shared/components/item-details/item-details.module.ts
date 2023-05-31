import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details.component';
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    ItemDetailsComponent
  ],
  exports: [
    ItemDetailsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class ItemDetailsModule { }

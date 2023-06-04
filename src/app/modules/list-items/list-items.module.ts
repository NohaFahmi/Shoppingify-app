import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemsRoutingModule } from './list-items-routing.module';
import { ListItemsComponent } from './list-items.component';
import {ChipModule} from "primeng/chip";
import {ChipsModule} from "primeng/chips";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    ListItemsComponent
  ],
    imports: [
        CommonModule,
        ListItemsRoutingModule,
        ChipModule,
        ChipsModule,
        InputTextModule,
        ButtonModule
    ]
})
export class ListItemsModule { }

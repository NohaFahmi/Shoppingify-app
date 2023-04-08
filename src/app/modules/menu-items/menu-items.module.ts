import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemsRoutingModule } from './menu-items-routing.module';
import { MenuItemsComponent } from './menu-items.component';
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [
    MenuItemsComponent
  ],
    imports: [
        CommonModule,
        MenuItemsRoutingModule,
        CoreModule
    ]
})
export class MenuItemsModule { }

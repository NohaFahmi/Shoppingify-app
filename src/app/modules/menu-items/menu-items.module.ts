import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItemsRoutingModule } from './menu-items-routing.module';
import { MenuItemsComponent } from './menu-items.component';


@NgModule({
  declarations: [
    MenuItemsComponent
  ],
    imports: [
        CommonModule,
        MenuItemsRoutingModule,
    ]
})
export class MenuItemsModule { }

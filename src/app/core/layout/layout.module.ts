import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import { LayoutComponent } from './layout.component';
import {BadgeModule} from "primeng/badge";
import {ShoppingListSidebarModule} from "../../shared/components/shopping-list-sidebar/shopping-list-sidebar.module";


@NgModule({
  declarations: [SidebarComponent, LayoutComponent],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        BadgeModule,
        ShoppingListSidebarModule
    ]
})
export class LayoutModule { }

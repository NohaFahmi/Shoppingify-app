import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import { LayoutComponent } from './layout.component';
import {BadgeModule} from "primeng/badge";
import {ShoppingListSidebarModule} from "../../shared/components/shopping-list-sidebar/shopping-list-sidebar.module";
import {AvatarModule} from "primeng/avatar";
import {ListboxModule} from "primeng/listbox";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [SidebarComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BadgeModule,
    ShoppingListSidebarModule,
    AvatarModule,
    ListboxModule,
    FormsModule
  ]
})
export class LayoutModule { }

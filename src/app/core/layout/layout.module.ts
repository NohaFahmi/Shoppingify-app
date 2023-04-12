import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import { LayoutComponent } from './layout.component';
import {BadgeModule} from "primeng/badge";


@NgModule({
  declarations: [SidebarComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BadgeModule
  ]
})
export class LayoutModule { }

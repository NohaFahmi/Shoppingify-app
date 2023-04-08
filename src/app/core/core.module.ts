import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {SlideMenuModule} from "primeng/slidemenu";
import {BadgeModule} from "primeng/badge";



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SlideMenuModule,
    BadgeModule
  ]
})
export class CoreModule { }

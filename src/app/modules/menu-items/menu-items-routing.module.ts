import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuItemsComponent} from "./menu-items.component";

const routes: Routes = [
  {path:'', pathMatch:'full', component: MenuItemsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuItemsRoutingModule { }

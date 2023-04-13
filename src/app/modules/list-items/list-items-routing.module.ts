import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListItemsComponent} from "./list-items.component";

const routes: Routes = [
  {path:'', pathMatch:'full', component: ListItemsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListItemsRoutingModule { }

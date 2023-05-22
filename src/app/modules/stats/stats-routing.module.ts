import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StatsComponent} from "./stats.component";

const routes: Routes = [
  {path:'', pathMatch:'full', component: StatsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule { }

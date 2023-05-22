import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'items', loadChildren: () => import('../../modules/list-items/list-items.module').then(mod => mod.ListItemsModule)},
      {path: 'orders-history', loadChildren: () => import('../../modules/history/history.module').then(mod => mod.HistoryModule)},
      {path: 'stats', loadChildren: () => import('../../modules/stats/stats.module').then(mod => mod.StatsModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

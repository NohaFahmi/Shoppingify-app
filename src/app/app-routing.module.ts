import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'auth/login'},
  {path: 'auth', pathMatch: 'full', redirectTo: 'auth/login'},
  {path: 'auth', loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule)},
  {path: 'items', loadChildren: () => import('./modules/menu-items/menu-items.module').then(m => m.MenuItemsModule)},
  {path: 'orders-history', loadChildren: () => import('./modules/menu-items/menu-items.module').then(m => m.MenuItemsModule)},
  {path: 'stats', loadChildren: () => import('./modules/menu-items/menu-items.module').then(m => m.MenuItemsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

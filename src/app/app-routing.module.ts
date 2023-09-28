import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "./shared/services/auth/auth-guard";

const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule),
  },
  {
    path: 'app',
    loadChildren: () => import('./core/layout/layout.module').then(m => m.LayoutModule),
    canActivate: [authGuard],
  },
  {path: '**', redirectTo: '/app'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

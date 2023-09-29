import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/auth/login']);
const redirectLoggedInToApp = () => redirectLoggedInTo(['/app/items']);

const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLoggedInToApp
    }
  },
  {
    path: 'app',
    loadChildren: () => import('./core/layout/layout.module').then(m => m.LayoutModule),
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    }
  },
  {path: '**', redirectTo: '/app'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

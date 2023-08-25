import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/auth/login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['/app/items']);

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule),
    ...canActivate(redirectLoggedInToItems),
  },
  {
    path: 'app',
    loadChildren: () => import('./core/layout/layout.module').then(m => m.LayoutModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

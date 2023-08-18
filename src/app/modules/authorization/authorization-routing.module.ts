import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {MessageService} from "primeng/api";

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'signup', pathMatch: 'full', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MessageService]
})
export class AuthorizationRoutingModule { }

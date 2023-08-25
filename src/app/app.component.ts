import {Component, OnInit} from '@angular/core';
import {IUserInfo} from "./shared/interfaces/auth.interface";
import {AuthService} from "./shared/services/auth/auth.service";
import {Store} from "@ngrx/store";
import {AuthorizationActions, AuthorizationSelectors, AuthState} from "./store/authorization";
import {Observable, of} from "rxjs";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shoppingify-app';

  constructor() {
  }

  ngOnInit(): void {
  }
}

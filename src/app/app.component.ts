import {Component, OnInit} from '@angular/core';
import {AuthorizationActions, AuthState} from "./store/authorization";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shoppingify-app';

  constructor(private store: Store<AuthState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(AuthorizationActions.loadCheckAuth());

  }
}

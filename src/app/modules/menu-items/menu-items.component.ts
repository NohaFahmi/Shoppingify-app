import { Component } from '@angular/core';
import {AuthService} from "../../shared/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {

  constructor(private authService: AuthService, private router:Router) {

  }
  onLogout() {
    this.authService.logoutUser().then(() => {
      this.authService.userInfo.next(null);
      this.router.navigate(['/auth/login']);
    })
  }
}

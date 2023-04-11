import {Component, OnInit} from '@angular/core';
import {IUserInfo} from "./shared/interfaces/auth.interface";
import {AuthService} from "./shared/services/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shoppingify-app';
  userInfo:IUserInfo | null = null;

  constructor(private authService:AuthService){
  }

  ngOnInit(): void {
    this.authService.getUserRefreshToken().subscribe((data) => {
      console.log("REFRESH TOKEN", data);
    })
    let userInfoSub = this.authService.userInfo.subscribe((data) => {
      this.userInfo = data;
    })
  }
}

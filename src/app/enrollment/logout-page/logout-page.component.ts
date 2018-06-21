import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfoService } from '../../storage/user-info.service';
import { LoginService } from '../../network/login.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {
  userInfo: UserInfoService;
  loginService: LoginService;

  constructor(
    loginService: LoginService,
     private router: Router,
     userInfo: UserInfoService
  ) {
    this.loginService = loginService;
    this.userInfo = userInfo;
   }

  ngOnInit() {
  }

  logout() {
    this.userInfo.token = '';
    this.loginService.setNavBarState(false);
    this.router.navigate(['/login']);
  }

}

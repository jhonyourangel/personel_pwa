import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { UserInfoService } from './storage/user-info.service';
import { Router } from '@angular/router';
import { LoginService } from './network/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUserLogged: Boolean = false;
  userInfo: UserInfoService;
  router: Router;

  constructor(
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer, 
    router: Router, 
    userInfo: UserInfoService,
    private navState$: LoginService
  ) {
    console.log('constructing the app component');
    this.userInfo = userInfo;
    this.router = router;
    this.checkToken();
    iconRegistry.addSvgIcon('hamburger-menu', sanitizer.bypassSecurityTrustResourceUrl('assets/menu-icons/hamburger-menu.svg'));
    this.navState$.navState$.subscribe((logged) => {
      this.isUserLogged = logged;
      this.checkToken();
    });
  }

  // is token expired go to login
  checkToken() {
    const token = this.userInfo.token;
    console.log('checking for token');
    if (token === '') {
      this.router.navigate(['/login']);
      this.isUserLogged = false;
    } else {
      this.isUserLogged = true;
    }
  }
}

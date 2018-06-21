import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginService } from '../../network/login.service';
import { UserInfoService } from '../../storage/user-info.service';
import { AuthResponse } from '../../models/authResponse';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formEmail: string;
  formPassword: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();
  loginService: LoginService;
  userInfo: UserInfoService;
  authResponse: AuthResponse;

  constructor( 
    loginService: LoginService,
    userInfo: UserInfoService,
    private router: Router,
  ) {

    this.loginService = loginService;
    this.userInfo = userInfo;
  }
  ngOnInit() {
    this.checkToken();
  }

  onLogin() {
    console.log(this.formEmail, this.formPassword);
    // if you insert the correct credentials is working great

    this.loginService.login(this.formEmail, this.formPassword)
      .subscribe((data: AuthResponse) => {
        console.log(data);
        this.userInfo.token = data.token;
        this.loginService.setNavBarState(true);
        this.checkToken();
      });
  }

  checkToken() {
    const token = this.userInfo.token;
    if ( token !== '' ) {
      console.log(`token is present in the browser storage ${token}`);
      this.router.navigate(['/home']);
    }
  }
}

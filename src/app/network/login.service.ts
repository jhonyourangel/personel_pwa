import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfoService } from '../storage/user-info.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_url = 'https://personel.herokuapp.com/api';
  private navStateSource = new Subject<boolean>();
  navState$ = this.navStateSource.asObservable();

  constructor(private http: HttpClient,
    private userInfo: UserInfoService
  ) {
    this.api_url = userInfo.api_url();
  }

  /**
   * comunicate to the navbar the state of the token
   */
  setNavBarState(tokenIsValid: boolean) {
    this.navStateSource.next(tokenIsValid);
  }

   /**
    * authentication here
    */

  login(email: string, password: string) {
    const body = {
      email,
      password
    };
    return this.http.post(`${this.api_url}/login`, body);
  }

  // register service call it here
  register(name: string, surname: string, email: string, password: string) {
    const body = {
      name,
      surname,
      email,
      password
    };
    return this.http.post(`${this.api_url}/register`, body);
  }
}

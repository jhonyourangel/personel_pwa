import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AuthResponse } from '../models/authResponse';
import { decode } from '@angular/router/src/url_tree';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private api_url_prod = 'https://personel.herokuapp.com/api';
  private api_url_dev = 'http://localhost:8080/api';

  constructor() {
    this.validateToken();
  }

  api_url() {
    return this.api_url_prod;
  }

  get token(): string {
    console.log('getting the token');
    const token = window.localStorage.getItem('token');
    this.decodeToken(token);
    return token;
  }

  set token(t: string) {
    window.localStorage.setItem('token', t);
    console.log('setting the token');
  }

  // TODO: the server is sending just hours of validity
  // check and set a proper date
  decodeToken(token: String) {
    if ( token === '' || token === null || token === undefined ) {
      return null;
    }
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    console.log(decodedToken);
    return decodedToken;
  }
  
  validateToken() {
    const decodedToken = this.decodeToken(this.token);
    if ( decodedToken === null ) {
      return false;
    }

    console.log(decodedToken['exp']);

    const exp = moment(decodedToken['exp']);
    const now = moment();

    const tokenIsValid = ( exp.diff(now) <= 0 ) ? false : true;
    return tokenIsValid;
  }

  get user(): AuthResponse {
    const user = JSON.parse(window.localStorage.getItem('user'));
    return user;
  }

  set user(u: AuthResponse) {
    window.localStorage.setItem('user', JSON.stringify(u));
  }
}

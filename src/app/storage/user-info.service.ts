import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private api_url_prod = 'https://personel.herokuapp.com/api';
  private api_url_dev = 'http://localhost:8080/api';

  constructor() {}

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
      return;
    }
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    console.log(decodedToken);
    console.log(decodedToken['exp']);
    const exp = moment(decodedToken['exp']).format('DD MMM YYYY HH:mm:ss');
    console.log(exp);
  }
}

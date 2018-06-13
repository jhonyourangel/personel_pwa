import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_url = 'https://personel.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  login (email: string, password: string) {
    const body = {
      email,
      password
    };
    return this.http.post(`${this.api_url}/login`, body);
  }
}

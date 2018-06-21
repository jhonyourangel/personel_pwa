import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfoService } from '../storage/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  api_url = 'https://personel.herokuapp.com/api/pwa';

  constructor(
    private http: HttpClient,
    private userInfo: UserInfoService
  ) {
    this.api_url = `${userInfo.api_url()}/pwa`;
   }

  createAuthorizationHeader() {
    let head = new HttpHeaders();
    head = head.append('Authorization', 'Bearer ' + this.userInfo.token);
    head = head.append('demo', 'this is the demo ');
    return head;
  }

  transactions() {
    return this.http.get(`${this.api_url}/transactions`, { headers: this.createAuthorizationHeader() });
  }

  addTransaction(transaction) {
    return this.http.post(`${this.api_url}/addtransaction`, transaction, { headers: this.createAuthorizationHeader() });
  }

  editTransaction(transaction) {
    return this.http.put(`${this.api_url}/edittransaction`, transaction, { headers: this.createAuthorizationHeader() });
  }

  deleteTransaction() {

  }
}

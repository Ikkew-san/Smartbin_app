import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from  '../api-url';

/*
  Generated class for the AuthenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenProvider {

  constructor(public http: HttpClient) {
  }

  getAuthen(params) {
    return this.http.post(`${API_URL}/authen`, params);
  }

  setRegister(params) {
    return this.http.post(`${API_URL}/register`, params);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API = 'http://localhost:5000/api/auth';
  private tokenKey = 'token';
  // private roleKey = 'misRole';

  constructor(private http: HttpClient) {}

  userRegister(data: any) {
    return this.http.post(`${this.API}/register`, data);
  }

  userLogin(data: any) {
    return this.http.post(`${this.API}/login`, data);
  }

  logout() {
    sessionStorage.clear();
  }

  isLoggedIn() {
    return !!sessionStorage.getItem(this.tokenKey);
  }

  getUser() {
    return sessionStorage.getItem('user');
  }
}

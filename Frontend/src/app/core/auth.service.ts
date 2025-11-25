import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API = 'http://localhost:5000/api/auth';
  private tokenKey = 'misToken';
  private roleKey = 'misRole';

  constructor(private http: HttpClient) {}

  studentRegister(data: any) {
    return this.http.post(`${this.API}/student/register`, data);
  }

  studentLogin(data: any) {
    console.log(data, 'data auth service');
    return this.http.post(`${this.API}/student/login`, data);
  }

  facultyLogin(data: any) {
    return this.http.post(`${this.API}/faculty/login`, data);
  }

  saveAuth(token: string, role: string) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.roleKey, role);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return !!localStorage.getItem(this.tokenKey);
  }

  getRole() {
    return localStorage.getItem(this.roleKey);
  }
}

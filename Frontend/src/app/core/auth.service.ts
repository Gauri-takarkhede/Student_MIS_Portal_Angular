import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API = `${environment.apiUrl}/api/auth`;
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
    const token = this.getToken();
    if (!token) return null;

    const decoded: any = jwtDecode(token);
    return decoded;
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const decoded: any = jwtDecode(token);
    return decoded.role;
  }

  getUserName(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const decoded: any = jwtDecode(token);
    return decoded.name;
  }
}

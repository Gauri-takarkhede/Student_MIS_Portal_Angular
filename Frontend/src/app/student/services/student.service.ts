import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:5000/api/students';

  constructor(private http: HttpClient) {}

  getProfile(mis: any) {
    return this.http.get(`${this.baseUrl}/profile/${mis}`);
  }

  getAllProfiles() {
    return this.http.get(`${this.baseUrl}/profiles`);
  }

  getPublishedModules() {
    return this.http.get(`${this.baseUrl}/published`);
  }

  submitElectives(data: any) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/submitElectives`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

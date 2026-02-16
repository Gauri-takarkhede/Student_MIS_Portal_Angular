import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = `${environment.apiUrl}/api/students`;

  constructor(private http: HttpClient) {}

  // GET ALL STUDENTS
  getAllStudents() {
    const token = sessionStorage.getItem('token');

    return this.http.get<any>(`${this.baseUrl}/getAllStudents`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getStudentById(id: any) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getProfile(mis: any) {
    const token = sessionStorage.getItem('token');
    return this.http.get(`${this.baseUrl}/profile/${mis}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getAllProfiles() {
    return this.http.get(`${this.baseUrl}/profiles`);
  }

  getNonPublishedModules() {
    return this.http.get(`${this.baseUrl}/published`);
  }

  submitElectives(data: any) {
    const token = sessionStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/submitElectives`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

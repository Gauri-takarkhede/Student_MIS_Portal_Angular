import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class ResultService {
  private base = `${environment.apiUrl}/api/results`;

  constructor(private http: HttpClient) {}

  addResult(data: any) {
    const token = sessionStorage.getItem('token');

    return this.http.post(`${this.base}/addResult`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getStudentResults(mis: string) {
    const token = sessionStorage.getItem('token');

    return this.http.get(`${this.base}/${mis}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

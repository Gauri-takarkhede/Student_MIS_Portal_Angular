import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BonafideService {
  private base = 'http://localhost:5000/api/bonafide';

  constructor(private http: HttpClient) {}

  createRequest(data: any) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.base}/request`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getMyRequests() {
    const token = localStorage.getItem('token');
    return this.http.get<any>(`${this.base}/my-requests`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getAllRequests() {
    return this.http.get<any>(`${this.base}/all`);
  }

  approve(id: string) {
    return this.http.patch(`${this.base}/approve/${id}`, {});
  }

  reject(id: string) {
    return this.http.patch(`${this.base}/reject/${id}`, {});
  }
}

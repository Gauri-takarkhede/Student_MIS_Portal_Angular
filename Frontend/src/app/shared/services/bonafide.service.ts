import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BonafideService {
  private base = `${environment.apiUrl}/api/bonafide`;

  constructor(private http: HttpClient) {}

  createRequest(data: any) {
    const token = sessionStorage.getItem('token');
    return this.http.post(`${this.base}/request`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getMyRequests() {
    const token = sessionStorage.getItem('token');
    return this.http.get<any>(`${this.base}/my-requests`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getAllRequests() {
    const token = sessionStorage.getItem('token');
    return this.http.get<any>(`${this.base}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  approve(id: string) {
    const token = sessionStorage.getItem('token');
    return this.http.patch(
      `${this.base}/approve/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }

  reject(id: string) {
    const token = sessionStorage.getItem('token');
    return this.http.patch(
      `${this.base}/reject/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }

  downloadBonafide(id: String) {
    return this.http.get(`${this.base}/download/${id}`, {
      responseType: 'blob',
    });
  }
}

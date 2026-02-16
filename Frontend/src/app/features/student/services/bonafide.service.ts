import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BonafideService {
  private baseUrl = `${environment.apiUrl}/api/bonafide`;
  constructor(private http: HttpClient) {}

  createRequest(data: any) {
    return this.http.post(`${this.baseUrl}/request`, data);
  }

  getMyRequests() {
    return this.http.get(`${this.baseUrl}/my-requests`);
  }
}

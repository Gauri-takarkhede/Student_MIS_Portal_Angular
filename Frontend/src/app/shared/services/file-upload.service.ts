import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private base = `${environment.apiUrl}/api/profile`;

  constructor(private http: HttpClient) {}

  uploadPhoto(data: any) {
    const token = sessionStorage.getItem('token');
    return this.http.put(`${this.base}/upload`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  removePhoto() {
    const token = sessionStorage.getItem('token');
    return this.http.put(
      `${this.base}/remove`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private base = 'http://localhost:5000/api/profile';

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

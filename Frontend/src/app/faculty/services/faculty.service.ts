import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FacultyService {
  private baseUrl = 'http://localhost:5000/api/electives';

  constructor(private http: HttpClient) {}

  // CREATE elective module
  createElective(payload: any) {
    return this.http.post(`${this.baseUrl}/create`, payload);
  }

  // GET all electives
  getAllElectives() {
    return this.http.get(`${this.baseUrl}`);
  }

  // PUBLISH elective
  publishElective(id: string) {
    return this.http.put(`${this.baseUrl}/publish/${id}`, {});
  }

  allocate(moduleId: string) {
    const token = localStorage.getItem('faculty-token');
    return this.http.post(
      `${this.baseUrl}/allocate/${moduleId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getAllocations(moduleId: string) {
    return this.http.get(`${this.baseUrl}/allocations/${moduleId}`);
  }

  getAllPreferences() {
    return this.http.get(`${this.baseUrl}/getAllPreferences`);
  }
}

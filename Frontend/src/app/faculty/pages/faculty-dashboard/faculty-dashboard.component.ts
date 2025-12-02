import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from '../../services/faculty.service';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.scss'],
})
export class FacultyDashboardComponent {
  allPreferences: any = [];
  loading = false;
  constructor(private router: Router, private facultyService: FacultyService) {}

  goTo(path: string) {
    this.router.navigate(['/faculty/' + path]);
  }

  getAllPreferences() {
    this.loading = true;
    this.facultyService.getAllPreferences().subscribe({
      next: (preferences) => {
        this.allPreferences = preferences;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching preferences:', err);
        this.allPreferences = [];
        this.loading = false;
      },
    });
  }
}

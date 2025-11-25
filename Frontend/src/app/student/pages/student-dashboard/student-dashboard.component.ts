import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
})
export class StudentDashboardComponent implements OnInit {
  student: any = null;
  loading = true;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent() {
    const mis = this.route.snapshot.paramMap.get('mis');
    this.studentService.getProfile(mis).subscribe({
      next: (res: any) => {
        this.student = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}

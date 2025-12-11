import { Component, OnInit, inject } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
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
    const user = sessionStorage.getItem('user');
    const mis = user ? JSON.parse(user).mis : 0;
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

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}

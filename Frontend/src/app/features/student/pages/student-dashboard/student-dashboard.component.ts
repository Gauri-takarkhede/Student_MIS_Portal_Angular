import { Component, OnInit, inject } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit {
  student: any = null;
  loading = true;
  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  categories: string[] = ['General', 'OBC', 'SC', 'ST', 'EWS'];
  religions: string[] = [
    'Hindu',
    'Muslim',
    'Christian',
    'Sikh',
    'Buddhist',
    'Jain',
    'Parsi',
    'Jewish',
    'Other',
  ];
  courses: string[] = ['B.Tech', 'M.Tech'];
  maxDate = new Date();

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent() {
    const user = this.auth.getUser();
    const mis = user.id;
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

  personalDetailsFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    selectedBloodGroup: ['', Validators.required],
    category: ['', Validators.required],
    religion: ['', Validators.required],
  });

  academicsFormGroup = this._formBuilder.group({
    course: ['', Validators.required],
    dateOfAdmission: ['', Validators.required],
  });
}

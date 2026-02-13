import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentService } from 'src/app/features/student/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { FacultyService } from '../../../services/faculty.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  @Output() goToALlStudentsStep = new EventEmitter<void>();
  student: any = null;
  loading = false;
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
  departments: string[] = [
    'Computer',
    'Electronics',
    'Electrical',
    'Mechanical',
    'Civil',
  ];
  genders: string[] = ['Female', 'Male', 'Prefer not to say'];
  maxDate = new Date();
  personalDetailsFormGroup: FormGroup;
  academicsFormGroup: FormGroup;
  studentFormGroup: FormGroup;
  showDeatailsTab: boolean = false;
  mis: number = 0;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private fb: FormBuilder,
    private facultyService: FacultyService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.studentFormGroup = this.fb.group({
      name: ['', Validators.required],
      mis: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.personalDetailsFormGroup = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      selectedBloodGroup: ['', Validators.required],
      category: ['', Validators.required],
      religion: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });

    this.academicsFormGroup = this.fb.group({
      course: ['', Validators.required],
      dateOfAdmission: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.studentFormGroup.invalid) {
      this.showError('Invalid Inputs');
      return;
    }

    const { name, email, mis, password, department } =
      this.studentFormGroup.value;
    const role = 'student';
    this.mis = mis;

    const payload = { name, email, mis, password, department, role };

    this.auth.userRegister(payload).subscribe({
      next: (res) => {
        this.showSuccess('Registered successfully!');
        this.showDeatailsTab = true;
      },
      error: (err) => {
        this.showError('Registration failed!');
      },
    });
  }

  submitDeatils(): void {
    if (
      this.personalDetailsFormGroup.invalid ||
      this.academicsFormGroup.invalid
    ) {
      this.showError('Invalid Inputs');
      return;
    }
    const finalData = {
      mis: this.mis,
      ...this.personalDetailsFormGroup.value,
      ...this.academicsFormGroup.value,
    };
    this.facultyService.addStudentDetails(finalData).subscribe({
      next: (res) => {
        this.showSuccess('Student details saved successfully!');

        this.resetForm(this.studentFormGroup);
        this.resetForm(this.personalDetailsFormGroup);
        this.resetForm(this.academicsFormGroup);
        this.showDeatailsTab = false;
        this.goToALlStudentsStep.emit();
      },
      error: (err) => {
        this.showError('Something went wrong!');
      },
    });
  }

  showSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['error-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  resetForm(form: FormGroup) {
    form.reset();
    form.markAsPristine();
    form.markAsUntouched();
  }
}

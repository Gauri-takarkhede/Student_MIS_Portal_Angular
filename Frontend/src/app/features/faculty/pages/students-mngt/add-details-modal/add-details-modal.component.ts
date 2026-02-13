import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FacultyService } from '../../../services/faculty.service';

@Component({
  selector: 'app-add-details-modal',
  templateUrl: './add-details-modal.component.html',
  styleUrls: ['./add-details-modal.component.scss'],
})
export class AddDetailsModalComponent implements OnInit {
  personalDetailsFormGroup: FormGroup;
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
  constructor(
    public dialogRef: MatDialogRef<AddDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public student: any,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private facultyService: FacultyService,
  ) {
    console.log(student);
    this.personalDetailsFormGroup = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      selectedBloodGroup: ['', Validators.required],
      category: ['', Validators.required],
      religion: ['', Validators.required],
      course: ['', Validators.required],
      dateOfAdmission: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onClose() {
    this.dialogRef.close(false);
  }

  // onConfirm() {}
  submitDeatils(): void {
    if (this.personalDetailsFormGroup.invalid) {
      this.showError('Invalid Inputs');
      return;
    }
    const finalData = {
      mis: this.student.mis,
      ...this.personalDetailsFormGroup.value,
    };
    this.facultyService.addStudentDetails(finalData).subscribe({
      next: (res) => {
        this.dialogRef.close(true);
        this.showSuccess('Student details saved successfully!');
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
}

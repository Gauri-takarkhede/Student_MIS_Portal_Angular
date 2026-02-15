import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FacultyService } from '../../services/faculty.service';
import { StudentService } from 'src/app/features/student/services/student.service';
import { AuthService } from 'src/app/core/auth.service';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.scss'],
})
export class FacultyDashboardComponent {
  mis: number = 0;
  student: any;
  facultyDetails: any = null;
  loading = true;
  selectedFile!: File;
  imagePreview: string | null = null;
  userId = 'USER_ID_HERE';
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
  facultyFormGroup: FormGroup;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private studentService: StudentService,
    private auth: AuthService,
    private fb: FormBuilder,
    private fileUploadService: FileUploadService,
    private facultyService: FacultyService,
    private snackBar: MatSnackBar,
  ) {
    this.facultyFormGroup = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      selectedBloodGroup: ['', Validators.required],
      category: ['', Validators.required],
      religion: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      course: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      specialization: ['', Validators.required],
      designation: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadFaculty();
  }

  loadFaculty() {
    const user = this.auth.getUser();
    const mis = user.id;
    this.mis = mis;
    this.studentService.getProfile(mis).subscribe({
      next: (res: any) => {
        console.log(res);
        this.student = res;
        this.facultyDetails = res.facultyDetailsId;
        this.imagePreview = res.profileImage;
        sessionStorage.setItem(
          'profileImage',
          JSON.stringify(this.imagePreview ? this.imagePreview : ''),
        );
        this.loading = false;
        if (this.facultyDetails) {
          const formattedJoiningDate = this.facultyDetails.Date_of_Joining
            ? new Date(this.facultyDetails.Date_of_Joining)
                .toISOString()
                .split('T')[0]
            : '';
          const formattedBirthDate = this.facultyDetails.Date_of_Birth
            ? new Date(this.facultyDetails.Date_of_Birth)
                .toISOString()
                .split('T')[0]
            : '';
          const mappedData = {
            address: this.facultyDetails.address,
            city: this.facultyDetails.city,
            state: this.facultyDetails.state,
            selectedBloodGroup: this.facultyDetails.blood_group,
            category: this.facultyDetails.category,
            religion: this.facultyDetails.Religion,
            gender: this.facultyDetails.gender,
            dateOfBirth: formattedBirthDate,
            course: this.facultyDetails.course,
            dateOfJoining: formattedJoiningDate,
            specialization: this.facultyDetails.specialization,
            designation: this.facultyDetails.designation,
          };

          this.facultyFormGroup.patchValue(mappedData);
        }

        // // Disable entire form
        // this.facultyFormGroup.disable();
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      alert('Only JPG or PNG allowed');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert('Max size 2MB');
      return;
    }

    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  uploadPhoto() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('photo', this.selectedFile);

    this.fileUploadService.uploadPhoto(formData).subscribe((res: any) => {
      this.imagePreview = res.profileImage;
      alert('Uploaded successfully');
    });
  }

  removePhoto() {
    this.fileUploadService.removePhoto().subscribe(() => {
      this.imagePreview = null;
      if (this.fileInput) {
        this.fileInput.nativeElement.value = '';
        sessionStorage.removeItem('profileImage');
      }
      alert('Photo removed');
    });
  }

  submitDeatils(): void {
    if (this.facultyFormGroup.invalid) {
      this.showError('Invalid Inputs');
      return;
    }
    const finalData = {
      mis: this.mis,
      ...this.facultyFormGroup.value,
    };
    this.facultyService.addFacultyDetails(finalData).subscribe({
      next: (res) => {
        this.showSuccess('Faculty details saved successfully!');
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

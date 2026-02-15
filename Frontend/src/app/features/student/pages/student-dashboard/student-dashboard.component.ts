import {
  Component,
  OnInit,
  inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit {
  student: any;
  studentDetails: any = null;
  loading = true;
  selectedFile!: File;
  imagePreview: string | null = null;
  userId = 'USER_ID_HERE';
  // bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  // categories: string[] = ['General', 'OBC', 'SC', 'ST', 'EWS'];
  // religions: string[] = [
  //   'Hindu',
  //   'Muslim',
  //   'Christian',
  //   'Sikh',
  //   'Buddhist',
  //   'Jain',
  //   'Parsi',
  //   'Jewish',
  //   'Other',
  // ];
  // courses: string[] = ['B.Tech', 'M.Tech'];
  // maxDate = new Date();
  studentFormGroup: FormGroup;
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private fb: FormBuilder,
    private fileUploadService: FileUploadService,
  ) {
    this.studentFormGroup = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      selectedBloodGroup: ['', Validators.required],
      category: ['', Validators.required],
      religion: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      course: ['', Validators.required],
      dateOfAdmission: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent() {
    const user = this.auth.getUser();
    const mis = user.id;
    this.studentService.getProfile(mis).subscribe({
      next: (res: any) => {
        console.log(res);
        this.student = res;
        this.studentDetails = res.studentDetailsId;
        this.imagePreview = res.profileImage;
        sessionStorage.setItem(
          'profileImage',
          JSON.stringify(this.imagePreview ? this.imagePreview : ''),
        );
        this.loading = false;
        const formattedAdmissionDate = this.studentDetails.Date_of_Admission
          ? new Date(this.studentDetails.Date_of_Admission)
              .toISOString()
              .split('T')[0]
          : '';
        const formattedBirthDate = this.studentDetails.Date_of_Birth
          ? new Date(this.studentDetails.Date_of_Admission)
              .toISOString()
              .split('T')[0]
          : '';
        const mappedData = {
          address: this.studentDetails.address,
          city: this.studentDetails.city,
          state: this.studentDetails.state,
          selectedBloodGroup: this.studentDetails.blood_group,
          category: this.studentDetails.category,
          religion: this.studentDetails.Religion,
          gender: this.studentDetails.gender,
          dateOfBirth: formattedBirthDate,
          course: this.studentDetails.course,
          dateOfAdmission: formattedAdmissionDate,
        };

        this.studentFormGroup.patchValue(mappedData);

        // Disable entire form
        this.studentFormGroup.disable();
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
}

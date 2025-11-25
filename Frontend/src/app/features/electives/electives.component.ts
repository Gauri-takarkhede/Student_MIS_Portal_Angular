import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/student/services/student.service';

@Component({
  selector: 'app-electives',
  templateUrl: './electives.component.html',
  styleUrls: ['./electives.component.scss'],
})
export class ElectivesComponent {
  electiveForm!: FormGroup;
  subjects = ['ML', 'AI', 'DBMS'];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.electiveForm = this.fb.group({
      p1: ['', Validators.required],
      p2: ['', Validators.required],
      p3: ['', Validators.required],
    });
  }

  submitPreferences() {
    if (this.electiveForm.valid) {
      this.studentService
        .submitElectives(this.electiveForm.value)
        .subscribe((res) => {
          alert('Preferences submitted successfully!');
        });
    }
  }
}

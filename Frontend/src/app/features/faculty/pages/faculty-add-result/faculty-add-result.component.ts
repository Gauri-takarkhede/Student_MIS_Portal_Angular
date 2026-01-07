import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ResultService } from 'src/app/shared/services/results.service';
import { StudentService } from 'src/app/features/student/services/student.service';

@Component({
  selector: 'app-faculty-add-result',
  templateUrl: './faculty-add-result.component.html',
  styleUrls: ['./faculty-add-result.component.scss'],
})
export class FacultyAddResultComponent {
  students: any[] = [];
  preview: any;

  form = this.fb.group({
    studentId: [''],
    semester: [''],
    academicYear: [''],
    subjects: this.fb.array([]),
  });

  get subjects() {
    return this.form.get('subjects') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private resultService: ResultService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.loadStudents();
    this.form.valueChanges.subscribe(() => {
      this.preview = null;
    });
  }

  loadStudents() {
    this.studentService.getAllStudents().subscribe((res: any) => {
      this.students = res;
    });
  }

  addSubject() {
    const s = this.fb.group({
      name: [''],
      cgpaGot: [''],
      passingCgpa: [''],
    });

    this.subjects.push(s);
  }

  removeSubject(i: number) {
    this.subjects.removeAt(i);
  }

  calculateResult() {
    const subjects = this.subjects.controls.map((c: any) => c.value);

    if (!subjects.length) {
      alert('Add at least one subject!');
      return;
    }

    let totalCgpa = 0;
    let allPassed = true;

    subjects.forEach((s: any) => {
      const cgpaGot = Number(s.cgpaGot || 0);
      const passingCgpa = Number(s.passingCgpa || 0);

      // Fail condition
      if (cgpaGot < passingCgpa) {
        allPassed = false;
      }

      totalCgpa += cgpaGot;
    });

    // Average CGPA
    const averageCgpa = totalCgpa / subjects.length;

    // Set preview values
    this.preview = {
      cgpa: averageCgpa.toFixed(2),
      status: allPassed ? 'Pass' : 'Fail',
    };
  }

  submit() {
    if (!this.preview) {
      alert('Please calculate result first!');
      return;
    }

    const payload = {
      ...this.form.value,
      cgpa: this.preview.cgpa,
      status: this.preview.status,
    };
    this.resultService.addResult(payload).subscribe({
      next: () => {
        alert('Result Added Successfully!');
        this.form.reset();
        this.subjects.clear();
      },
      error: () => alert('Error adding result'),
    });
  }
}

import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { uniquePreferencesValidator } from './student-electives.validator';

@Component({
  selector: 'app-student-electives',
  templateUrl: './student-electives.component.html',
  styleUrls: ['./student-electives.component.scss'],
})
export class StudentElectivesComponent {
  electiveForm!: FormGroup;
  modules: any = null;
  selectedModule: any = null;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.electiveForm = this.fb.group(
      {
        moduleId: ['', Validators.required],
        preferences: this.fb.array([]),
      },
      { validators: [uniquePreferencesValidator] }
    );

    this.studentService.getNonPublishedModules().subscribe((data) => {
      this.modules = data;
    });
  }

  get preferencesArray() {
    return this.electiveForm.get('preferences') as FormArray;
  }

  onModuleChange() {
    const id = this.electiveForm.value.moduleId;

    this.preferencesArray.clear();

    this.selectedModule = this.modules.find((m: any) => m._id === id);

    if (this.selectedModule) {
      const totalSubjects = this.selectedModule.subjects.length;

      // Create dropdowns dynamically
      for (let i = 0; i < totalSubjects; i++) {
        this.preferencesArray.push(this.fb.control('', Validators.required));
      }
      this.electiveForm.updateValueAndValidity();
    }
  }

  submitPreferences() {
    if (this.electiveForm.invalid) {
      if (this.electiveForm.errors) {
        alert('Preferences should be unique');
      } else {
        alert('Please fill all preferences!');
      }

      return;
    }
    const preferences = this.preferencesArray.value;

    const payload = {
      moduleId: this.electiveForm.value.moduleId,
      preferences: preferences,
    };

    this.studentService.submitElectives(payload).subscribe((data: any) => {
      const msg = data.message;
      alert(msg);
    });
  }
}

import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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
        p1: ['', Validators.required],
        p2: ['', Validators.required],
        p3: ['', Validators.required],
      },
      {
        validators: [uniquePreferencesValidator],
      }
    );

    this.studentService.getPublishedModules().subscribe((data) => {
      this.modules = data;
    });
  }

  onModuleChange() {
    const id: string = this.electiveForm.value.moduleId;
    if (!id) {
      this.selectedModule = null;
      return;
    }
    this.selectedModule = this.modules.find((m: any) => m._id === id);
  }

  submitPreferences() {
    if (this.electiveForm.invalid) {
      if (this.electiveForm.errors?.['duplicatePreferences']) {
        alert('Duplicate preference not allowed');
      }
      return;
    }

    const payload = {
      moduleId: this.electiveForm.value.moduleId,
      preferences: [
        this.electiveForm.value.p1,
        this.electiveForm.value.p2,
        this.electiveForm.value.p3,
      ],
    };

    this.studentService.submitElectives(payload).subscribe(() => {
      alert('Preferences submitted!');
    });
  }
}

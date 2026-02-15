import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from '../../services/faculty.service';
import { ElectivesService } from '../../services/electives.service';

@Component({
  selector: 'app-create-electives',
  templateUrl: './create-electives.component.html',
  styleUrls: ['./create-electives.component.scss'],
})
export class CreateElectivesComponent {
  electiveForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private facultyService: FacultyService,
    private electivesService: ElectivesService,
  ) {
    this.electiveForm = this.fb.group({
      moduleName: ['', Validators.required],
      subjectsArr: this.fb.array([]), // FormArray of FormGroup { subject, maxLimit }
    });

    // start with one subject row
    this.addSubject();
  }

  get subjectsArr(): FormArray {
    return this.electiveForm.get('subjectsArr') as FormArray;
  }

  // create a FormGroup for one subject
  private createSubjectGroup(): FormGroup {
    return this.fb.group({
      subject: ['', Validators.required],
      maxLimit: [1, [Validators.required, Validators.min(0)]],
    });
  }

  addSubject() {
    this.subjectsArr.push(this.createSubjectGroup());
  }

  removeSubject(i: number) {
    this.subjectsArr.removeAt(i);
  }

  createModule() {
    if (!this.electiveForm.valid) {
      this.electiveForm.markAllAsTouched();
      return;
    }

    const { moduleName, subjectsArr } = this.electiveForm.value;
    const subjects = subjectsArr.map((s: any) => s.subject);
    const maxLimitsObj: Record<string, number> = {};
    subjectsArr.forEach((s: any) => {
      maxLimitsObj[s.subject] = Number(s.maxLimit);
    });

    const payload = {
      moduleName,
      subjects,
      maxLimits: maxLimitsObj,
    };

    this.facultyService.createElective(payload).subscribe({
      next: (res: any) => {
        alert('Elective module created successfully!');
        this.electiveForm.reset();
        // clear FormArray
        while (this.subjectsArr.length) {
          this.subjectsArr.removeAt(0);
        }
        this.addSubject();
        console.log(res);
        const newElective = res.elective;
        this.electivesService.addElective(newElective);
      },
      error: (err) => {
        console.error(err);
        alert('Error creating module');
      },
    });
  }
}

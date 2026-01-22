import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentElectivesComponent } from './student-electives.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('StudentElectivesComponent', () => {
  let component: StudentElectivesComponent;
  let fixture: ComponentFixture<StudentElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentElectivesComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

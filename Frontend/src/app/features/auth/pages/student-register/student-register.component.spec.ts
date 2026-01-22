import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterComponent } from './student-register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('StudentRegisterComponent', () => {
  let component: StudentRegisterComponent;
  let fixture: ComponentFixture<StudentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentRegisterComponent],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBonafideComponent } from './student-bonafide.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('StudentBonafideComponent', () => {
  let component: StudentBonafideComponent;
  let fixture: ComponentFixture<StudentBonafideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentBonafideComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatTableModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentBonafideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

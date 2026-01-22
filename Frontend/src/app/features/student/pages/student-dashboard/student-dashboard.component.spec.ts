import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StudentDashboardComponent } from './student-dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from 'src/app/core/auth.service';
import { StudentService } from '../../services/student.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//Mocks
const authServiceMock = {
  getUser: () => ({ id: 123 }),
};

const studentServiceMock = {
  getProfile: (mis: any) => of({}),
};

describe('StudentDashboardComponent', () => {
  let component: StudentDashboardComponent;
  let fixture: ComponentFixture<StudentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentDashboardComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatStepperModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: StudentService, useValue: studentServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

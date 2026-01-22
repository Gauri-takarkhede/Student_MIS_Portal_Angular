import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { StudentResultsComponent } from './student-results.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/core/auth.service';
import { ResultService } from 'src/app/shared/services/results.service';

//Mocks
const authServiceMock = {
  getUser: () => ({ id: 123 }),
};

const resultServiceMock = {
  getStudentResults: (mis: any) => of({}),
};

describe('StudentResultsComponent', () => {
  let component: StudentResultsComponent;
  let fixture: ComponentFixture<StudentResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentResultsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: ResultService, useValue: resultServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

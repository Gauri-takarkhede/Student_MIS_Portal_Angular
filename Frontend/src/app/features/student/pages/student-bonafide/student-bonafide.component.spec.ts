import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBonafideComponent } from './student-bonafide.component';

describe('StudentBonafideComponent', () => {
  let component: StudentBonafideComponent;
  let fixture: ComponentFixture<StudentBonafideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBonafideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentBonafideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

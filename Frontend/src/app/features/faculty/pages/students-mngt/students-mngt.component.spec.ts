import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMngtComponent } from './students-mngt.component';

describe('StudentsMngtComponent', () => {
  let component: StudentsMngtComponent;
  let fixture: ComponentFixture<StudentsMngtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsMngtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsMngtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

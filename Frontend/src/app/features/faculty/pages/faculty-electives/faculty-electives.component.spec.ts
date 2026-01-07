import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyElectivesComponent } from './faculty-electives.component';

describe('FacultyElectivesComponent', () => {
  let component: FacultyElectivesComponent;
  let fixture: ComponentFixture<FacultyElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyElectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

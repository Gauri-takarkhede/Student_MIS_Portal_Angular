import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAddResultComponent } from './faculty-add-result.component';

describe('FacultyAddResultComponent', () => {
  let component: FacultyAddResultComponent;
  let fixture: ComponentFixture<FacultyAddResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAddResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyAddResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

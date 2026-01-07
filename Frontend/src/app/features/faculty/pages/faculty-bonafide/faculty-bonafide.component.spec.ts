import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyBonafideComponent } from './faculty-bonafide.component';

describe('FacultyBonafideComponent', () => {
  let component: FacultyBonafideComponent;
  let fixture: ComponentFixture<FacultyBonafideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyBonafideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyBonafideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectivesComponent } from './student-electives.component';

describe('ElectivesComponent', () => {
  let component: ElectivesComponent;
  let fixture: ComponentFixture<ElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectivesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

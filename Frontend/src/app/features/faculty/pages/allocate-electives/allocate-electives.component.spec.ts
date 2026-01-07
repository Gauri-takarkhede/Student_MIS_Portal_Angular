import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateElectivesComponent } from './allocate-electives.component';

describe('AllocateElectivesComponent', () => {
  let component: AllocateElectivesComponent;
  let fixture: ComponentFixture<AllocateElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateElectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllocateElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

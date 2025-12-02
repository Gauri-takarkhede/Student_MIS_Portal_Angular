import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectivesComponent } from './create-electives.component';

describe('CreateElectivesComponent', () => {
  let component: CreateElectivesComponent;
  let fixture: ComponentFixture<CreateElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateElectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

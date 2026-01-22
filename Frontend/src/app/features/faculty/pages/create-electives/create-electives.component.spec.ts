import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectivesComponent } from './create-electives.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateElectivesComponent', () => {
  let component: CreateElectivesComponent;
  let fixture: ComponentFixture<CreateElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateElectivesComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAddResultComponent } from './faculty-add-result.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('FacultyAddResultComponent', () => {
  let component: FacultyAddResultComponent;
  let fixture: ComponentFixture<FacultyAddResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultyAddResultComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FacultyAddResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

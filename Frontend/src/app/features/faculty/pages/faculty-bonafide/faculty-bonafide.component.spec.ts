import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyBonafideComponent } from './faculty-bonafide.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';

describe('FacultyBonafideComponent', () => {
  let component: FacultyBonafideComponent;
  let fixture: ComponentFixture<FacultyBonafideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultyBonafideComponent],
      imports: [HttpClientTestingModule, MatTableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FacultyBonafideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

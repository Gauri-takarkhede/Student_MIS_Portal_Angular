import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDashboardComponent } from './faculty-dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FacultyDashboardComponent', () => {
  let component: FacultyDashboardComponent;
  let fixture: ComponentFixture<FacultyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultyDashboardComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FacultyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

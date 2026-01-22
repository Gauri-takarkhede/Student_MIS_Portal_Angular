import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyElectivesComponent } from './faculty-electives.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-create-electives',
  template: '',
})
class MockCreateElectivesComponent {}

@Component({
  selector: 'app-allocate-electives',
  template: '',
})
class MockAllocateElectivesComponent {}

@Component({
  selector: 'app-view-electives',
  template: '',
})
class MockViewElectivesComponent {}

describe('FacultyElectivesComponent', () => {
  let component: FacultyElectivesComponent;
  let fixture: ComponentFixture<FacultyElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FacultyElectivesComponent,
        MockCreateElectivesComponent,
        MockAllocateElectivesComponent,
        MockViewElectivesComponent,
      ],
      imports: [HttpClientTestingModule, MatTabsModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FacultyElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

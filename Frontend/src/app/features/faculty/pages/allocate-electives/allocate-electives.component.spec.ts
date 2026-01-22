import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateElectivesComponent } from './allocate-electives.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';

describe('AllocateElectivesComponent', () => {
  let component: AllocateElectivesComponent;
  let fixture: ComponentFixture<AllocateElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllocateElectivesComponent],
      imports: [HttpClientTestingModule, MatTableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AllocateElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

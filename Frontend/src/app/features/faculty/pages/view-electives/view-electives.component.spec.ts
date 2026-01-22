import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewElectivesComponent } from './view-electives.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewElectivesComponent', () => {
  let component: ViewElectivesComponent;
  let fixture: ComponentFixture<ViewElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewElectivesComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

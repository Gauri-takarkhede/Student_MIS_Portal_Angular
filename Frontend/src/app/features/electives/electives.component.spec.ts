import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectivesComponent } from './electives.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ElectivesComponent', () => {
  let component: ElectivesComponent;
  let fixture: ComponentFixture<ElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectivesComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

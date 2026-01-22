import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishElectivesComponent } from './publish-electives.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PublishElectivesComponent', () => {
  let component: PublishElectivesComponent;
  let fixture: ComponentFixture<PublishElectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishElectivesComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PublishElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

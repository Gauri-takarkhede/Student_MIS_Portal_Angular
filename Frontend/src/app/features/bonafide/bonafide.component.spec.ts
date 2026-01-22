import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonafideComponent } from './bonafide.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BonafideComponent', () => {
  let component: BonafideComponent;
  let fixture: ComponentFixture<BonafideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonafideComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BonafideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

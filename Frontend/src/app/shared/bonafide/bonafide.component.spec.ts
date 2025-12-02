import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonafideComponent } from './bonafide.component';

describe('BonafideComponent', () => {
  let component: BonafideComponent;
  let fixture: ComponentFixture<BonafideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonafideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonafideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

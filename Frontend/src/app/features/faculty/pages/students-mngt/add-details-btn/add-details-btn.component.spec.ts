import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsBtnComponent } from './add-details-btn.component';

describe('AddDetailsBtnComponent', () => {
  let component: AddDetailsBtnComponent;
  let fixture: ComponentFixture<AddDetailsBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailsBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDetailsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

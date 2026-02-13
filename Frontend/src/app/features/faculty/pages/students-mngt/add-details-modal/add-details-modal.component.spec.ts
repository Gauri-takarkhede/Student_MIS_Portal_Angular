import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsModalComponent } from './add-details-modal.component';

describe('AddDetailsModalComponent', () => {
  let component: AddDetailsModalComponent;
  let fixture: ComponentFixture<AddDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

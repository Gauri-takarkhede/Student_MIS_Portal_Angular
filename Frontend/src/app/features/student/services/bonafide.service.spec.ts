import { TestBed } from '@angular/core/testing';

import { BonafideService } from './bonafide.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BonafideService', () => {
  let service: BonafideService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BonafideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ResultService } from './results.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ResultsService', () => {
  let service: ResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FacultyService } from './faculty.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FacultyService', () => {
  let service: FacultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FacultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

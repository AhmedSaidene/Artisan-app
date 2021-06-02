import { TestBed } from '@angular/core/testing';

import { TraveauxService } from './traveaux.service';

describe('TraveauxService', () => {
  let service: TraveauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraveauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

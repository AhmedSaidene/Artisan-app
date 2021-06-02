import { TestBed } from '@angular/core/testing';

import { ModelDevisService } from './model-devis.service';

describe('ModelDevisService', () => {
  let service: ModelDevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelDevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

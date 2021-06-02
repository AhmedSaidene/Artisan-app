import { TestBed } from '@angular/core/testing';

import { DevisHasProduitsService } from './devis-has-produits.service';

describe('DevisHasProduitsService', () => {
  let service: DevisHasProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevisHasProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

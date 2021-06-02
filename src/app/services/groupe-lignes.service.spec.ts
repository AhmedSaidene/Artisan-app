import { TestBed } from '@angular/core/testing';

import { GroupeLignesService } from './groupe-lignes.service';

describe('GroupeLignesService', () => {
  let service: GroupeLignesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeLignesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

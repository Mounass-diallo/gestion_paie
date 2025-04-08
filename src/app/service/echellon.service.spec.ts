import { TestBed } from '@angular/core/testing';

import { EchellonService } from './echellon.service';

describe('EchellonService', () => {
  let service: EchellonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchellonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

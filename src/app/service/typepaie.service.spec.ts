import { TestBed } from '@angular/core/testing';

import { TypepaieService } from './typepaie.service';

describe('TypepaieService', () => {
  let service: TypepaieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypepaieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

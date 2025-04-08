import { TestBed } from '@angular/core/testing';

import { ModedepaieService } from './modedepaie.service';

describe('ModedepaieService', () => {
  let service: ModedepaieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModedepaieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

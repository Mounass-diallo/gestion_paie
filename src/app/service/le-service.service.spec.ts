import { TestBed } from '@angular/core/testing';

import { LeServiceService } from './le-service.service';

describe('LeServiceService', () => {
  let service: LeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RoutesORASService } from './routes-oras.service';

describe('RoutesORASService', () => {
  let service: RoutesORASService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesORASService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

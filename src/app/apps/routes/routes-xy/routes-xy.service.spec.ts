import { TestBed } from '@angular/core/testing';

import { RoutesXYService } from './routes-xy.service';

describe('RoutesXYService', () => {
  let service: RoutesXYService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesXYService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

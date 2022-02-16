import { TestBed } from '@angular/core/testing';

import { RoutesPLATService } from './routes-plat.service';

describe('RoutesPLATService', () => {
  let service: RoutesPLATService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesPLATService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RoutesHGSSService } from './routes-hgss.service';

describe('RoutesHGSSService', () => {
  let service: RoutesHGSSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutesHGSSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

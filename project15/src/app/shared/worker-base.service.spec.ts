import { TestBed } from '@angular/core/testing';

import { WorkerBaseService } from './worker-base.service';

describe('WorkerBaseService', () => {
  let service: WorkerBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

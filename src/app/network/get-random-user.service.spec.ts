import { TestBed, inject } from '@angular/core/testing';

import { GetRandomUserService } from './get-random-user.service';

describe('GetRandomUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRandomUserService]
    });
  });

  it('should be created', inject([GetRandomUserService], (service: GetRandomUserService) => {
    expect(service).toBeTruthy();
  }));
});

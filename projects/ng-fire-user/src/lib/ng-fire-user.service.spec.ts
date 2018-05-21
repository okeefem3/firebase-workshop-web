import { TestBed, inject } from '@angular/core/testing';

import { NgFireUserService } from './ng-fire-user.service';

describe('NgFireUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFireUserService]
    });
  });

  it('should be created', inject([NgFireUserService], (service: NgFireUserService) => {
    expect(service).toBeTruthy();
  }));
});

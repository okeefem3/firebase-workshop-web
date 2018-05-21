import { TestBed, inject } from '@angular/core/testing';

import { NgFireAuthService } from './ng-fire-auth.service';

describe('NgFireAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFireAuthService]
    });
  });

  it('should be created', inject([NgFireAuthService], (service: NgFireAuthService) => {
    expect(service).toBeTruthy();
  }));
});

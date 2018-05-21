import { TestBed, inject } from '@angular/core/testing';

import { NgFireReviewService } from './ng-fire-review.service';

describe('NgFireReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFireReviewService]
    });
  });

  it('should be created', inject([NgFireReviewService], (service: NgFireReviewService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { NgFireBreweryService } from './ng-fire-brewery.service';

describe('NgFireBreweryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFireBreweryService]
    });
  });

  it('should be created', inject([NgFireBreweryService], (service: NgFireBreweryService) => {
    expect(service).toBeTruthy();
  }));
});

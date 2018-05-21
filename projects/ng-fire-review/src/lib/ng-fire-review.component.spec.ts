import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFireReviewComponent } from './ng-fire-review.component';

describe('NgFireReviewComponent', () => {
  let component: NgFireReviewComponent;
  let fixture: ComponentFixture<NgFireReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFireReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFireReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

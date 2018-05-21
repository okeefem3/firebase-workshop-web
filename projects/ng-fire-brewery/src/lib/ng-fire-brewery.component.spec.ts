import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFireBreweryComponent } from './ng-fire-brewery.component';

describe('NgFireBreweryComponent', () => {
  let component: NgFireBreweryComponent;
  let fixture: ComponentFixture<NgFireBreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFireBreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFireBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

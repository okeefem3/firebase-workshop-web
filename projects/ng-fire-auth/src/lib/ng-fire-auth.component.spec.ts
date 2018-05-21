import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFireAuthComponent } from './ng-fire-auth.component';

describe('NgFireAuthComponent', () => {
  let component: NgFireAuthComponent;
  let fixture: ComponentFixture<NgFireAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFireAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFireAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

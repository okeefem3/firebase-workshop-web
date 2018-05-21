import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFireUserComponent } from './ng-fire-user.component';

describe('NgFireUserComponent', () => {
  let component: NgFireUserComponent;
  let fixture: ComponentFixture<NgFireUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFireUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFireUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

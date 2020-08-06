import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplate1Component } from './work-template1.component';

describe('WorkTemplate1Component', () => {
  let component: WorkTemplate1Component;
  let fixture: ComponentFixture<WorkTemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

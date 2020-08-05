import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplate3Component } from './work-template3.component';

describe('WorkTemplate3Component', () => {
  let component: WorkTemplate3Component;
  let fixture: ComponentFixture<WorkTemplate3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTemplate3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTemplate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

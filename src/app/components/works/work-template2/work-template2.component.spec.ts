import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplate2Component } from './work-template2.component';

describe('WorkTemplate2Component', () => {
  let component: WorkTemplate2Component;
  let fixture: ComponentFixture<WorkTemplate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTemplate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayOn2Component } from './relay-on2.component';

describe('RelayOn2Component', () => {
  let component: RelayOn2Component;
  let fixture: ComponentFixture<RelayOn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayOn2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayOn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

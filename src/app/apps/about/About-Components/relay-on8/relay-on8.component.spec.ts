import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayOn8Component } from './relay-on8.component';

describe('RelayOn8Component', () => {
  let component: RelayOn8Component;
  let fixture: ComponentFixture<RelayOn8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayOn8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayOn8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

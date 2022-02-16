import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayOn3Component } from './relay-on3.component';

describe('RelayOn3Component', () => {
  let component: RelayOn3Component;
  let fixture: ComponentFixture<RelayOn3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayOn3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayOn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

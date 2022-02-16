import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayOn9Component } from './relay-on9.component';

describe('RelayOn9Component', () => {
  let component: RelayOn9Component;
  let fixture: ComponentFixture<RelayOn9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayOn9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayOn9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

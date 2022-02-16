import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayOn10Component } from './relay-on10.component';

describe('RelayOn10Component', () => {
  let component: RelayOn10Component;
  let fixture: ComponentFixture<RelayOn10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayOn10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayOn10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

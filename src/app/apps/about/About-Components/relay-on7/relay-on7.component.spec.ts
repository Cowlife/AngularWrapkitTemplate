import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayOn7Component } from './relay-on7.component';

describe('RelayOn7Component', () => {
  let component: RelayOn7Component;
  let fixture: ComponentFixture<RelayOn7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayOn7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayOn7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

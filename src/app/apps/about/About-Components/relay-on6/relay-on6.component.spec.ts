import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayOn6Component } from './relay-on6.component';

describe('RelayOn6Component', () => {
  let component: RelayOn6Component;
  let fixture: ComponentFixture<RelayOn6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayOn6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayOn6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

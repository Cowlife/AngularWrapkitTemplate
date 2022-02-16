import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayOn4Component } from './relay-on4.component';

describe('RelayOn4Component', () => {
  let component: RelayOn4Component;
  let fixture: ComponentFixture<RelayOn4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayOn4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayOn4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

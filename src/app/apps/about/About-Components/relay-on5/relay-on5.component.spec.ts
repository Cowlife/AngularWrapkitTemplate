import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayOn5Component } from './relay-on5.component';

describe('RelayOn5Component', () => {
  let component: RelayOn5Component;
  let fixture: ComponentFixture<RelayOn5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayOn5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayOn5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

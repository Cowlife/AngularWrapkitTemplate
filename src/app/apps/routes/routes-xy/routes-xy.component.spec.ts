import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesXYComponent } from './routes-xy.component';

describe('RoutesXYComponent', () => {
  let component: RoutesXYComponent;
  let fixture: ComponentFixture<RoutesXYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesXYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesXYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

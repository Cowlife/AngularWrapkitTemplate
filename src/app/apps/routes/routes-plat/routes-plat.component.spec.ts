import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesPLATComponent } from './routes-plat.component';

describe('RoutesPLATComponent', () => {
  let component: RoutesPLATComponent;
  let fixture: ComponentFixture<RoutesPLATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesPLATComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesPLATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

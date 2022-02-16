import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesORASComponent } from './routes-oras.component';

describe('RoutesORASComponent', () => {
  let component: RoutesORASComponent;
  let fixture: ComponentFixture<RoutesORASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesORASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesORASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesHGSSComponent } from './routes-hgss.component';

describe('RoutesHGSSComponent', () => {
  let component: RoutesHGSSComponent;
  let fixture: ComponentFixture<RoutesHGSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesHGSSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesHGSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

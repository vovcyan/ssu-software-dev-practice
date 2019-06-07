import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindTurbineItemComponent } from './wind-turbine-item.component';

describe('WindTurbineItemComponent', () => {
  let component: WindTurbineItemComponent;
  let fixture: ComponentFixture<WindTurbineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindTurbineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindTurbineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightReviewsComponent } from './flight-reviews.component';

describe('FlightReviewsComponent', () => {
  let component: FlightReviewsComponent;
  let fixture: ComponentFixture<FlightReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightReviewsComponent]
    });
    fixture = TestBed.createComponent(FlightReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

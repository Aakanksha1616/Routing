import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesSearchComponent } from './buses-search.component';

describe('BusesSearchComponent', () => {
  let component: BusesSearchComponent;
  let fixture: ComponentFixture<BusesSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusesSearchComponent]
    });
    fixture = TestBed.createComponent(BusesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOfferHistoryComponent } from './car-offer-history.component';

describe('CarOfferHistoryComponent', () => {
  let component: CarOfferHistoryComponent;
  let fixture: ComponentFixture<CarOfferHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOfferHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOfferHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

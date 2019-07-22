import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingOfferComponent } from './housing-offer.component';

describe('HousingOfferComponent', () => {
  let component: HousingOfferComponent;
  let fixture: ComponentFixture<HousingOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHousingOffersComponent } from './view-housing-offers.component';

describe('ViewHousingOffersComponent', () => {
  let component: ViewHousingOffersComponent;
  let fixture: ComponentFixture<ViewHousingOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHousingOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHousingOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

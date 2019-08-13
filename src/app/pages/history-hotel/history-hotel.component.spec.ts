import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryHotelComponent } from './history-hotel.component';

describe('HistoryHotelComponent', () => {
  let component: HistoryHotelComponent;
  let fixture: ComponentFixture<HistoryHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

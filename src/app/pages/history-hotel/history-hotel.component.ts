import { HotelService } from './../../services/hotel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-hotel',
  templateUrl: './history-hotel.component.html',
  styleUrls: ['./history-hotel.component.css']
})
export class HistoryHotelComponent implements OnInit {
  hotelOffers;
  constructor(private hotelService:HotelService) { }

  ngOnInit() {
    this.hotelService.getBoughtOffers().subscribe(response => this.hotelOffers = response.body)
  }

}

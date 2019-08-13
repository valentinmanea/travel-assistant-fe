import { FlightOfferService } from './../../services/flight-offer.service';
import { FlightService } from './../../services/flight.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-history',
  templateUrl: './flight-history.component.html',
  styleUrls: ['./flight-history.component.css']
})
export class FlightHistoryComponent implements OnInit {
  flightOffers;
  constructor(private flightOfferService:FlightOfferService) { }

  ngOnInit() {
    this.flightOfferService.getBoughtOffers().subscribe(response => this.flightOffers = response.body)
  }

}

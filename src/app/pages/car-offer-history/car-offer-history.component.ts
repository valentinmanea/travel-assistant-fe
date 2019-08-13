import { CarOfferService } from './../../services/car-offer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-offer-history',
  templateUrl: './car-offer-history.component.html',
  styleUrls: ['./car-offer-history.component.css']
})
export class CarOfferHistoryComponent implements OnInit {
  carOffers;
  constructor(private carOfferService:CarOfferService) { }

  ngOnInit() {
    this.carOfferService.getBoughtOffers().subscribe(response => this.carOffers = response.body)
  }

}

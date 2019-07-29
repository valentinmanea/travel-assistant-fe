import { HousingOfferDto } from './../../model/HousingOfferDto';
import { HousingOfferService } from './../../services/housing-offer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-housing-offers',
  templateUrl: './view-housing-offers.component.html',
  styleUrls: ['./view-housing-offers.component.css']
})
export class ViewHousingOffersComponent implements OnInit {
  housingOffers:HousingOfferDto[] = [];
  constructor(private housingOfferService:HousingOfferService) { }

  ngOnInit() {
    this.housingOfferService.getAll().subscribe(response => this.housingOffers = response.body)
  }

}

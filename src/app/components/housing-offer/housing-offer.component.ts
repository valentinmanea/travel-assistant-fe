import { map } from 'rxjs/operator/map';
import { HousingOfferDto } from './../../model/HousingOfferDto';
import { HousingOffer } from './../../model/HousingReservationDto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-housing-offer',
  templateUrl: './housing-offer.component.html',
  styleUrls: ['./housing-offer.component.css']
})
export class HousingOfferComponent implements OnInit {
  @Input()
  housingOffer:HousingOfferDto;

  constructor() { }

  ngOnInit() {
    this.housingOffer.availableRooms.map(room => {
      if(room.currency){
        return room.curency;
      }else 
       return "";
    });
  }

}

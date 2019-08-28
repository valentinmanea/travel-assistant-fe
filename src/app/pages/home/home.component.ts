import { FullOfferEntity } from './../../model/FullOfferEntity';
import { HotelService } from './../../services/hotel.service';
import { HotelOffer } from './../../model/hotel/HotelOffer';
import { FlightOfferService } from './../../services/flight-offer.service';
import { FlightOffer } from './../../model/flight/FlightOffer';
import { FullOffer } from './../../model/FullOffer';
import { FullOfferService } from './../../services/full-offer.service';
import { CityNameService } from './../../services/city-name.service';
import { map } from 'rxjs/operator/map';
import { ImageService } from './../../services/image.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as toastr from 'toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  showHotelOffer;
  showFlightOffer;
  fullOfferDto:FullOffer = new FullOffer();
  keyword;
  startCity;
  responsesArray;
  items:Array<any> = new Array();;
  currentItem;
  cityNames;
  noResults;
  messageSrc;
  constructor(private imageService:ImageService, private cityNameService:CityNameService,
    private flightOfferService:FlightOfferService, private fullOfferService:FullOfferService, private hotelService:HotelService) { 
  }

  ngOnInit() {
    this.cityNameService.getAllCityNames().subscribe(response => {
      this.cityNames = response.body;
      this.cityNames = this.cityNames.map(c => c.cityName);
    });
  }

  getImageByKeyword(){
    this.items = [];
    this.fullOfferDto = new FullOffer();
    if(this.keyword === 'Random destination'){
      this.items.push("../../assets/random-destination.jpg");
    }else{
      this.imageService.getImageByKeyword(this.keyword).subscribe(response => {
        this.responsesArray = response.body
        this.items = this.responsesArray.photos.map(r => r.src.landscape);
        if(this.items.length == 0){
          this.items.push("../../../assets/no-results.jpg");
        }
      })
    }
 }

 getKeyword(event){
   this.keyword = event;
 }
 getStartCity(event){
  this.startCity = event;
}
 displayGenerateMessage(){
   console.log('items', this.items)
   if(this.items){
     return this.items.length > 0 && this.items[0] != '../../../assets/no-results.jpg';
   }
   return false;
 }
 generateFullOffer(){
   this.items = [];
  this.items.push("../../../assets/full-offer-message.jpg");
  this.fullOfferService.getFullOffer(this.startCity, this.keyword).subscribe(response => {
    console.log(response)
    this.fullOfferDto = response.body;
    if(this.fullOfferDto.flightSecondLevelDto == null  && this.fullOfferDto.hotelSecondLevelDto == null){
      this.items = [];
      this.items.push("../../../assets/no-results.jpg");
    }else{
      this.items = [];
    }
  },
    err => {
      console.log(err)
      toastr.error(err)
      this.items=[];
      this.items.push("../../../assets/error.jpg")
    }
  )
 }
  toggleHotelOffer(){
    console.log('fullOfferDto.hotelSecondLevelDto', this.fullOfferDto.hotelSecondLevelDto)
    console.log('toggle hotel offer', !this.showHotelOffer)
    this.showHotelOffer = !this.showHotelOffer;
 }
 toggleFlightOffer(){
  console.log('fullOfferDto.flightSecondLevelDto', this.fullOfferDto.flightSecondLevelDto)
  console.log('toggle flight offer', !this.showFlightOffer)
  this.showFlightOffer = !this.showFlightOffer;
}
buyFullOffer(){
  let flightOffer = this.getFlightOffer();
  let hotelOffer = this.getHotelOffer();
  let fullOfferEntity = new FullOfferEntity();
  fullOfferEntity.flightOffer = flightOffer;
  fullOfferEntity.hotelOffer = hotelOffer;
  console.log('fullOffer entity', fullOfferEntity)
  this.fullOfferService.buyFullOffer(fullOfferEntity).subscribe(response => {
    toastr.success("Oferta completa cumparata")
    this.fullOfferDto.hotelSecondLevelDto = undefined;
    this.fullOfferDto.flightSecondLevelDto = undefined;
  });
}
getFlightOffer(){
  let flightOffer:FlightOffer = new FlightOffer();
  flightOffer.lastTicketingDate = this.fullOfferDto.flightSecondLevelDto.lastTicketingDate;
  flightOffer.price = this.fullOfferDto.flightSecondLevelDto.price.total + this.fullOfferDto.flightSecondLevelDto.price.currency;
  flightOffer.source = this.fullOfferDto.flightSecondLevelDto.source;
  return flightOffer;
}

  getHotelOffer(){
    let hotelOffer = new HotelOffer();
    let hotelDto = this.fullOfferDto.hotelSecondLevelDto.hotel;
    hotelOffer.name = hotelDto.name;
    let hotelOfferFromHotel = this.fullOfferDto.hotelSecondLevelDto.offers.pop();
    console.log(hotelOfferFromHotel)
    if(hotelOfferFromHotel.guests){
      hotelOffer.adults = hotelOfferFromHotel.guests.adults;
    }   
    if(hotelOfferFromHotel.price){
      hotelOffer.currency = hotelOfferFromHotel.price.currency;
      hotelOffer.total = hotelOfferFromHotel.price.total;
    }
    hotelOffer.hotelId = this.fullOfferDto.hotelSecondLevelDto.hotel.hotelId;
    hotelOffer.rateCode = hotelOfferFromHotel.rateCode;

    return hotelOffer;
  }
}
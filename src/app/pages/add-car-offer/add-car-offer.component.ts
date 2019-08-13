import { CarOfferService } from './../../services/car-offer.service';
import { CurrencyService } from './../../services/currency.service';
import { FlightService } from './../../services/flight.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { CarOfferDto } from './../../model/CarOfferDto';
import { Component, OnInit } from '@angular/core';
import { CarDto } from '../../model/CarDto';

@Component({
  selector: 'app-add-car-offer',
  templateUrl: './add-car-offer.component.html',
  styleUrls: ['./add-car-offer.component.css']
})
export class AddCarOfferComponent implements OnInit {
  cityNames =[];
  selectedCityName;
  carOffer:CarOfferDto;
  selectedCity;
  currencies;
  constructor(private flightService:FlightService, private currencyService:CurrencyService, private carOfferService:CarOfferService) { }

  ngOnInit() {
    this.carOffer = new CarOfferDto();
    this.carOffer.car = new CarDto();
    this.flightService.getAllCityNames().subscribe(response => {
      this.cityNames = response.body;
      this.cityNames = this.cityNames.map(c => c.cityName);
    });
    this.currencyService.getAvailableCurrencies().subscribe(response => this.currencies = response.body);
  }

  markDisabledEndDate = (date: NgbDate, current: {month: number}) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    console.log('today: ', dd)
    if(date.month === this.carOffer.startDate.month){
      return ((date.day <= this.carOffer.startDate.day) || (date.day <= parseInt(dd, 10)));
    }
    if(date.month < this.carOffer.startDate.month){
      return true;
    }
    return false;
  }
  markDisabledStartDate = (date: NgbDate, current: {month: number}) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    console.log('today: ', dd)
    if(date.month === parseInt(mm, 10)){
      return (date.day < parseInt(dd, 10));
    }
    if(date.month < parseInt(mm, 10)){
      return true;
    }
    if(date.year < yyyy){
      return true
    }
    return false;
  }

  getCityName(event){
    console.log('S-a pus')
    this.carOffer.city = event;
  }
  getCurrency(event){
    this.carOffer.currency = event;
  }
  addCarOffer(){
    this.carOfferService.addCarOffer(this.carOffer).subscribe(response => console.log(response.body))
  }
}

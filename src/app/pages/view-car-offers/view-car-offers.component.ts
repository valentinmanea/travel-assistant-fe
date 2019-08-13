import { AuthService } from './../../services/auth.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { FlightService } from './../../services/flight.service';
import { CarOfferSearchDto } from './../../model/CarOfferSearchDto';
import { CarOfferDto } from './../../model/CarOfferDto';
import { CarOfferService } from './../../services/car-offer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-car-offers',
  templateUrl: './view-car-offers.component.html',
  styleUrls: ['./view-car-offers.component.css']
})
export class ViewCarOffersComponent implements OnInit {
  selectedStartDate;
  selectedEndDate;
  selectedCity;
  carOfferDtos;
  carOfferSearchDto; 
  cityNames

  constructor(private carOfferService:CarOfferService, private flightService:FlightService,
    private authService:AuthService) { }

  ngOnInit() {
    this.flightService.getAllCityNames().subscribe(response => {
      this.cityNames = response.body;
      this.cityNames = this.cityNames.map(c => c.cityName);
    });
  }
  markDisabledEndDate = (date: NgbDate, current: {month: number}) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    console.log('today: ', dd)
    if(date.month === this.selectedStartDate.month){
      return ((date.day <= this.selectedStartDate.day) || (date.day <= parseInt(dd, 10)));
    }
    if(date.month < this.selectedStartDate.month){
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
  searchCarOffer(){
    let carOfferSearch:CarOfferSearchDto = new CarOfferSearchDto();
    carOfferSearch.selectedCity = this.selectedCity
    carOfferSearch.selectedStartDate = this.selectedStartDate;
    carOfferSearch.selectedEndDate = this.selectedEndDate;
    this.carOfferService.searchCarOffers(carOfferSearch).subscribe(response => {
      this.carOfferDtos = response.body;
      console.log('caroffers', this.carOfferDtos)
    })
  }
  getCityName(event){
    console.log('S-a pus')
    this.selectedCity = event;
  }

  buyOffer(index){
    this.carOfferService.buyOffer(this.carOfferDtos[index].id).subscribe(response=>{
      this.carOfferDtos.splice(index,1);
    })
  }
  isUserLoggedIn(){
    return this.authService.isUserLoggedIn();
  }
}

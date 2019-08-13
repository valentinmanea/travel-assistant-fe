import { FlightOfferService } from './../../services/flight-offer.service';
import { FlightOffer } from './../../model/flight/FlightOffer';
import { FirstLevelFlightDto } from './../../model/flight/FirstLevelFlightDto';
import { FlightSearchDto } from './../../model/flight/FlightSearchDto';
import { FlightService } from './../../services/flight.service';
import { HotelService } from './../../services/hotel.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.css']
})
export class ViewFlightsComponent implements OnInit {
  loading;
  searchFinished;
  message;
  resultedMessage
  firstLevelFlightDto:FirstLevelFlightDto;
  selectedCityNameStart;  
  selectedCityNameEnd;

  cityNames =[];

  startDate;
  endDate;
  adults;
  constructor(private flightService:FlightService, private flightOfferService: FlightOfferService) { }

  markDisabledEndDate = (date: NgbDate, current: {month: number}) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    console.log('today: ', dd)
    if(date.month === this.startDate.month){
      return ((date.day <= this.startDate.day) || (date.day <= parseInt(dd, 10)));
    }
    if(date.month < this.startDate.month){
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

  ngOnInit() {
    this.flightService.getAllCityNames().subscribe(response => {
      this.cityNames = response.body;
      this.cityNames = this.cityNames.map(c => c.cityName);
    });
    console.log('this.cityNames', this.cityNames)
    this.cityNames = this.cityNames.map(c => c.cityName);
    console.log('this.cityNames', this.cityNames)
  }
  onSelectedDateChange(){
    this.selectedCityNameStart ='';
    this.selectedCityNameEnd ='';
  }

  getCityNameStart(event){
    this.selectedCityNameStart = event;
  }
  getCityNameEnd(event){
    this.selectedCityNameEnd = event;
  }

  searchFlights(){
    this.message ="Searching..."
    this.resultedMessage='';
    this.loading = true;
    let dto:FlightSearchDto = new FlightSearchDto();
    dto.startDate = this.startDate;
    dto.endDate = this.endDate;
    dto.startCity = this.selectedCityNameStart;
    dto.destinationCity = this.selectedCityNameEnd;
    dto.adults = this.adults;
    console.log("adults",this.adults)
    console.log("dto", dto)
    console.log(this.startDate, this.endDate, this.selectedCityNameStart, this.selectedCityNameEnd)
    this.flightService.searchFlights(dto).subscribe(response => {
      this.firstLevelFlightDto = response.body;
      console.log(response.body.data)
      console.log(this.firstLevelFlightDto)
      this.loading = false;
      this.searchFinished = true;
    })

   
    // this.startDate = undefined;
    // this.endDate = undefined; 
    // this.selectedCityNameStart = undefined;
    // this.selectedCityNameEnd =  undefined;
    // this.adults = undefined;
  }
  buyOffer(index:number){
    let flightOffer:FlightOffer = new FlightOffer();
    flightOffer.lastTicketingDate = this.firstLevelFlightDto.data[index].lastTicketingDate;
    flightOffer.price = this.firstLevelFlightDto.data[index].price.total + this.firstLevelFlightDto.data[index].price.currency;
    flightOffer.source = this.firstLevelFlightDto.data[index].source;
    this.flightOfferService.buyOffer(flightOffer).subscribe(response => console.log(response));
  }
}
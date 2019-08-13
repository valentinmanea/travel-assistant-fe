import { HotelDto } from './../../model/HotelDto';
import { HousingOfferService } from './../../services/housing-offer.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { HousingOfferDto } from './../../model/HousingOfferDto';
import { HotelService } from './../../services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { InfoDto } from '../../model/InfoDto';
import { RoomDto } from '../../model/RoomDto';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-add-housing-offer',
  templateUrl: './add-housing-offer.component.html',
  styleUrls: ['./add-housing-offer.component.css']
})
export class AddHousingOfferComponent implements OnInit {
  selectedHotelName;
  selectedRoomName;
  hotelNames =[];
  availableRooms=[];
  availableRoomsDtos=[];
  housingOffer:HousingOfferDto = new HousingOfferDto();

  reservedDates;
  constructor(private hotelService:HotelService, 
    private housingOfferService:HousingOfferService) { }

  markDisabled = (date: NgbDate, current: {month: number}) => {
    console.log(this.housingOffer.startDate)
    if(date.month === this.housingOffer.startDate.month){
      return date.day <= this.housingOffer.startDate.day;
    }
    if(date.month < this.housingOffer.startDate.month){
      return true;
    }
    return false;
  }

  ngOnInit() {
    this.hotelService.getAllHotelsName().subscribe(response => this.hotelNames = response.body);
  }
  getHotelName(event){
    this.hotelService.retrieveAllReserverdDates(event).subscribe(response => {
      this.reservedDates = response.body;
      console.log(this.reservedDates)
    });
    let infoDto = new InfoDto();
    infoDto.hotelName = event;
    infoDto.startDate = this.housingOffer.startDate;
    infoDto.endDate = this.housingOffer.endDate;
    this.hotelService.postForAvalaibleRoomsByHotelName(infoDto)
    .subscribe((response) => {
      this.availableRoomsDtos = response.body;
      console.log(this.availableRoomsDtos);
      this.availableRooms = response.body.map(room => {
        let text = "Capacitate: " + room.capacity + " Pret: " + room.price
        console.log('mappez room', room)
        if(room.currency){
          text = text + room.currency;
        }
        return text;
      })
    });
      console.log(this.availableRooms)
      this.selectedHotelName = event;
  }
  getRoomName(event){
    this.selectedRoomName = event;
  }
  onSelectedDateChange(){
    this.selectedHotelName ='';
    this.selectedRoomName = '';
    console.log("house", this.selectedHotelName+this.selectedRoomName)
  }

  addHousingOffer(){
    this.housingOffer.hotel = new HotelDto();
    this.housingOffer.hotel.name = this.selectedHotelName;
    this.housingOffer.availableRooms = this.availableRoomsDtos;
    this.housingOfferService.add(this.housingOffer).subscribe( response => {
      console.log(response)
    })
    console.log('oferta ', this.housingOffer)
  }
}

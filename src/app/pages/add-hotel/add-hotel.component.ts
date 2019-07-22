import { HotelDto } from './../../model/HotelDto';
import { HotelService } from './../../services/hotel.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RoomDto } from '../../model/RoomDto';
import * as toastr from 'toastr';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
  imgSrcDefault = '../assets/hotel.jpg'
  room:RoomDto = new RoomDto();
  hotel:HotelDto = new HotelDto();
  rooms:RoomDto[] = [];
  selectedCurrency = '';
  currencies=[];
  constructor(private formBuilder: FormBuilder,private hotelService:HotelService) {}

  ngOnInit() {
    this.hotelService.getAvailableCurrencies().subscribe(response => this.currencies = response.body)
  }

  addRoom(){
    console.log('add')
    this.room.currency = this.selectedCurrency;
    this.selectedCurrency = '';
    this.rooms.push(this.room);
    this.room = new RoomDto();
  }
  addHotel(){
   this.hotel.rooms = this.rooms
   if(!this.hotel.imgSrc){
    this.hotel.imgSrc = this.imgSrcDefault;
   }
   this.hotelService.addHotel(this.hotel).subscribe(response => {
    toastr.success("HotelAdaugat")
    this.hotel=new HotelDto();
    this.rooms=[];
    });
  }
  getCurrency(event){
    this.selectedCurrency = event;
  }
}

import { HotelService } from './../../services/hotel.service';
import { HotelDto } from './../../model/HotelDto';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RoomDto } from '../../model/RoomDto';
import * as toastr from 'toastr';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit {
  selectedCurrency = '';
  currencies=[];
  hotelId;
  hotel:HotelDto = new HotelDto();
  room:RoomDto = new RoomDto();

  constructor(private route:ActivatedRoute, private hotelService:HotelService) { }

  ngOnInit() {
    this.getHotelId();
    this.hotelService.getHotelById(this.hotelId).subscribe(response => {
      this.hotel = response.body
      console.log('hotel by id', response.body)
    })
    this.hotelService.getAvailableCurrencies().subscribe(response => this.currencies = response.body)

  }

  getHotelId(){
    console.log('params',this.route.snapshot.params);
    this.hotelId = this.route.snapshot.params.id;
  }
  addRoom(){
    console.log(this.room)
    this.room.currency = this.selectedCurrency;
    this.hotel.rooms.push(this.room);
  }
  editHotel(){
    console.log('hotel' + JSON.stringify(this.hotel))
    this.hotelService.editHotel(this.hotel).subscribe(response => toastr.success('Hotelul: ' + this.hotel.name + ' a fost editat'))
  }
  deleteRoom(index:number){
    this.hotelService.deleteRoom(this.hotel.rooms[index].id).subscribe(response => {
      toastr.success('Camera a fost stearsa');
      this.hotel.rooms = this.hotel.rooms.filter(room => room.id != this.hotel.rooms[index].id);
    });
  }
  getCurrency(currency){
    this.selectedCurrency = currency;
  }
}

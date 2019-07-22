import { HotelService } from './../../services/hotel.service';
import { HotelDto } from './../../model/HotelDto';
import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-hotels',
  templateUrl: './view-hotels.component.html',
  styleUrls: ['./view-hotels.component.css']
})
export class ViewHotelsComponent implements OnInit {
  pressed:boolean[] = [];
  hotels:HotelDto[] =[];
  constructor(private hotelService:HotelService, private router:Router) { }

  ngOnInit() {
    this.hotelService.getAllHotels().subscribe((response) => this.hotels = JSON.parse(JSON.stringify(response.body)));
  }
  toggle(index:number){
    console.log(index);
    this.pressed[index] = !this.pressed[index];
  }

  deleteHotel(index:number){
    this.hotelService.deleteById(this.hotels[index].id).subscribe(response => {
      toastr.success('Hotelul' + this.hotels[index].name + 'a fost sters cu succes');
      this.hotels = this.hotels.filter(hotel => hotel.id != this.hotels[index].id);
    });
  }

  getEditLink(index){
    console.log('/admin/edit-hotel/' + this.hotels[index].id);
    return ;
  }
  navigateEditPage(index){
    console.log('/admin/edit-hotel/' + this.hotels[index].id);
    this.router.navigate(['/admin/edit-hotel/' + this.hotels[index].id])
  }
}

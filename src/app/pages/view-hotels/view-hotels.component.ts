import { HotelFirstLevelDto } from './../../model/hotel/HotelFirstLevelDto';
import { AmadeusHotelService } from './../../services/amadeus-hotel.service';
import { HotelService } from './../../services/hotel.service';
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
  hotelFirstLevelDto:HotelFirstLevelDto;
  showOffers:boolean[] = [];
  rating = [];
  // hotels:HotelDto[] =[];
  constructor(private hotelService:HotelService, private router:Router, private amadeusHotelService:AmadeusHotelService) { }

 async ngOnInit() {
    // this.hotelService.getAllHotels().subscribe((response) => this.hotels = JSON.parse(JSON.stringify(response.body)));
   await this.amadeusHotelService.getRandomHotelsIn3Cities().subscribe(response=>{
      this.hotelFirstLevelDto = response.body;
      this.hotelFirstLevelDto.data.forEach(h => {
        this.showOffers.push(false);
        let rating:boolean[] =[];
        for(var i = 0;i<h.hotel.rating;i++){
          rating.push(true);
        }
        for(var idx = h.hotel.rating;idx<5;idx++){
          rating.push(false)
        }
        this.rating.push(rating)
      })
      console.log(this.hotelFirstLevelDto)
      console.log(this.rating)
    })
  } 
  toggle(index:number){
    console.log(index);
    this.showOffers[index] = !this.showOffers[index];
  }

  // deleteHotel(index:number){
  //   this.hotelService.deleteById(this.hotels[index].id).subscribe(response => {
  //     toastr.success('Hotelul' + this.hotels[index].name + 'a fost sters cu succes');
  //     this.hotels = this.hotels.filter(hotel => hotel.id != this.hotels[index].id);
  //   });
  // }

  // getEditLink(index){
  //   console.log('/admin/edit-hotel/' + this.hotels[index].id);
  //   return ;
  // }
  // navigateEditPage(index){
  //   console.log('/admin/edit-hotel/' + this.hotels[index].id);
  //   this.router.navigate(['/admin/edit-hotel/' + this.hotels[index].id])
  // }
}

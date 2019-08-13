import { HotelSecondLevelDto } from './../../model/hotel/HotelSecondLevelDto';
import { HotelOffer } from '../../model/hotel/HotelOffer';
import { AuthService } from './../../services/auth.service';
import { HotelFirstLevelDto } from './../../model/hotel/HotelFirstLevelDto';
import { AmadeusHotelService } from './../../services/amadeus-hotel.service';
import { HotelService } from './../../services/hotel.service';
import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr';

@Component({
  selector: 'app-view-hotels',
  templateUrl: './view-hotels.component.html',
  styleUrls: ['./view-hotels.component.css']
})
export class ViewHotelsComponent implements OnInit {
  message;
  cityName:string;
  hotelFirstLevelDto:HotelFirstLevelDto;
  showOffers:boolean[] = [];
  rating = [];
  // hotels:HotelDto[] =[];
  constructor(private authService:AuthService, private hotelService:HotelService, private amadeusHotelService:AmadeusHotelService) { }

 async ngOnInit() {
  this.message = "Random data loading";
  this.hotelFirstLevelDto = undefined;
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
    })
  } 
  toggle(index:number){
    this.showOffers[index] = !this.showOffers[index];
  }

  buyOffer(index:number){
    let hotelOffer = new HotelOffer();
    let hotelDto = this.hotelFirstLevelDto.data[index].hotel;
    hotelOffer.name = hotelDto.name;
    let hotelOfferFromHotel = this.hotelFirstLevelDto.data[index].offers.pop();
    console.log(hotelOfferFromHotel)
    if(hotelOfferFromHotel.guests){
      hotelOffer.adults = hotelOfferFromHotel.guests.adults;
    }   
    if(hotelOfferFromHotel.price){
      hotelOffer.currency = hotelOfferFromHotel.price.currency;
      hotelOffer.total = hotelOfferFromHotel.price.total;
    }
    hotelOffer.hotelId = this.hotelFirstLevelDto.data[index].hotel.hotelId;
    hotelOffer.rateCode = hotelOfferFromHotel.rateCode;


    console.log('inainte sa buy', hotelOffer)
    this.hotelService.buyOffer(hotelOffer).subscribe(response => toastr.success('Ai cumparat cu succes oferta'));
  }
  isUserLoggedIn():boolean{
    return this.authService.isUserLoggedIn();
  }

  searchForHotelsByCityName(){
    this.message = "Hotels for " + this.cityName + " are loading";
    this.hotelFirstLevelDto = undefined;
    this.amadeusHotelService.getAllHotelsByCityName(this.cityName).subscribe(response => this.hotelFirstLevelDto = response.body)
  }

  searchButtonDisabled(){
    return this.cityName == undefined || this.cityName == '';
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

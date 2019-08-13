import { CarOfferSearchDto } from './../model/CarOfferSearchDto';
import { CarOfferDto } from './../model/CarOfferDto';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CarOfferService{
    endpoint = 'http://localhost:8080/car-offer/'
    constructor(private http:HttpClient){
    }
  addCarOffer(carOffer:CarOfferDto){
    return this.http.post<any>(this.endpoint + 'add',carOffer, { observe: 'response' })
  }
  searchCarOffers(carOfferSearch:CarOfferSearchDto){
    return this.http.post<any>(this.endpoint + 'search',carOfferSearch, { observe: 'response' })
  }

  buyOffer(carOfferId){
    return this.http.post<any>(this.endpoint + 'buy',carOfferId, { observe: 'response' })
  }
  getBoughtOffers(){
    return this.http.get<any>(this.endpoint + 'get-bought', { observe: 'response' })
  }
}
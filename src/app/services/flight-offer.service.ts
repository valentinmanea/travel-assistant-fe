import { FlightOffer } from './../model/flight/FlightOffer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FlightOfferService {
  endpoint = 'http://localhost:8080/flight-offer/'

  constructor(private http:HttpClient) { }

  buyOffer(flightOffer:FlightOffer){
    return this.http.post<FlightOffer>(this.endpoint + 'buy', flightOffer, { observe: 'response' });
  }
  getBoughtOffers(){
    return this.http.get<FlightOffer>(this.endpoint + 'all', { observe: 'response' });
  }
}

import { FlightSearchDto } from './../model/flight/FlightSearchDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FullOfferService {
  endpoint = 'http://localhost:8080/full-offer'

  constructor(private http: HttpClient) { }

  getFullOffer(startCity, destinationCity){
    return this.http.get<any>(this.endpoint +"?destinationCity=" + destinationCity +"&startCity=" + startCity, { observe: 'response' });
  }

}

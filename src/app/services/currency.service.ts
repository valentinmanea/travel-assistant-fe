import { FlightOffer } from './../model/flight/FlightOffer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrencyService{
    endpoint = 'http://localhost:8080/currency/'
    constructor(private http:HttpClient){
    }
getAvailableCurrencies(){
    return this.http.get<any>(this.endpoint + 'all', { observe: 'response' })
  }
}
import { HttpClient } from '@angular/common/http';
import { HousingOfferDto } from './../model/HousingOfferDto';
import { Injectable } from '@angular/core';

@Injectable()
export class HousingOfferService {

  endpoint = 'http://localhost:8080/housing-offer/'

  constructor(private http: HttpClient, ) { }

  add(housingOfferDto:HousingOfferDto){
    return this.http.post<HousingOfferDto>(this.endpoint + 'add', housingOfferDto, { observe: 'response' });
  }
}

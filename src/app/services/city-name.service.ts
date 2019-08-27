import { FlightSearchDto } from './../model/flight/FlightSearchDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CityNameService {
  endpoint = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getAllCityNames(){
    return this.http.get<any>(this.endpoint + 'iata-codes', { observe: 'response' });
  }

}

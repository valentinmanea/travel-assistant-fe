import { FlightSearchDto } from './../model/flight/FlightSearchDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FlightService {
  endpoint = 'http://localhost:8080/flight/'

  constructor(private http: HttpClient) { }

  getAllCityNames(){
    return this.http.get<any>(this.endpoint + 'iata-codes', { observe: 'response' });
  }

  searchFlights(dto:FlightSearchDto){
    return this.http.post<any>(this.endpoint + 'search',dto, { observe: 'response' });
  }

}

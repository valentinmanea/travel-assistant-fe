import { FlightSearchDto } from './../model/flight/FlightSearchDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FlightService {
  endpoint = 'http://localhost:8080/flight/'

  constructor(private http: HttpClient) { }

  searchFlights(dto:FlightSearchDto){
    return this.http.post<any>(this.endpoint + 'search',dto, { observe: 'response' });
  }

}

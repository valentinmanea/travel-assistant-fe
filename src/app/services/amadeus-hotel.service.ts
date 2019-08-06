import { HotelFirstLevelDto } from './../model/hotel/HotelFirstLevelDto';
import { HotelDto } from './../model/hotel/HotelDto';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AmadeusHotelService {
    endpoint = 'http://localhost:8080/'
    constructor(private http: HttpClient) { }
    getAllHotelsByCityName(cityName:string): Observable<HttpResponse<HotelFirstLevelDto>> {
        return this.http.get<HotelFirstLevelDto>(this.endpoint + 'hotels-city/?cityName='+cityName, { observe: 'response' })
    }
    getRandomHotelsIn3Cities(): Observable<HttpResponse<HotelFirstLevelDto>> {
        return this.http.get<HotelFirstLevelDto>(this.endpoint + 'random-hotels', { observe: 'response' })
    }
}

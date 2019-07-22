import { HotelDto } from './../model/HotelDto';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomDto } from '../model/RoomDto';

@Injectable()
export class HotelService {
  endpoint = 'http://localhost:8080/hotel/'
  sessionStorage = window.sessionStorage;
  constructor(private http: HttpClient, ) { }

  getAllHotels(): Observable<HttpResponse<HotelDto>> {
    return this.http.get<HotelDto>(this.endpoint + 'all', { observe: 'response' })
  }

  addHotel(hotel:HotelDto): Observable<HttpResponse<HotelDto>>{
    return this.http.post<HotelDto>(this.endpoint + 'add', hotel, { observe: 'response' });
  }

  addRooms(roomDtos:RoomDto[]){
    return this.http.post<HotelDto>(this.endpoint, roomDtos, { observe: 'response' });
  }

  getHotelById(hotelId): Observable<HttpResponse<HotelDto>>{
    return this.http.get<HotelDto>(this.endpoint +  + hotelId, { observe: 'response' })

  }
  deleteById(hotelId): Observable<HttpResponse<HotelDto>>{
    return this.http.delete<HotelDto>(this.endpoint + hotelId,{observe:'response'})
  }
  editHotel(hotel:HotelDto){
    return this.http.put<HotelDto>(this.endpoint + 'edit', hotel, { observe: 'response' });
  }

  deleteRoom(id){
    return this.http.delete<RoomDto>(this.endpoint + 'room/' + id,{observe:'response'})
  }
  getAllHotelsName(){
    return this.http.get<any>(this.endpoint + 'names', { observe: 'response' })
  }

  retrieveAllReserverdDates(hotelName){
    return this.http.get<any>(this.endpoint + 'reserved-dates/?hotelName=' + hotelName, { observe: 'response' })

  }
  postForAvalaibleRoomsByHotelName(infoDto):Observable<HttpResponse<RoomDto[]>>{
    return this.http.post<any>(this.endpoint +'available-rooms',infoDto, 
      { observe: 'response' })
  }

  getAvailableCurrencies(){
    return this.http.get<any>(this.endpoint + 'currencies', { observe: 'response' })
  }
}

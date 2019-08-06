import { RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomDto } from '../model/hotel/RoomDto';

@Injectable()
export class HotelService {
  // endpoint = 'http://localhost:8080/hotel/'
  // testEndPoint = 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200';
  // sessionStorage = window.sessionStorage;
  // constructor(private http: HttpClient, ) { }



  // testEndpoint(token): Observable<any> {
  //   let httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' , 
  //     'Authorization': 'Bearer d0MsISHqNoOottumVPjO3YS5dS4h'})
  // };
  //   return this.http.get<any>(this.testEndPoint + '?token='+token, httpOptions);
  // }

  

  // getAllHotels(): Observable<HttpResponse<HotelDto>> {
  //   return this.http.get<HotelDto>(this.endpoint + 'all', { observe: 'response' })
  // }

  // addHotel(hotel:HotelDto): Observable<HttpResponse<HotelDto>>{
  //   return this.http.post<HotelDto>(this.endpoint + 'add', hotel, { observe: 'response' });
  // }

  // addRooms(roomDtos:RoomDto[]){
  //   return this.http.post<HotelDto>(this.endpoint, roomDtos, { observe: 'response' });
  // }

  // getHotelById(hotelId): Observable<HttpResponse<HotelDto>>{ 
  //   return this.http.get<HotelDto>(this.endpoint +  + hotelId, { observe: 'response' })

  // }
  // deleteById(hotelId): Observable<HttpResponse<HotelDto>>{
  //   return this.http.delete<HotelDto>(this.endpoint + hotelId,{observe:'response'})
  // }
  // editHotel(hotel:HotelDto){
  //   return this.http.put<HotelDto>(this.endpoint + 'edit', hotel, { observe: 'response' });
  // }

  // deleteRoom(id){
  //   return this.http.delete<RoomDto>(this.endpoint + 'room/' + id,{observe:'response'})
  // }
  // getAllHotelsName(){
  //   return this.http.get<any>(this.endpoint + 'names', { observe: 'response' })
  // }

  // retrieveAllReserverdDates(hotelName){
  //   return this.http.get<any>(this.endpoint + 'reserved-dates/?hotelName=' + hotelName, { observe: 'response' })

  // }
  // postForAvalaibleRoomsByHotelName(infoDto):Observable<HttpResponse<RoomDto[]>>{
  //   return this.http.post<any>(this.endpoint +'available-rooms',infoDto, 
  //     { observe: 'response' })
  // }

  // getAvailableCurrencies(){
  //   return this.http.get<any>(this.endpoint + 'currencies', { observe: 'response' })
  // }
}

import { AuthDto } from './../model/AuthDto';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AmadeusAuthService {

  constructor(private http:HttpClient) { }

   getToken(): Observable<AuthDto>{
    
    const body = new HttpParams()
    .set('client_id', 'y3T02HYIzGG5sODGR75cRqy4r8xaZsAs')
    .set('client_secret', '4PCSGqC87qDRaJ89')
    .set('grant_type', 'client_credentials');
    return this.http.post<AuthDto>('https://test.api.amadeus.com/v1/security/oauth2/token',
    body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
  }
}

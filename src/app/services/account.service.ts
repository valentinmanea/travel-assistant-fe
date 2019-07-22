import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import {AppComponent} from "../app.component";

@Injectable()
export class AccountService {
  constructor(public http: HttpClient) { }
  createAccount(user:User){
    return this.http.post(AppComponent.API_URL+'/auth/register',user)
  }
  confirmAccount(token:string){
    return this.http.get(AppComponent.API_URL+'/auth/registrationConfirm/?token=' + token,{responseType: 'text'})

  }
}

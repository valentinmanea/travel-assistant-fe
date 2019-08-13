import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';;
import {User} from "../model/model.user";
import 'rxjs/add/operator/map';
import {AppComponent} from "../app.component";
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(public http: HttpClient, private router:Router) { }
  currentUser:User;

  public isUserLoggedIn():boolean{
    return window.localStorage.getItem('currentUser') != undefined;
  }
  public logIn(user: User){
    console.log('user',user)
    var base64Credential: string = btoa( user.username+ ':' + user.password);
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': "Basic " + base64Credential }),
      observe: 'response' as 'response'
    };

    return this.http.get(AppComponent.API_URL+"/auth/login", httpOptions)
      .map((response: any) => {
      this.currentUser = response.body.principal;
      if (this.currentUser) {
        localStorage.setItem("auth",base64Credential);
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      }
    });
  }

  logOut() {
    window.localStorage.clear();
    return this.http.post(AppComponent.API_URL+"/logout",{})
      .map((response: Response) => {
      });

  }
  salut(){
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type':'text/plain; charset=utf-8'}),
      observe: 'response' as 'response'
    };
    return this.http.get(AppComponent.API_URL+"/auth/salut", httpOptions);
  }
}

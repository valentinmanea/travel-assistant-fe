import { AmadeusAuthService } from './../../services/amadeus-auth.service';
import { HotelService } from './../../services/hotel.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../../model/model.user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import * as toastr from 'toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user: User=new User();
  errorMessage:string;
  constructor(private authService :AuthService, private router: Router, private amadeusAuthService:AmadeusAuthService, private hotelService:HotelService) { }

  ngOnInit() {
    let token = '';
    this.amadeusAuthService.getToken().subscribe((response) => token = response.access_token);
  }

  login(){
    this.authService.logIn(this.user)
      .subscribe(data=>{
        this.router.navigate(['/']);
        },err=>{
        this.errorMessage="error : "+ err.message;
        }
      )
  }
 
}

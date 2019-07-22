import { PreviousRouteService } from './../../services/previous-route.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/model.user";
import {Router} from "@angular/router";
import * as toastr from 'toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  constructor(public router: Router,
     private previousRouteService:PreviousRouteService ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

// login out from the app
 
  salut(){
    toastr.warning('Pentru a accesa aceasta pagina, te rugam sa te autentifici')
    this.previousRouteService.navigate();
  }
  home(){
    this.router.navigate(['/home']);
  }
}

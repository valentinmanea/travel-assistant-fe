import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role;
  currentUser;
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
    if(JSON.parse(window.localStorage.getItem("currentUser"))){
      this.role = JSON.parse(window.localStorage.getItem("currentUser")).role;
    }
    this.currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  }
  logOut() {
    this.router.navigate(['/login'])
    window.localStorage.clear();
    this.currentUser = null;
    this.authService.logOut()
      .subscribe();
  }
  isAdministrator(){
    console.log(this.role)
    if(this.role){
      return this.role.name === 'ADMIN';
    }
    return false;
  }
}

import { AuthService } from './../services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable()
export class AuthGuard implements CanActivate {
  sessionStorage = window.sessionStorage;
  constructor(private authService: AuthService, private router:Router) { 
  }
  canActivate(){
    console.log('canActivate',this.authService.currentUser)
    if (window.localStorage.getItem("currentUser")){
      return true;
    }else{
      toastr.warning('Pentru a accesa aceasta pagina, te rugam sa te autentifici')
      this.router.navigate(['/signin']);
      return false;
    }
  }
}

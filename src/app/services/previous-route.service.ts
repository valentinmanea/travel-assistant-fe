import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class PreviousRouteService {

  private previousUrl: string;
  private currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {   
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }
  navigate(){
    console.log('navigate', this.previousUrl)
    this.router.navigate([this.previousUrl]);
  }  
}
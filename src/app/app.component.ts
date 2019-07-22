import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travel Assistant  ';
  static API_URL="http://localhost:8080";
  constructor(private router:Router, private elementRef: ElementRef){
  }
  showMenuAndNavBar(){
    return this.router.url != '/login' && 
      this.router.url != '/register' && 
      this.router.url.indexOf('/admin') == -1;
  }
  showAdminMenuBar(){
    return this.router.url.indexOf('/admin') > -1;
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url(./assets/back.jpg)';
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundRepeat = 'repeat';
    this.elementRef.nativeElement.ownerDocument.body.style.height = '100%';

  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as toastr from 'toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  warning(){
    toastr.warning('Pentru a accesa aceasta pagina, te rugam sa te autentifici')
    toastr.info('Pentru a accesa aceasta pagina, te rugam sa te autentifici')
    toastr.error('Pentru a accesa aceasta pagina, te rugam sa te autentifici')


  }
  profile(){
    this.router.navigate(['/profile'])
  }
}

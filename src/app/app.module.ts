import { CarOfferService } from './services/car-offer.service';
import { FlightOfferService } from './services/flight-offer.service';
import { FlightService } from './services/flight.service';
import { AmadeusHotelService } from './services/amadeus-hotel.service';
import { HousingOfferComponent } from './components/housing-offer/housing-offer.component';
import { HousingOfferService } from './services/housing-offer.service';
import { HotelService } from './services/hotel.service';

import { PreviousRouteService } from './services/previous-route.service';
import { AuthInterceptor } from './components/interceptors/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from "./services/auth.service";
import { AccountService} from "./services/account.service";
import { ProfileComponent } from './pages/profile/profile.component';
import { routing} from "./app.routing";
import { FacebookModule} from "ngx-facebook";
import { AuthGuard } from './guard/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterConfirmationComponent } from './pages/register-confirmation/register-confirmation.component';
import { MenuComponent } from './components/menu/menu.component';
import { HistoryComponent } from './pages/history/history.component';
import { HttpModule } from '@angular/http';
import { ViewHotelsComponent } from './pages/view-hotels/view-hotels.component';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';
import { AmadeusAuthService } from './services/amadeus-auth.service';
import { HistoryHotelComponent } from './pages/history-hotel/history-hotel.component';
import { ViewFlightsComponent } from './pages/view-flights/view-flights.component';
import { FlightHistoryComponent } from './pages/flight-history/flight-history.component';
import { AddCarOfferComponent } from './pages/add-car-offer/add-car-offer.component';
import { CurrencyService } from './services/currency.service';
import { ViewCarOffersComponent } from './pages/view-car-offers/view-car-offers.component';
import { CarOfferHistoryComponent } from './pages/car-offer-history/car-offer-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HistoryComponent,
    MenuComponent,
    NavbarComponent,
    RegisterConfirmationComponent,
    HomeComponent,
    ViewHotelsComponent,
    SelectDropdownComponent,
    HousingOfferComponent,
    HistoryHotelComponent,
    ViewFlightsComponent,
    FlightHistoryComponent,
    AddCarOfferComponent,
    ViewCarOffersComponent,
    CarOfferHistoryComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    routing, 
    FacebookModule.forRoot(),
  ],
  providers: [AuthService,AccountService, HousingOfferService, HttpClientModule,AuthGuard,PreviousRouteService, HotelService,
    AmadeusAuthService,AmadeusHotelService, FlightService, FlightOfferService, CurrencyService, CarOfferService,
    {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true 
    
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
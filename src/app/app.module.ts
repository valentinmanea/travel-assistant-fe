import { HousingOfferService } from './services/housing-offer.service';
import { HotelService } from './services/hotel.service';
import { ViewHousingOffersComponent } from './pages/view-housing-offers/view-housing-offers.component';
import { AddHousingOfferComponent } from './pages/add-housing-offer/add-housing-offer.component';
import { AddHotelComponent } from './pages/add-hotel/add-hotel.component';

import { PreviousRouteService } from './services/previous-route.service';
import { AuthInterceptor } from './components/interceptors/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { SearchComponent } from './components/search/search.component';
import { HistoryComponent } from './pages/history/history.component';
import { HttpModule } from '@angular/http';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { ViewHotelsComponent } from './pages/view-hotels/view-hotels.component';
import { EditHotelComponent } from './pages/edit-hotel/edit-hotel.component';
import { SelectDropdownComponent } from './components/select-dropdown/select-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SearchComponent,
    HistoryComponent,
    MenuComponent,
    NavbarComponent,
    RegisterConfirmationComponent,
    HomeComponent,
    AdminMenuComponent,
    ViewHotelsComponent,
    AddHotelComponent,
    AddHousingOfferComponent,
    ViewHousingOffersComponent,
    EditHotelComponent,
    SelectDropdownComponent
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
    {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true 
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
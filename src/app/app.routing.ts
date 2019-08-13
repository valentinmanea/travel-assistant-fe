import { CarOfferHistoryComponent } from './pages/car-offer-history/car-offer-history.component';
import { ViewCarOffersComponent } from './pages/view-car-offers/view-car-offers.component';
import { AddCarOfferComponent } from './pages/add-car-offer/add-car-offer.component';
import { FlightHistoryComponent } from './pages/flight-history/flight-history.component';
import { ViewFlightsComponent } from './pages/view-flights/view-flights.component';
import { HistoryHotelComponent } from './pages/history-hotel/history-hotel.component';
import { ViewHotelsComponent } from './pages/view-hotels/view-hotels.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guard/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from "./pages/login/login.component";
import { RegisterComponent} from "./pages/register/register.component";
import { ProfileComponent} from "./pages/profile/profile.component";
import { RegisterConfirmationComponent } from './pages/register-confirmation/register-confirmation.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'history/full-offer', component: HistoryComponent },
  { path: 'history/housing', component: HistoryHotelComponent },
  { path: 'history/flights', component: FlightHistoryComponent },
  { path: 'history/car-rental', component: CarOfferHistoryComponent  },
  { path: 'register-confirmation/:token', component: RegisterConfirmationComponent },
  { path: 'view-hotels', component: ViewHotelsComponent},
  { path: 'view-flights', component: ViewFlightsComponent},
  { path: 'view-car-offers', component: ViewCarOffersComponent},
  { path: 'admin/add-car-offer', component: AddCarOfferComponent},
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);

import { EditHotelComponent } from './pages/edit-hotel/edit-hotel.component';
import { ViewHotelsComponent } from './pages/view-hotels/view-hotels.component';
import { AddHousingOfferComponent } from './pages/add-housing-offer/add-housing-offer.component';
import { ViewHousingOffersComponent } from './pages/view-housing-offers/view-housing-offers.component';
import { AddHotelComponent } from './pages/add-hotel/add-hotel.component';
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
  { path: 'history', component: HistoryComponent },
  { path: 'register-confirmation/:token', component: RegisterConfirmationComponent },
  { path: 'admin/add-hotel', component: AddHotelComponent, canActivate: [AuthGuard]},
  { path: 'admin/edit-hotel/:id', component: EditHotelComponent, canActivate: [AuthGuard]},

  { path: 'admin/view-hotels', component: ViewHotelsComponent, canActivate: [AuthGuard]},
  { path: 'admin/add-housing-offer', component: AddHousingOfferComponent, canActivate: [AuthGuard]},
  { path: 'admin/view-housing-offers', component: ViewHousingOffersComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);

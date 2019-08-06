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
  { path: 'history', component: HistoryComponent },
  { path: 'register-confirmation/:token', component: RegisterConfirmationComponent },

  { path: 'view-hotels', component: ViewHotelsComponent},
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);

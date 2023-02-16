import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { SignUpComponent } from './Views/sign-up/sign-up.component';
import { AssociatedComponent } from './Views/associated/associated.component';
import { SignupconfirmComponent} from './Views/signupconfirm/signupconfirm.component';
import { ActivitiesComponent } from './Views/activities/activities.component';
import { ActivitiesCardComponent } from './components/activities-card/activities-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'associated', component: AssociatedComponent},
  {path: 'confirm', component: SignupconfirmComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'card', component: ActivitiesCardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

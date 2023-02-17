import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { SignUpComponent } from './Views/sign-up/sign-up.component';
import { AssociatedComponent } from './Views/associated/associated.component';
import { SignupconfirmComponent} from './Views/signupconfirm/signupconfirm.component';
import { ActivitiesComponent } from './Views/activities/activities.component';
import { DetailAssociatedComponent } from './Views/detail-associated/detail-associated.component'
import { DashboardComponent } from './Views/dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'confirm', component: SignupconfirmComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'associated', component: AssociatedComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'detailAssociated', component: DetailAssociatedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/Views/login/login.component';
import { SignUpComponent } from '../app/Views/sign-up/sign-up.component';
import { AssociatedComponent } from '../app/Views/associated/associated.component';
import { SignupconfirmComponent} from '../app/Views/signupconfirm/signupconfirm.component';
import { ActivitiesComponent } from '../app/Views/activities/activities.component';
import {AssociatedFormComponent} from '../app/Views/associated-form/associated-form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'confirm', component: SignupconfirmComponent},
  {path: 'associated', component: AssociatedComponent},
  {path: 'associated/new', component: AssociatedFormComponent},
  {path: 'activities', component: ActivitiesComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

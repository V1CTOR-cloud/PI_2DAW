import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { SignUpComponent } from './Views/sign-up/sign-up.component';
import { AssociatedComponent } from './Views/associated/associated.component';
import { SignupconfirmComponent} from './Views/signupconfirm/signupconfirm.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'associated', component: AssociatedComponent},
  {path: 'confirm', component: SignupconfirmComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

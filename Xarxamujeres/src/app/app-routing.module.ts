import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { SignUpComponent } from './Views/sign-up/sign-up.component';
import { AssociatedComponent } from './Views/associated/associated.component';
import { SignupconfirmComponent } from './Views/signupconfirm/signupconfirm.component';
import { ActivitiesComponent } from './Views/activities/activities.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { DetailComponent } from './Views/detail/detail.component';
import { AssociatedFormComponent } from './Views/associated-form/associated-form.component';
import { FilesComponent} from './Views/files/files.component';
import { RemarksComponent} from './Views/remarks/remarks.component';
import { GraphicCardActivitiesComponent } from './components/graphic-card-activities/graphic-card-activities.component';
import { AssociatedResolver } from './resolvers/associated.resolver';
import { RemarksFormComponent } from './Views/remarks-form/remarks-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'confirm', component: SignupconfirmComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'associated', component: AssociatedComponent},
  { path: 'activities', component: ActivitiesComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'newAssociated', component: AssociatedFormComponent },
  { path: 'files', component: FilesComponent },
  { path: 'remarks', component: RemarksComponent },
  { path: 'remarks/new', component: RemarksFormComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

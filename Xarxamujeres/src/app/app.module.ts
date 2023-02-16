import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/login/login.component';
import { ButtonComponent } from './components/button/button.component';
import { SignUpComponent } from './Views/sign-up/sign-up.component';
import { InputComponent } from './components/input/input.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { AssociatedComponent } from './Views/associated/associated.component';
import { SignupconfirmComponent } from './Views/signupconfirm/signupconfirm.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { ActivitiesCardComponent } from './components/activities-card/activities-card.component';
import { ActivitiesComponent } from './Views/activities/activities.component';
import { DetailAssociatedComponent } from './Views/detail-associated/detail-associated.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    SignUpComponent,
    InputComponent,
    CarrouselComponent,
    AssociatedComponent,
    SignupconfirmComponent,
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    ActivitiesCardComponent,
    ActivitiesComponent,
    DetailAssociatedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

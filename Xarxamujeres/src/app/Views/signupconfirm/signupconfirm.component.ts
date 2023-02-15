import { Component } from '@angular/core';

@Component({
  selector: 'app-signupconfirm',
  templateUrl: './signupconfirm.component.html',
  styleUrls: ['./signupconfirm.component.css']
})
export class SignupconfirmComponent {
  public signInBtn: string = "signIn";
  public signUpBtn: string = "signUp";
  public passwordInput: string = "password";
  public passwordConfirmInput: string = "password";

}

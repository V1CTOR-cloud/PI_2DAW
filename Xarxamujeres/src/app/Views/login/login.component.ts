import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public signInBtn: string = "signIn";
  public signUpBtn: string = "signUp";
  public continueBtn : string = "continue";

  public passwordInput: string = "password";
  public emailInput: string = "email";
}

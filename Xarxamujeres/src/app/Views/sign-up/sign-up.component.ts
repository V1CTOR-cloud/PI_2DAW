import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public signInBtn: string = "signIn";
  public continueBtn : string = "continue";

  public email: string = "email";
  public name: string = "name";
}


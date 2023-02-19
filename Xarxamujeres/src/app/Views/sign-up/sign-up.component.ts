import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public name: string = "name";
  public email: string = "email";
  
  public image: string = "https://images.pexels.com/photos/3732864/pexels-photo-3732864.jpeg?auto=compress&cs=tinysrgb&w=1600";
  

}


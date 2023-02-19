import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import {Router} from "@angular/router";
import { Employee } from 'src/app/models/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public signInBtn: string = "signIn";
  public signUpBtn: string = "signUp";
  public continueBtn: string = "continue";

  public passwordInput: string = "password";
  public emailInput: string = "email";


  public images: { img: string }[] = [
    { img: 'https://images.pexels.com/photos/3732864/pexels-photo-3732864.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { img: 'https://images.pexels.com/photos/3732652/pexels-photo-3732652.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { img: 'https://images.pexels.com/photos/8975673/pexels-photo-8975673.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' },
    { img: 'https://images.pexels.com/photos/4058217/pexels-photo-4058217.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { img: 'https://images.pexels.com/photos/3732881/pexels-photo-3732881.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { img: 'https://images.pexels.com/photos/4063918/pexels-photo-4063918.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { img: 'https://images.pexels.com/photos/3732659/pexels-photo-3732659.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { img: 'https://images.pexels.com/photos/3541388/pexels-photo-3541388.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { img: 'https://images.pexels.com/photos/6608259/pexels-photo-6608259.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { img: 'https://images.pexels.com/photos/7153908/pexels-photo-7153908.jpeg?auto=compress&cs=tinysrgb&w=1600' }
  ];
  public counter: number = 0;

  @Input() MAIL: string = "";
  @Input() PWD: string = "";

  constructor(private http: HttpClient, public service: DataService, private router: Router) { }

  public previous(): void {
    if (this.counter === 0) {
      this.counter = this.images.length - 1;
    } else {
      this.counter--;
    }
  }

  public next(): void {
    if (this.counter === this.images.length - 1) {
      this.counter = 0;
    } else {
      this.counter++;
    }
  }

  public login(json:any): void {
    this.service.login(json).subscribe((response) => {this.NewSession(response);
    });
  }

  NewSession(response:any){
    
    // let employee: Employee= response;
    console.log(response);
    localStorage.setItem('Employee', JSON.stringify(response));
    this.router.navigate(['/dashboard']);
  }

  onSubmit(){
    console.log(this.MAIL,this.PWD);

    const json = {
      'EMAIL': this.MAIL, 
      'PASS': this.PWD
    }

    this.login(json);
  }


}

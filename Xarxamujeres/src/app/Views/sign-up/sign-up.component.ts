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

  public selectedFile: File = {} as File;

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.selectedFile = file;
  }
  selectFile(event: any) {
    this.selectedFile = event.target.files[0];
  }
  
  
}


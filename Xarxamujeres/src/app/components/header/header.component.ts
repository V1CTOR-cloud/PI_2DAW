import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public data = window.localStorage.getItem('Employee');
  public profilePhoto: string = 'https://ionicframework.com/docs/img/demos/avatar.svg'
  public userName: string = "User";
  public job: string = "Job";
  
  @Input() moduleTitle: string = "";

  ngOnInit(){
    if (this.data!=null){
      var json = JSON.parse(this.data)[0];
      this.userName = json['NAME'];
      this.job = json['PROFILE'];
      this.profilePhoto = json['IMAGE'];
    }
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public profilePhoto: string = 'https://steamuserimages-a.akamaihd.net/ugc/928179527045332677/1130B6058CA9AB60BB5FFC42E1377A4C6871337B/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
  public userName: string = "Joan Coronado";
  public job: string = "Technician";
  
  @Input() moduleTitle: string = "";
}

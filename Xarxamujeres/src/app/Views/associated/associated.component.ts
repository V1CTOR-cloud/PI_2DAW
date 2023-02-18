import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-associated',
  templateUrl: './associated.component.html',
  styleUrls: ['./associated.component.css']
})
export class AssociatedComponent {
  public moduleTitle:string = 'Associated 🤝';
  public associatedLenght:number = 536;
  public associatedFilteredLenght:number = 536;

  public ArrayAssociated: Array<string>[] = [];

  constructor(public service: DataService) {}

  public getEmployees(): void {
    this.service.getEmployees().subscribe((response) => {this.EmployeesToArray(response);
    });
  }

  public getAssociated(): void {
    this.service.getAssociated().subscribe((response) => {this.AssociatedToArray(response);
    });
  }

  public EmployeesToArray(response: any){
    let newArray = [];
    for(let i = 0; i<response.length; i++){
      newArray[i] = [response[i].NAME, response[i].EMAIL, response[i].PROFILE, response[i].IMAGE];
    }
    this.ArrayAssociated = newArray;
  }

  public AssociatedToArray(response: any){
    let newArray = [];
    for(let i = 0; i<response.length; i++){
      newArray[i] = [response[i].NAME, response[i].MAIL, response[i].LOC, response[i].DATE];
    }
    this.ArrayAssociated = newArray;
    this.associatedLenght = this.ArrayAssociated.length;
  }

  ngOnInit(){
    this.getAssociated();
  }

}

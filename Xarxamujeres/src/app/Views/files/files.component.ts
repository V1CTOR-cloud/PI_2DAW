import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {

  @Input() moduleTitle: string = "File System 📁";
  public associatedLenght:number = 536;

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

import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  public Word:string="HOLA";

  public constructor(public service: DataService){}

  public getResponse():void{
    this.service.getResponse("list").subscribe(response =>this.cosa(response[0].meanings[0].definitions[0].definition));
  }

  public cosa(palabra:string){
    console.log(palabra);
    this.Word==palabra; 
  }

  public ngOnInit(){
    this.getResponse();
  }

}

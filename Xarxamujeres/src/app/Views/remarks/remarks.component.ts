import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Remark } from 'src/app/models/response';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.css']
})
export class RemarksComponent {

  public moduleTitle:string = 'Remarks 📃';

  public Title: string  = "Título";
  public Author: string  = "Autor";
  public Text: string  = "Contenido";
  public Date: string  = "Fecha";

  public id: number = 1;
  public maxId: number = 99;

  constructor(private http: HttpClient, public service: DataService){}



  public getRemark(id:number): void {
    this.service.getRemark(id).subscribe((response) => {this.formatResponse(response)
    });
  }

  public getRemarks(): void {
    this.service.getRemarks().subscribe((response) => {this.getRemarksNum(response)
    });
  }

  ngOnInit(){
    this.getRemarks();
    this.getRemark(this.id);
  }

  public formatResponse(response: any){
    if(response!=null){
      let remark = response[0]
      this.Title = remark.TITLE;
      this.Author = remark.AUTHOR;
      this.Text = remark.DESC;
      this.Date = remark.DATE;
    }
  }

  public nextRemark(){
    if(this.id<this.maxId){
      ++this.id;
      this.getRemark(this.id);
    }
  }

  public getRemarksNum(response: any){
    this.maxId = response.length;
  }

}

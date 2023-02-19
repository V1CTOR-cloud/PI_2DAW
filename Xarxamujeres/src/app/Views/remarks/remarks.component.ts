import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Remark } from 'src/app/models/response';
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

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

  public counter: number  = 0;
  public Idarray: any = [];

  public id: number = 1;
  public maxId: number = 99;


  constructor(private http: HttpClient, public service: DataService, private router: Router, public snackBar: MatSnackBar){}



  public getRemark(id:number): void {
    this.service.getRemark(id).subscribe((response) => {this.formatResponse(response)
    });
  }

  public getRemarks(): void {
    this.service.getRemarks().subscribe((response) => {this.getRemarksNum(response)
    });
  }

  public deleteRemark(id:number): void {
    this.service.deleteRemark(id).subscribe((response) => {console.log(response)});
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
    if(this.id<this.Idarray[(this.Idarray.length-1)]){
      ++this.counter;
      this.id = this.Idarray[this.counter];
      this.getRemark(this.id);
    }
  }

  public prevRemark(){
    if(this.id>this.Idarray[0]){
      --this.counter;
      this.id = this.Idarray[this.counter];
      this.getRemark(this.id);
    }
  }

  public getRemarksNum(response: any){
  for(let i=0; i<response.length; i++){
      
      this.Idarray.push(response[i].ID);
    }
    this.id = this.Idarray[0];
    this.maxId = this.Idarray[(this.Idarray.length-1)];
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public delete(id:number){
    this.deleteRemark(id);
    this.openSnackBar('Comentario borrado correctamente.', 'CERRAR');
    this.router.navigate(['/remarks']);
  }

}

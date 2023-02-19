import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models/response';
import { DataService } from 'src/app/services/data.service';
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-remarks-form',
  templateUrl: './remarks-form.component.html',
  styleUrls: ['./remarks-form.component.css']
})
export class RemarksFormComponent {
  public moduleTitle:string = 'Associated 🤝';

  constructor(private http: HttpClient, public service: DataService, private router: Router, public snackBar: MatSnackBar) { }

    @Input() Title: string = "";
    @Input() Author: string = "Autor";
    @Input() Desc: string = "";
    // @Input() PC: string = "";
    // @Input() city: string = "";
    // @Input() province: string = "";
    // @Input() BD: string = "";

    public lista: any = ["Hola","Adiós"];
    public listaIds: any = [];

    public onSubmit(){
      const json = {
        'AUTH': this.Author, 
        'TITLE': this.Title,
        'DESC': this.Desc
      }
      this.newRemark(json);
      this.openSnackBar('Comentario insertado correctamente.', 'CERRAR');
      this.router.navigate(['/remarks']);
    }

    public newRemark(json:any): void {
      this.service.newRemark(json).subscribe((response) => {console.log(response);
      });
    }

    public getEmployees(): void {
      this.service.getEmployees().subscribe((response) => {this.ListEmployees(response);
      });
    }

    public ListEmployees(response:any){
      let Arr = [];
      for(let i = 0; i<response.length;i++){
        let item: Employee = response[i];
        Arr.push(item);
      }
      this.lista = Arr;
    }

    public ngOnInit(){
      this.getEmployees();
    }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }
}

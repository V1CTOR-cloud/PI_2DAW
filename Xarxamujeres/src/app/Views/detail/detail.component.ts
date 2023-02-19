import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { Associated } from 'src/app/models/response';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  public moduleTitle:string = 'Associated 🤝';
  public name: string = 'Marlene';
  public phone: string = '609874345';
  public mail: string = 'darlene1998@gmail.com';
  public birthDate: string = 'Monday, 23, February, 2023';
  public dni: string = '54426616A';
  public dischargeDate: string = 'Marlene';
  public postalCode: number = 46025;
  public province: string = 'Valencia';
  public location: string = 'Valencia';
  public disableDeg: number = 1;
  public disableType: string = 'Sensory disability';
  public photo: string = '';

  public id: number = 0;
  private sub: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, public service: DataService, private router: Router, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
       console.log(this.id);
       this.getAssociated(this.id);
    });
  }

  public getAssociated(id:number): void {
    this.service.getSingleAssociated(id).subscribe((response) => {this.DataToVariables(response);
    });
  }

  public DataToVariables(response:any){
    let Associated : Associated = response[0];
    this.name = Associated.NAME;
    this.phone = Associated.PHONE;
    this.mail = Associated.MAIL;
    this.birthDate = Associated.BD;
    this.dischargeDate = Associated.DATE;
    this.postalCode = Associated.PC;
    this.province = Associated.PROV;
    this.location = Associated.LOC;
    this.disableDeg = Associated.DD;
    this.disableType = Associated.DT;
    this.photo = Associated.PHOTO;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public deleteAssociated(id:number): void {
    this.service.deleteAssociated(id).subscribe((response) => {console.log(response)});
  }

  public delete(){
    this.deleteAssociated(this.id);
    this.openSnackBar('Socia dada de baja correctamente.', 'CERRAR');
    this.redirectTo('/associated');
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

}

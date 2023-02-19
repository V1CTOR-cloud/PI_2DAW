import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-associated-form',
  templateUrl: './associated-form.component.html',
  styleUrls: ['./associated-form.component.css']
})
export class AssociatedFormComponent {

  public moduleTitle:string = 'Associated 🤝';


    @Input() date: string = "";
    @Input() nameSurname: string = "";
    @Input() formFile: string = "";
    @Input() PC: string = "";
    @Input() city: string = "";
    @Input() province: string = "";
    @Input() mail: string = "";
    @Input() DT: string = "";
    @Input() DD: string = "";
    @Input() FA: string = "";
    @Input() BD: string = "";
    @Input() phone: string = "";

    constructor(private http: HttpClient, public service: DataService, private router: Router, public snackBar: MatSnackBar) { }

    public onSubmit(){
      let localDate = this.strToTS(this.date);
      let localBDate = this.strToTS(this.BD);
      let tsD = new Date(localDate*1000);
      let tsBD = new Date(localBDate*1000);
      console.log(localDate);

      const json = {
        // 'DATE': localDate, 
        'NAME': this.nameSurname,
        'PHONE': this.phone,
        'PC': this.PC,
        'LOC': this.city,
        'PROV': this.province,
        'BD': localBDate,
        'MAIL' : this.mail,
        'DD': this.DD,
        'DT': this.DT
      }

      this.newAssociated(json);
      this.openSnackBar('Socia insertada correctamente.', 'CERRAR')
      this.router.navigate(['/associated'])

    }

    public strToTS(string: string){
        const dt = Date.parse(string);
        return dt / 1000;
    }

    public newAssociated(json:any): void {
      this.service.newAssociated(json).subscribe((response) => {console.log(response);
      });
    }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

    //  filedata:any;

    // fileEvent(e: any){
    //     this.filedata = e.target.files[0];
    // }

    // /* Upload button functioanlity */
    // onSubmitform(f: NgForm) {
       
    //   var myFormData = new FormData();

    //   const headers = new HttpHeaders();

    //   headers.append('Content-Type', 'multipart/form-data');
    //   headers.append('Accept', 'application/json');

    //   myFormData.append('image', this.filedata);

    //   /* Image Post Request */
    //   this.http.post('/save', myFormData, {
    //   headers: headers
    //   }).subscribe(data => {
    //    //Check success message
    //    console.log(data);
    //   });  
  
  // }
}

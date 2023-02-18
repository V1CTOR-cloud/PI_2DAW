import { Component, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

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
    @Input() BD: string = "";

    constructor(private http: HttpClient) { }

    public onSubmit(){
      let localDate = this.strToTS(this.date);
      let localBDate = this.strToTS(this.BD);
      let tsD = new Date(localDate*1000);
      let tsBD = new Date(localBDate*1000);
      console.log(tsD);

      const json = {
        'DATE': tsD, 
        'NAME': this.nameSurname,
        'PC': this.PC,
        'LOC': this.city,
        'PROV': this.province,
        'BD': tsBD,
        'DD': 0,
        'Dt': "ninguna"
      }

    }

    public strToTS(string: string){
        const dt = Date.parse(string);
        return dt / 1000;
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

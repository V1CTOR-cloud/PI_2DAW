import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-associated-form',
  templateUrl: './associated-form.component.html',
  styleUrls: ['./associated-form.component.css']
})
export class AssociatedFormComponent {
    constructor(private http: HttpClient) { }

     filedata:any;

    fileEvent(e: any){
        this.filedata = e.target.files[0];
    }

    /* Upload button functioanlity */
    onSubmitform(f: NgForm) {
       
      var myFormData = new FormData();

      const headers = new HttpHeaders();

      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');

      myFormData.append('image', this.filedata);

      /* Image Post Request */
      this.http.post('/save', myFormData, {
      headers: headers
      }).subscribe(data => {
       //Check success message
       console.log(data);
      });  
  
  }
}

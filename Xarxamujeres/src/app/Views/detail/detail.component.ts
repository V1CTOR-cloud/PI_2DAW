import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public photo: string = 'https://images.pexels.com/photos/4063537/pexels-photo-4063537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  public id: number = 0;
  private sub: any;

  constructor(private route: ActivatedRoute, public service: DataService) {}

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

}

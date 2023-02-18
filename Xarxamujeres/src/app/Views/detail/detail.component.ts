import { Component, Input } from '@angular/core';

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
  public postalCode: string = '46025';
  public province: string = 'Valencia';
  public location: string = 'Valencia';
  public disableGrade: string = '1 - Self-care';
  public disableType: string = 'Sensory disability';
}

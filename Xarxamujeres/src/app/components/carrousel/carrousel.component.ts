import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
  public leftArrowBtn = 'leftArrow';
  public rightArrowBtn = 'rightArrow'; 

  @Output() img = new EventEmitter<string>();

  public list: {case: string, img: string; }[] = [
    {case: 'one',  img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {case: 'two',  img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {case: 'three', img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
  ];
  case: string = 'one';

  clickAnterior() {
    if (this.case === 'one') {
      this.case = 'three';
      this.img.emit();
    } else if (this.case === 'two') {
      this.case = 'one';
      this.img.emit();
    } else {
      this.case = 'two';
      this.img.emit();
    }
  }

  clickSiguiente() {
    if (this.case === 'one') {
      this.case = 'two';
      this.img.emit();
    } else if (this.case === 'two') {
      this.case = 'three';
      this.img.emit();
    } else {
      this.case = 'one';
      this.img.emit();
    }
  }
}


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
    {case: 'one',  img: "https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg"},
    {case: 'two',  img: "https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png"},
    {case: 'three', img: "https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png"}
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


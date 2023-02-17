import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
  currentImageIndex = 0;
  list = [
    { img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
  ];

  prevImage() {
    if (this.currentImageIndex === 0) {
      this.currentImageIndex = this.list.length - 1;
    } else {
      this.currentImageIndex--;
    }
  }

  nextImage() {
    if (this.currentImageIndex === this.list.length - 1) {
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex++;
    }
  }
}


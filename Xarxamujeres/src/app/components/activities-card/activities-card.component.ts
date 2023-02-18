import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.css']
})
export class ActivitiesCardComponent {
  
  @Input() type: string = '';
  @Input() emoji: string ='🎉';
  @Input() emoji2: string ='🏡';
  @Input() emoji3: string ='⚙️';
  @Input() title: string = 'Valencian corts proposals';
  @Input() title2: string = 'Marlene session';
  @Input() title3: string = 'Memory Schedule';
  @Input() description: string = 'Today, 17 January 2022 was an important day for our association.';
  @Input() description2: string = 'Today, 17 January 2022 was an important day for our association.';
  @Input() description3: string = 'Today, 17 January 2022 was an important day for our association.';
  @Input() memberImage :string = "https://images.pexels.com/photos/4177563/pexels-photo-4177563.jpeg?auto=compress&cs=tinysrgb&w=600";
  @Input() memberImage2 :string = "https://images.pexels.com/photos/3732652/pexels-photo-3732652.jpeg?auto=compress&cs=tinysrgb&w=600";
  @Input() memberImage3 :string = "https://images.pexels.com/photos/13947143/pexels-photo-13947143.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  
  
  
  selectionCard(){
    const selectedCard: HTMLElement = document.getElementsByTagName('div')[0];
    selectedCard.style.border = '0.5px solid #9A62A6';
  }
}

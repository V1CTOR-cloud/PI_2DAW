import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.css']
})
export class ActivitiesCardComponent {
  @Input() emoji: string ='🎉';
  @Input() title: string = 'Valencian corts proposals';
  @Input() description: string = 'Today, 17 January 2022 was an important day for our association.';
  
  selectionCard(){
    const selectedCard: HTMLElement = document.getElementsByTagName('div')[0];
    selectedCard.style.border = '0.5px solid #9A62A6';
  }
}

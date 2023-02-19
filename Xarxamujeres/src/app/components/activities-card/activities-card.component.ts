import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.css']
})
export class ActivitiesCardComponent {
  
  @Input() type: string = '';
  @Input() emoji: string ='🎉';
  @Input() title: string = 'Valencian corts proposals';
  @Input() description: string = 'Today, 17 January 2022 was an important day for our association.';
  
  @Input() memberImage :string = "https://images.pexels.com/photos/4177563/pexels-photo-4177563.jpeg?auto=compress&cs=tinysrgb&w=600";
  
  
}

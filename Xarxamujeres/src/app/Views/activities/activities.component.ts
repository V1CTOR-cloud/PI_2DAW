import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  public moduleTitle: string = 'Activities 🎯';
  public cardActivity : string = 'cardActivity';
  public activitiesLength: number = 54;

  public emojiCard:string = '🎉';

  public col1:string = 'Events';
  public col2:string = 'Individual Session';
  public col3:string = 'Workshops';
}

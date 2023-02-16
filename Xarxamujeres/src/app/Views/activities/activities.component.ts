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

  public searchInput: string = 'searchInput';

  public emojiCard:string = '🎉';
  
}

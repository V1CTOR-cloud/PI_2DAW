import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardActivitiesComponent } from './graphic-card-activities.component';

describe('GraphicCardActivitiesComponent', () => {
  let component: GraphicCardActivitiesComponent;
  let fixture: ComponentFixture<GraphicCardActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicCardActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

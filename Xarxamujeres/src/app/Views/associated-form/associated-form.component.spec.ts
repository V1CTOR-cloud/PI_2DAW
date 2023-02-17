import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedFormComponent } from './associated-form.component';

describe('AssociatedFormComponent', () => {
  let component: AssociatedFormComponent;
  let fixture: ComponentFixture<AssociatedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

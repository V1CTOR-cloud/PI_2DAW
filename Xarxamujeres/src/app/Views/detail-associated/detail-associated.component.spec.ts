import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAssociatedComponent } from './detail-associated.component';

describe('DetailAssociatedComponent', () => {
  let component: DetailAssociatedComponent;
  let fixture: ComponentFixture<DetailAssociatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAssociatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAssociatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupconfirmComponent } from './signupconfirm.component';

describe('SignupconfirmComponent', () => {
  let component: SignupconfirmComponent;
  let fixture: ComponentFixture<SignupconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupconfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

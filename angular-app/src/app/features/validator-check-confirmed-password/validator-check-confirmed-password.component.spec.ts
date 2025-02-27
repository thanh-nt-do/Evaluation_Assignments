import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorCheckConfirmedPasswordComponent } from './validator-check-confirmed-password.component';

describe('ValidatorCheckConfirmedPasswordComponent', () => {
  let component: ValidatorCheckConfirmedPasswordComponent;
  let fixture: ComponentFixture<ValidatorCheckConfirmedPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidatorCheckConfirmedPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatorCheckConfirmedPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

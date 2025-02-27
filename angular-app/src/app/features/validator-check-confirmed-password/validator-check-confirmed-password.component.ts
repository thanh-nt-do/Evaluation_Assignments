import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validator-check-confirmed-password',
  templateUrl: './validator-check-confirmed-password.component.html',
  styleUrl: './validator-check-confirmed-password.component.scss'
})
export class ValidatorCheckConfirmedPasswordComponent implements OnInit {
  // registerPassword! : AbstractControl

  // constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.registerPassword = this.fb.group(
    //   {
    //     password: [''],
    //     confirmPassword: ['', Validators.comparePassword]
    //   },
    //   [Validators.required, Validators.minLength(6)]
    // )
  }
}

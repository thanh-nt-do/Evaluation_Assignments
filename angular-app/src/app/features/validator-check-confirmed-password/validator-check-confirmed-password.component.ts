import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-validator-check-confirmed-password',
  templateUrl: './validator-check-confirmed-password.component.html',
  styleUrl: './validator-check-confirmed-password.component.scss'
})
export class ValidatorCheckConfirmedPasswordComponent implements OnInit {
  registerPassword! : FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {
      validators: this.comparePassword
    };
    
    this.registerPassword = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      formOptions)
  }

  get password() {
    return this.registerPassword.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registerPassword.get('confirmPassword') as FormControl;
  }

  comparePassword(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;            // Access password value
    const confirmPassword = group.get('confirmPassword')?.value;
    console.log(password === confirmPassword)

    if (password !== confirmPassword) {
      return { comparePassword: 'Passwords do not match!' };
    }

    return null
  }
}

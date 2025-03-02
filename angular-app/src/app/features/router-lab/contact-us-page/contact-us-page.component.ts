import { Component } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControlOptions, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss'
})
export class ContactUsPageComponent {
  sendMes! : FormGroup
  submittedMessage!: { name: string; message: string }
  status : boolean = false;
  
  constructor(private fb: FormBuilder, private userService : UserService) {}
  
  ngOnInit(): void {
    const formOptions: AbstractControlOptions = {
    };
    
    this.sendMes = this.fb.group(
      {
        name: ['', Validators.required],
        message: ['', [Validators.required, Validators.minLength(10)]]
      },
    formOptions)
    
    this.userService.contactMes.subscribe(
      res => { this.submittedMessage = res }
    );
    
  }

  get name() {
    return this.sendMes.get('name') as FormControl;
  }

  get message() {
    return this.sendMes.get('message') as FormControl;
  }

  onSubmit() : void {
    if (this.sendMes.valid) {
      this.userService.sendContactMes( this.name.value, this.message.value);
      this.sendMes.reset(); // Reset the form
      this.status = true;
    }
  }
}

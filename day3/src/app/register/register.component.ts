import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted:boolean=false;
  constructor(private builder: FormBuilder){}
  ngOnInit(){
    this.registerForm=this.builder.group({
      firstName: ['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  get form(){
    return this.registerForm.controls;
  }
  handleSubmit(){
    this.submitted=true;
  }
}

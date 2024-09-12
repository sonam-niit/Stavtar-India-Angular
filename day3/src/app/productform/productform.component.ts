import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styles: [
  ]
})
export class ProductformComponent {

  productForm: FormGroup;
  submitted:boolean=false;
  constructor(private builder: FormBuilder,private service:DataSharingService,
    private router:Router
  ){}
  ngOnInit(){
    this.productForm=this.builder.group({
      name: ['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
    })
  }
  get form(){
    return this.productForm.controls;
  }
  handleSubmit(){
    this.submitted=true;
    if(this.productForm.valid){
      console.log(this.productForm.value);
      this.service.addProduct(this.productForm.value);
      alert('Product Added Successfully');
      this.router.navigate(['list']);
    }
  }
}

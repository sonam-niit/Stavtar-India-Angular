import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
    `.active{color:red}`,
    `.highlight{background:black;color:white}`
  ]
})
export class DataBindingComponent {

  name:string="Sonam Soni";
  imgUrl:string="https://media.istockphoto.com/id/158424399/vector/black-pen.jpg?s=612x612&w=0&k=20&c=txlgyByhPSyh7LlC3_1eQtxzEWAYLoZCEdguTmTvuCI=";
  height:number=200;

  onClick():void{
    alert('Welcome to Angular Databinding');
  }
   message:string="Welcome";
   isActive:boolean=false;
   isHighlight:boolean=true;
   trigger(){
    this.isActive=!this.isActive;
    this.isHighlight=!this.isHighlight;
   }
}

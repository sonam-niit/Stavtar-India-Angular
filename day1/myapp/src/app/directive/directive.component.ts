import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  students=[
    {id:1,name:'alex',email:'alex@gmail.com',country:'US',per:67},
    {id:2,name:'Bob',email:'bob@gmail.com',country:'UK',per:34},
    {id:3,name:'John',email:'john@gmail.com',country:'UK',per:89},
    {id:4,name:'Sonam',email:'sonm@gmail.com',country:'India',per:23},
  ]
  flag:boolean=false;
  change(){
    this.flag=!this.flag;
  }
  input:number=1;
}

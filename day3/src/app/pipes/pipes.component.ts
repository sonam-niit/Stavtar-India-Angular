import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent {

  name:string="Sonam Soni";
  pi:number=3.14156789;
  salary: number=98765.3456;
  today:Date= new Date();
  obj={id:1,name:'sonam',email:'sonam@gmail.com'}
  message:string="My Name is Sonam Soni";
}

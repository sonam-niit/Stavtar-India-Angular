import { Component } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {

  todos: Todo[] = []; //initialized with empty array
  task:string='';
  saveTask(){
    const id:number=Math.floor(Math.random()*1000)
    this.todos.push(new Todo(id,this.task,'pending'));
    alert(this.task +" added");
    this.task=''
  }
  onupdate(id:number){
    this.todos.forEach(todo=>{
      if(todo.id==id){
        todo.status='completed'
      }
    })
  }
  ondelete(id:number){

  }
}

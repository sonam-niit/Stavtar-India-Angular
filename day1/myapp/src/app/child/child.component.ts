import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ],
})
export class ChildComponent {
  @Input() data:any

  ngOnChanges(chnages:SimpleChanges){
    console.log('Changes',chnages);
  }

  ngOnInit(){
    console.log("Child Compo initialized");
  }
  hello(){
    alert("Hello World")
  }
}

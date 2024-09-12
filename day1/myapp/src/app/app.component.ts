import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  @ViewChild('inputData')
  inputEl! : ElementRef;

  @ViewChild(ChildComponent)
  child! : ChildComponent;

  ngOnInit(){
    console.log("App Compo initialized");
  }
  // ngAfterViewInit(){
  //   // this.inputEl.nativeElement.focus();
  //   this.child.hello();
  // }
}

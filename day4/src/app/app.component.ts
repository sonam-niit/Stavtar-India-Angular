import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SampleComponent } from './sample/sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[SampleComponent]
})
export class AppComponent {
  title = 'day4';

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/users/1')
    .subscribe(resp=>console.log(resp))
  }
}

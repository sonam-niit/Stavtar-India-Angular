import { Component } from '@angular/core';
import { SubscriptionService } from './subscription.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from './test.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'day3';
  

  loggedIn:boolean=false;
  constructor(private authService:AuthService,private router:Router){}

  ngDoCheck(){
    this.loggedIn=this.authService.getLoggedIn();
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['login'])
    // this.unsavedChanges=false;
  }
  // constructor(private service:SubscriptionService){}
  // ngOnInit(){
  //   this.service.changeMessage('Welcome From App Component')
  // }
}

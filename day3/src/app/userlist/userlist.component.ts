import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styles: [
  ]
})
export class UserlistComponent {

  users:any[]=[];
  constructor(private uservice: UserService){}

  ngOnInit(){
   this.uservice.getAllUsers()
   .subscribe(resp=>this.users=resp);
  }
}

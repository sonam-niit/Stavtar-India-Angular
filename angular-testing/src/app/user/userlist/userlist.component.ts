import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  users:User[]=[];
  constructor(private service:UserService){}
  ngOnInit(){
    this.service.getAllUsers()
    .subscribe(resp=>this.users=resp);
  }
  ondelete(id:string){
    alert('triggered'+id)
    this.service.deleteById(id).subscribe(resp=>console.log(resp));
    this.users=this.users.filter(item=>item.id!=id)
  }
}

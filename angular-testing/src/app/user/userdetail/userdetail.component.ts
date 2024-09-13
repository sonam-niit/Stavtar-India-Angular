import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent {

  user:User;
  constructor(private service:UserService,private route:ActivatedRoute){}
  ngOnInit(){
    const id=this.route.snapshot.paramMap.get('id') ;
    this.service.getById(id ).subscribe(resp=>this.user=resp);
  }
}

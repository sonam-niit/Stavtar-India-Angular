import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styles: [
  ]
})
export class ProductlistComponent {

  products:any[]=[];
  constructor(private service: DataSharingService,
    private router:Router
  ){}
  ngOnInit(){
    this.products=this.service.getAllProducts();
  }
  details(id:number){
    this.router.navigate([`/details/${id}`])
  }
}

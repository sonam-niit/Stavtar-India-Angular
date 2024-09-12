import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styles: [
  ]
})
export class ProductdetailsComponent {

  product:any;
  constructor(private service:DataSharingService,
    private route:ActivatedRoute
  ){}
  ngOnInit(){
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.product= this.service.getById(id);
  }
}

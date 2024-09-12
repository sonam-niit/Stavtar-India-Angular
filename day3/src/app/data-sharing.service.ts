import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  products:any[]=[];
  
  addProduct(product:any){
    product.id= Date.now();
    this.products.push(product);
  }
  getAllProducts(){
    return this.products;
  }
  getById(id:number){
    return this.products.find(item=>item.id==id);
  }

}

import { Injectable } from '@angular/core';
import { data } from '../MockProduct';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selected: Product;
  products = data;



  constructor() { }

  getProducts(){
    return this.products;
  }

  removeProduct(id){
    return this.products = this.products.filter(
      product => product.id != id
    )
  }

  detailProduct(product){
    return this.selected = product;
  }

  addProduct(product){

    let fakeObj = {id: 13, ...product};

    //  let maxId = 0;
    // this.products.forEach(function(item){
    //   if(item.id >= maxId){
    //     maxId = item.id;
    //   }
    // }),
  
    this.products.push(fakeObj);
    // console.log(this.products);

  }

}

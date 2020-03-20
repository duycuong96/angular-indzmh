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

    let fakeObj = {id: 11, ...product};
    this.products.push(fakeObj);
    // console.log(this.products);
  }

}

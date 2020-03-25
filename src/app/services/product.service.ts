import { Injectable } from '@angular/core';
import { data } from '../MockProduct';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selected: Product;
  products = 'https://5dcf7e2d75f9360014c268b9.mockapi.io/product';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.products);
  }


  // getProducts(){
  //   return this.products;
  // }

  // removeProduct(id){
  //   return this.products = this.products.filter(
  //     product => product.id != id
  //   )
  // }

  // detailProduct(product){
  //   return this.selected = product;
  // }

  // addProduct(product){

  //   let fakeObj = {id: 13, ...product};

  //   //  let maxId = 0;
  //   // this.products.forEach(function(item){
  //   //   if(item.id >= maxId){
  //   //     maxId = item.id;
  //   //   }
  //   // }),
  
  //   this.products.push(fakeObj);
  //   // console.log(this.products);

  // }

  // getProduct(id: Number){
  //   let product = this.products.find(product => product.id === id);
  //   if(product){
  //     return product;
  //   } else {
  //     throw Error('Not found');
  //   }
  // }

}

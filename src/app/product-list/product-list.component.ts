import { Component, OnInit } from '@angular/core';
import { Product} from '../Product';
import { ProductService } from "../services/product.service";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private productServices: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    return this.products = this.productServices.getProducts();
  }

  removeItem(id){
    this.products = this.products.filter(
      product => product.id != id
    )
  }
detailProduct(product){
    return this.detail =product;
  }



}

import { Component, OnInit } from '@angular/core';
import { Product } from '../classes.js';
import { ProductsService } from '../products.service.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Products';
  products: Product[] = [];

  constructor(private productService: ProductsService, private http: HttpClient) { }

  ngOnInit() {
    //this.products=this.productService.getProducts();
    this.http.get<Product[]>("http://localhost:3000/products")
            .subscribe(data => this.products = data);
  }

}

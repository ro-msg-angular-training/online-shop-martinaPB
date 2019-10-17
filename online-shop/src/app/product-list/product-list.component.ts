import { Component, OnInit } from '@angular/core';
import { Product } from '../classes.js';
import { ProductsService } from '../products.service.js';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Products';
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}

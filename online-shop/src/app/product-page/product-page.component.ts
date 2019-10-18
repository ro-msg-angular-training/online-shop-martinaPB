import { Component, OnInit } from '@angular/core';
import mockdata from '../../assets/products.json';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartItem, Product } from '../classes.js';
import { CartItemsService } from '../cart-items.service';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  title = "Product: ";
  product: Product;
  productss: Product[] = [];
  item: CartItem;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cartItem: CartItemsService,
    private products: ProductsService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //this.product = Object.values(mockdata)[id];

    this.http.get<Product>("http://localhost:3000/products/" + id)
            .subscribe(data => this.product = data);
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(): void{
    debugger
    const id = this.product.id;
    this.item = Object.values(mockdata)[id];
    this.cartItem.addCartItem(this.item);
  }
  deleteProduct(): void{
    debugger
    const id = this.product.id;
    //this.product = Object.values(mockdata)[id];
    //this.products.deleteProduct(this.product);
    this.http.delete<Product[]>("http://localhost:3000/products/" + id)
            .subscribe(data => this.productss = data);
  }
}

import { Component, OnInit } from '@angular/core';
import mockdata from '../../assets/products.json';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartItem, Product } from '../classes.js';
import { CartItemsService } from '../cart-items.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  title = "Product: ";
  product: Product;
  item: CartItem;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cartItem: CartItemsService,
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.product = Object.values(mockdata)[id];
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
}

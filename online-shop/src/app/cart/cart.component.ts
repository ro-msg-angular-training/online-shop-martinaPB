import { Component, OnInit } from '@angular/core';
import { CartItem } from '../classes.js';
import { CartItemsService } from '../cart-items.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title = "Shopping Cart"
  item: CartItem[] = [];
  constructor(private cartItem: CartItemsService) { }

  ngOnInit() {
    this.item = this.cartItem.getItems();
  }

}

import { Component, OnInit } from '@angular/core';
import { CartItem } from '../classes.js';
import { CartItemsService } from '../cart-items.service';
import { OrdersService } from '../orders.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title = "Shopping Cart"
  item: CartItem[] = [];
  orders: CartItem[] = [];
  constructor( private cartItem: CartItemsService,
               private order: OrdersService
  ) { }

  ngOnInit() {
    this.item = this.cartItem.getItems();
  }

  checkout() {
    debugger
    this.order.placeOrder(this.item);
    //this.orders = this.order.getOrders();
  }
}

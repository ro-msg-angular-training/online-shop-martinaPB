import { Injectable } from '@angular/core';
import { CartItem } from './classes';
import mockdata from '../assets/products.json';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  item: CartItem[] = [];
  constructor() { }

  getOrders(): CartItem[] {
    return this.item;
  }
  placeOrder(order: CartItem[]) {
    debugger
    for(var i = 0; i < order.length; i++) {
      this.item.push(order[i]);
    }
  }
}
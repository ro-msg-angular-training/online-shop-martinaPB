import { Injectable } from '@angular/core';
import { CartItem } from './classes';
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
    this.item = order;
  }
}
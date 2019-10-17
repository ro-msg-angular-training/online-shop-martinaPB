import { Injectable } from '@angular/core';
import mockdata from '../assets/products.json';
import { Product } from './classes';
import { CartItem } from './classes';
@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  products: Product[] = Object.values(mockdata);
  item: CartItem[] = [];
  constructor() { }

  getItems(): CartItem[] {
    return this.item;
  }
  addCartItem(item: CartItem) {
    this.item.push(item);
  }
}

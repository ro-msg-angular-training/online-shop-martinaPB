import { Injectable } from '@angular/core';
import mockdata from '../assets/products.json';
import { Product } from './classes';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = Object.values(mockdata);
  constructor() { }
  getProducts(): Product[]{
    return this.products;
  }
}

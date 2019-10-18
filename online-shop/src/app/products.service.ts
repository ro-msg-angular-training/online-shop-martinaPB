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
  deleteProduct() {
    /*this.products.pop();
    const url = '${this.heroesUrl}/${id}'; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
*/
  }
}

import { Injectable } from '@angular/core';
import mockdata from '../assets/products.json';
import { Product } from './classes';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = Object.values(mockdata);
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  getProducts(): Product[]{
    return this.products;
  }
  getProduct(id: number) {
    return  this.http.get<Product>("http://localhost:3000/products/" + id);  
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

import { Injectable } from '@angular/core';
import mockdata from '../assets/products.json';
import { Product } from './classes';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products");
  }
  getProduct(id: number): Observable<Product> {
    debugger
    return  this.http.get<any>("http://localhost:3000/products/" + id);  

  }


  addProduct(product: Product): Observable<Product> {
  //return this.httpClient.post<Product>(`${PRODUCTS_URL}`, product).pipe(retry(1));
    return this.http.post<Product>("http://localhost:3000/products", product).pipe(retry(1));  
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

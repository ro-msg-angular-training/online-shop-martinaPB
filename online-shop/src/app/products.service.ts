import { Injectable } from '@angular/core';
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
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<any>("http://localhost:3000/products/" + id);
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:3000/products", product).pipe(retry(1));
  }
  editProduct(product: Product): Observable<void> {
    const id = product.id;
    return this.http.put<void>("http://localhost:3000/products/" + id, product).pipe(retry(1));
  }
  deleteProduct(id: number) {
    return this.http.delete<Product[]>("http://localhost:3000/products/" + id).pipe(retry(1));
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../classes';
import { Observable } from 'rxjs';
import * as ProductListActions from '../store/actions/product-list.actions';
import * as fromApp from '../store/reducers/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  title = "Add new product";
  product: Product;
  constructor(
    private products: ProductsService,
    private http: HttpClient,
    private location: Location,
    private store: Store<fromApp.IAppState>
  ) { }

  ngOnInit() {
  }
  onClickSubmit(data: Product){
    debugger;

    const body = {
      "id": null,
      "name": data.name,
      "category": data.category,
      "price": data.price,
      "image": data.image,
      "description": data.description
    };
    //return this.http.post<Product>("http://localhost:3000/products", body).subscribe();    
    this.store.dispatch(new ProductListActions.AddProduct(body));
  }

  goBack(): void {
    this.location.back();
  }
}

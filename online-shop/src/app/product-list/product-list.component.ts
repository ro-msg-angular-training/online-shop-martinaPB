import { Component, OnInit } from '@angular/core';
import { Product, User } from '../classes.js';
import { ProductsService } from '../products.service.js';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service.js';
// import * as fromProducts from '../store/reducers/product-list.reducer';
import * as fromApp from '../store/reducers/app.reducer';

import { Store } from '@ngrx/store';
import { GetProducts } from '../store/actions/product-list.actions.js';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Products';
  products: Product[] = [];
  user: User;
  constructor(private productService: ProductsService, private http: HttpClient, private loginService: LoginService, private store: Store<fromApp.IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetProducts());
    this.store.select(state => state.productList).subscribe(response => {
      if(response) {
      this.products = response.products;
    }
    });
    /*this.productService.getProducts().subscribe(data => {
      if(data) {
        this.products = data;
      }   
    });*/
    //let user: User =  null;
    debugger
    this.user = this.loginService.getCurrentUser();
    if (this.user) {
      console.log(this.user);
    }

    if (this.user) {
      debugger
      console.log(this.user);
    }
    //this.http.get<Product[]>("http://localhost:3000/products")
      //      
  }

}

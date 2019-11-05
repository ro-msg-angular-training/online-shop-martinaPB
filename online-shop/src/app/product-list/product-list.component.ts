import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product, User } from '../classes.js';
import { ProductsService } from '../products.service.js';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service.js';
import * as fromApp from '../store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import { GetProducts } from '../store/actions/product-list.actions.js';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  title = 'Products';
  products: Product[] = [];
  user: User;
  subscriptions: Subscription[] = [];
  constructor(private productService: ProductsService, private http: HttpClient, private loginService: LoginService, private store: Store<fromApp.IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetProducts());
    this.subscriptions.push(this.store.select(state => state.productList).subscribe(response => {
      if (response) {
        this.products = response.products;
      }
    }));

    this.user = this.loginService.getCurrentUser();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });
  }
}

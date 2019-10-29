import { Component, OnInit } from '@angular/core';
import mockdata from '../../assets/products.json';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartItem, Product, User, Role } from '../classes.js';
import { CartItemsService } from '../cart-items.service';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service.js';
import { GetDetails } from '../store/actions/prod-detail.actions.js';
import { Subscription, Observable, of } from 'rxjs';
import * as ProductListActions from '../store/actions/product-list.actions';
import * as ProdDetailActions from '../store/actions/prod-detail.actions';
import { IState } from '../store/reducers/prod-detail.reducer.js';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/reducers/app.reducer';
import { ProductListComponent } from '../product-list/product-list.component.js';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  title = "Product: ";
  product$: Observable<Product> = undefined;
  productss: Product[] = [];
  item: CartItem;
  private admin = false;
  private customer = false;
  productService: any;
  private subscription: Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cartItem: CartItemsService,
    private products: ProductsService,
    private http: HttpClient,
    private login: LoginService,
    private store: Store<fromApp.IAppState>
  ) { }

  /*ngOnInit() {
     this.products.getProduct();
     /*const user = this.login.getCurrentUser();
      const foundAdminRole = user.roles.find(role => role === Role.ADMIN);
      const foundCustomerRole = user.roles.find(role => role === Role.CUSTOMER);
      if (foundAdminRole) {
       this.admin = true;
      }
      if (foundCustomerRole) {
        this.customer = true;
      }
    });*/

  //}
  ngOnInit() {
    debugger
    //const id = +this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(params => this.store.dispatch(new ProductListActions.GetDetails(Number(params.id))));
    this.store.select(state => state.productList).subscribe(response => {
      if (response) {
        console.log(response);
        this.product$ = of(response.productDetail);
      }
    }
    );
    //this.http.get<Product>("http://localhost:3000/products/" + id)
    //       .subscribe(data => this.product = data);
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(): void {
    debugger
    const id = +this.route.snapshot.paramMap.get('id');
    //const id = this.product$.id;
    this.item = Object.values(mockdata)[id];
    this.cartItem.addCartItem(this.item);
  }
  deleteProduct(): void {
    debugger
    const id = +this.route.snapshot.paramMap.get('id');
    //const id = this.product$.id;
    this.product$ = of(Object.values(mockdata)[id]);
    //this.products.deleteProduct(this.product$);
    this.http.delete<Product[]>("http://localhost:3000/products/" + id)
          .subscribe(data => this.productss = data);
  }
}

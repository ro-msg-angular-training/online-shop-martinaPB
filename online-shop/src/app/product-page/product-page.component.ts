import { Component, OnInit } from '@angular/core';
import mockdata from '../../assets/products.json';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartItem, Product, User, Role } from '../classes.js';
import { CartItemsService } from '../cart-items.service';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service.js';
import { Subscription, Observable, of } from 'rxjs';
import * as ProductListActions from '../store/actions/product-list.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/reducers/app.reducer';

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
  subscriptions: Subscription[] = [];
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
    this.subscriptions.push(this.route.params.subscribe(params => this.store.dispatch(new ProductListActions.GetDetails(Number(params.id)))));
    this.subscriptions.push(this.store.select(state => state.productList).subscribe(response => {
      if (response) {
        this.product$ = of(response.productDetail);
      }
    }
    ));
  }
  goBack(): void {
    this.location.back();
  }

  addToCart(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = Object.values(mockdata)[id];
    this.cartItem.addCartItem(this.item);
  }
  deleteProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.product$ = of(Object.values(mockdata)[id]);
    this.store.dispatch(new ProductListActions.DeleteProduct(id));
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });

  }
}

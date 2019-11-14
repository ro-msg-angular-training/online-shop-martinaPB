import { Component, OnInit } from '@angular/core';
import { CartItem } from '../classes.js';
import { CartItemsService } from '../cart-items.service';
import { OrdersService } from '../orders.service';
//import { GetCart } from '../store/actions/product-list.actions.js';
import * as fromApp from '../store/reducers/app.reducer';
import * as ProductListActions from '../store/actions/product-list.actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title = "Shopping Cart"
  item: CartItem[];
  orders: CartItem[] = [];
  private subscription: Subscription = new Subscription();
  constructor(private cartItem: CartItemsService,
    private order: OrdersService,
    private store: Store<fromApp.IAppState>
  ) { }

  ngOnInit() {
    /*this.store.dispatch(new ProductListActions.GetCart());
    this.subscription.add(this.store.select(state => state.productList.items).subscribe(data => {
      this.item = data;
    }));*/
    this.item = this.cartItem.getItems();
  }

  checkout() {
    this.order.placeOrder(this.item);
  }
}

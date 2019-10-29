import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as ProductListActions from '../actions/product-list.actions';
import * as ProdDetailActions from '../actions/prod-detail.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { ProductsService } from 'src/app/products.service';
import { OrdersService } from 'src/app/orders.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes';
@Injectable()
export class ProductListEffects {
    constructor(private actions$: Actions,
        private productService: ProductsService,
        private router: Router,
        private ordersService: OrdersService,
    ) { }

    @Effect()
    getProducts = this.actions$.pipe(
        ofType(ProductListActions.GET_PRODUCTS),
        switchMap(() => this.productService.getProducts()),
        map(data => new ProductListActions.GetProductsSuccess({ products: data }))
    );
    @Effect()
    getProduct = this.actions$.pipe(
        ofType(ProductListActions.GET_DETAILS),
        switchMap((data: ProductListActions.GetDetails) => this.productService.getProduct(data.payload)),
        map((responseData) =>
            new ProductListActions.GetDetailsSuccess(responseData))
    );
     @Effect()
     addProduct = this.actions$.pipe(
         ofType(ProductListActions.ADD_PRODUCT),
         switchMap((data: ProductListActions.AddProduct) => this.productService.addProduct(data.payload)),
         map(responseData => new ProductListActions.AddProductSuccess(responseData)),
         tap(() => this.router.navigate(['/add-product'])));
    @Effect()
    getCart = this.actions$.pipe(
        ofType(ProductListActions.GET_CART),
        switchMap(() => this.ordersService.getOrders()),
        map(data => new ProductListActions.GetCartSuccess({ items: [data] }))
    );

}
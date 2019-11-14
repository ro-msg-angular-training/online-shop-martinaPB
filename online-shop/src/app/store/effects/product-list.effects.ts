import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as ProductListActions from '../actions/product-list.actions';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { ProductsService } from 'src/app/products.service';
//import { OrdersService } from 'src/app/orders.service';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
@Injectable()
export class ProductListEffects {
    constructor(private actions$: Actions,
        private productService: ProductsService,
        private router: Router,
        //private ordersService: OrdersService
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
        tap(() => this.router.navigate(['/products'])));
    @Effect()
    editProduct = this.actions$.pipe(
         ofType(ProductListActions.EDIT_PRODUCT),
         switchMap((data: ProductListActions.EditProduct) => {
            return this.productService.editProduct(data.payload.product);
          }),
         map(() => new ProductListActions.EditProductSuccess()),
         tap(() => this.router.navigate(['/products']))
         );      
    @Effect()
    deleteProduct = this.actions$.pipe(
         ofType(ProductListActions.DELETE_PRODUCT),
         switchMap((data: ProductListActions.DeleteProduct) => {
            return this.productService.deleteProduct(data.payload)
        .pipe(map(() => new ProductListActions.DeleteProductSuccess()),
          tap(() => this.router.navigate(['/products'])));
    })
         ); 

    /*@Effect()
    getCart = this.actions$.pipe(
        ofType(ProductListActions.GET_CART),
        switchMap(() => this.ordersService.getOrders()),
        map(data => new ProductListActions.GetCartSuccess({ items: [data] }))
    );*/

}
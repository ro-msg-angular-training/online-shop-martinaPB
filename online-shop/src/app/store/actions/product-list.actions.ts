import { Action } from '@ngrx/store';
import { Product, CartItem, User } from 'src/app/classes';

export const GET_PRODUCTS = 'GetProducts';
export const GET_PRODUCTS_SUCCESS = 'GetProductsSuccess';
export const GET_DETAILS = 'GetDetails';
export const GET_DETAILS_SUCCESS = 'GetDetailsSuccess';
export const ADD_PRODUCT = 'AddProduct';
export const ADD_PRODUCT_SUCCESS = 'AddProductSuccess';
export const EDIT_PRODUCT = 'EditProduct';
export const EDIT_PRODUCT_SUCCESS = 'EditProductSuccess';
export const DELETE_PRODUCT = 'DeleteProduct';
export const DELETE_PRODUCT_SUCCESS = 'DeleteProductSuccess';
//export const GET_CART = 'GetCart';
//export const GET_CART_SUCCESS = 'GetCartSuccess';

export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
}
export class GetProductsSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;
  constructor(public payload: { products: Product[] }) { }
}
export class GetDetails implements Action {
  readonly type = GET_DETAILS;
  constructor(public payload: number) { }
}
export class GetDetailsSuccess implements Action {
  readonly type = GET_DETAILS_SUCCESS;
  constructor(public payload: Product) { }
}
export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: Product) { }
}
export class AddProductSuccess implements Action {
  readonly type = ADD_PRODUCT_SUCCESS;
  constructor(public payload: Product) { }
}
export class EditProduct implements Action {
  readonly type = EDIT_PRODUCT;
  constructor(public payload: { id: number, product: Product }) { }
}
export class EditProductSuccess implements Action {
  readonly type = EDIT_PRODUCT_SUCCESS;
}
export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public payload: number) { }
}
export class DeleteProductSuccess implements Action {
  readonly type = DELETE_PRODUCT_SUCCESS;
}
/*export class GetCart implements Action {
  readonly type = GET_CART;
}
export class GetCartSuccess implements Action {
  readonly type = GET_CART_SUCCESS;
  constructor(public payload: { items: CartItem[] }) { }
}*/

export type ProductActions = GetProducts | GetProductsSuccess | GetDetailsSuccess | //GetCart | GetCartSuccess | 
AddProduct | AddProductSuccess | EditProduct | EditProductSuccess |
  DeleteProduct | DeleteProductSuccess;
import { Action, ScannedActionsSubject } from '@ngrx/store';
import * as ProductListActions from '../actions/product-list.actions';
import { ProductListComponent } from 'src/app/product-list/product-list.component';
import { Product, CartItem } from 'src/app/classes';
export interface IState {
  products: Product[];
  productDetail: Product;
  items: CartItem[];
}
const initialState: IState = {
  products: [],
  productDetail: undefined,
  items: []
};

export function ProductListReducer(state: IState = initialState, action: ProductListActions.ProductActions): IState {
  switch (action.type) {
    case ProductListActions.GET_PRODUCTS: {
      return {
        ...state
      };
    }
    case ProductListActions.GET_PRODUCTS_SUCCESS: {
      debugger
      return {
        ...state,
        products: action.payload.products
      };
    }
    case ProductListActions.GET_DETAILS_SUCCESS: {
      return {
        ...state,
        productDetail: action.payload
      };
    }
    case ProductListActions.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case ProductListActions.GET_CART: {
      return {
        ...state
      };
    }
    case ProductListActions.GET_CART_SUCCESS: {
      debugger
      return {
        ...state,
        products: action.payload.items
      };
    }
  }
}
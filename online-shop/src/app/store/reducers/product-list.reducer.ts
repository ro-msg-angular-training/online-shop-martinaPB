import * as ProductListActions from '../actions/product-list.actions';
import { Product, CartItem, User } from 'src/app/classes';
export interface IState {
  user: User;
  loading: boolean;
  fetchedUser: boolean;
  loginError: string;
  loginErrorStatus: number;

  products: Product[];
  productDetail: Product;
  items: CartItem[];
}
const initialState: IState = {
  user: null,
  loading: false,
  fetchedUser: false,
  loginError: null,
  loginErrorStatus: null,

  products: [],
  productDetail: undefined,
  items: []
};

export function ProductListReducer(state: IState = initialState, action: ProductListActions.ProductActions): IState {
  switch (action.type) {
    case ProductListActions.GET_PRODUCTS:
      return {
        ...state
      };
    case ProductListActions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products
      };
    case ProductListActions.GET_DETAILS_SUCCESS:
      return {
        ...state,
        productDetail: action.payload
      };
    case ProductListActions.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case ProductListActions.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case ProductListActions.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case ProductListActions.GET_CART:
      return {
        ...state
      };
    case ProductListActions.GET_CART_SUCCESS:
      return {
        ...state,
        products: action.payload.items
      };
  }
}
import { Action, ScannedActionsSubject } from '@ngrx/store';
import * as ProdDetailActions from '../actions/prod-detail.actions';
import { ProductListComponent } from 'src/app/product-list/product-list.component';
import { Product } from 'src/app/classes';
export interface IState{
    productDetail: Product;
}
const initialState: IState = {
  productDetail: null
};

export function ProdDetailReducer(state:IState = initialState, action: ProdDetailActions.ProductActions): IState {
    switch(action.type) {
        case ProdDetailActions.GET_DETAILS_SUCCESS: {
          return {
            ...state,
            productDetail: action.payload
          };
        }
    }
}
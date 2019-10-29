import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import * as fromProducts from './product-list.reducer';
import * as fromProductDetail from './prod-detail.reducer';

export interface IAppState {
    productList: fromProducts.IState;
    //productDetail: fromProductDetail.IState;
}
export const appReducer: ActionReducerMap<IAppState> = {
    productList: fromProducts.ProductListReducer
    //productDetail: fromProductDetail.ProdDetailReducer
};
import { ActionReducerMap } from '@ngrx/store';
import * as fromProducts from './product-list.reducer';

export interface IAppState {
    productList: fromProducts.IState;
}
export const appReducer: ActionReducerMap<IAppState> = {
    productList: fromProducts.ProductListReducer
};
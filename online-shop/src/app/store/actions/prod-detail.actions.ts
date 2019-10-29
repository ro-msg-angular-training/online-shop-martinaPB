import { Action } from '@ngrx/store';
import { Product } from 'src/app/classes';

export const GET_DETAILS = 'GetDetails';
export const GET_DETAILS_SUCCESS = 'GetDetailsSuccess';

  export class GetDetails implements Action {
    readonly type = GET_DETAILS;
    constructor(public payload: number ) { }
  }
  export class GetDetailsSuccess implements Action {
    readonly type = GET_DETAILS_SUCCESS;
    constructor(public payload: Product ) { }
  }
export type ProductActions = GetDetails | GetDetailsSuccess;
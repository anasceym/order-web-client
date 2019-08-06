import { createAction } from '@ngrx/store'

export const loadOrders = createAction(
  '[Order Page] Load Orders'
);

export const ordersLoadSuccess = createAction(
  '[Order API] Orders Loaded Success'
);

import { createAction, props } from '@ngrx/store'

import { Order } from './order.reducer'

export const loadOrders = createAction('[Order Page] Load Orders')

export const ordersLoadSuccess = createAction(
  '[Order API] Orders Loaded Success',
  props<{
    orders: Order[]
  }>()
)

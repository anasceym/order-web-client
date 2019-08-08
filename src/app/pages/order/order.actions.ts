import { createAction, props } from '@ngrx/store'

import { CreateOrderDto } from './order.dto'
import { Order } from './order.reducer'

export const loadOrders = createAction('[Order Page] Load Orders')

export const ordersLoadSuccess = createAction(
  '[Order API] Orders Loaded Success',
  props<{
    orders: Order[]
  }>()
)

export const createOrder = createAction(
  '[Order API] Create order',
  props<{
    order: CreateOrderDto
  }>()
)

export const appendOrder = createAction(
  '[Order API] Append order',
  props<{
    order: Order
  }>()
)

export const viewOrder = createAction(
  '[Order UI] View order',
  props<{
    id: string
  }>()
)

export const cancelViewOrder = createAction(
  '[Order UI] Cancel view order'
)

import { Action, createReducer, on } from '@ngrx/store'

import { appendOrder, cancelViewOrder, ordersLoadSuccess, viewOrder } from './order.actions'

export interface Order {
  id: string
  name: string
}

export interface State {
  orders: Order[],
  viewingOrderId?: string
}

const initialState: State = {
  orders: []
}

export const orderReducer = createReducer(
  initialState,
  on(ordersLoadSuccess, (state, { orders }) => {
    return {
      ...state,
      orders
    }
  }),
  on(appendOrder, (state, { order }) => {
    return {
      ...state,
      orders: [
        ...state.orders,
        order
      ]
    }
  }),
  on(viewOrder, (state, { id }) => {
    return {
      ...state,
      viewingOrderId: id
    }
  }),
  on(cancelViewOrder, (state) => {
    return {
      ...state,
      viewingOrderId: null
    }
  })
)

export function reducer(state: State | undefined, action: Action) {
  return orderReducer(state, action)
}

import { Action, createReducer, on } from '@ngrx/store'

import { ordersLoadSuccess } from './order.actions'

export interface Order {
  id: string
  name: string
}

export interface State {
  orders: Order[]
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
  })
)

export function reducer(state: State | undefined, action: Action) {
  return orderReducer(state, action)
}

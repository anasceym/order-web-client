import { ActionReducerMap, MetaReducer } from '@ngrx/store'

import { environment } from '../../environments/environment'
import { reducer as orderReducer, State as OrderState } from '../pages/order/order.reducer'

export interface State {
  order: OrderState
}

export const reducers: ActionReducerMap<State> = {
  order: orderReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : []

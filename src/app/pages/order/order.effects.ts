import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { exhaustMap, map, mergeMap } from 'rxjs/operators'

import { appendOrder, createOrder, loadOrders, ordersLoadSuccess } from './order.actions'
import { OrderService } from './order.service'

@Injectable()
export class OrderEffects {
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrders),
      mergeMap(() =>
        this.orderService.getOrders().pipe(
          map(orders => {
            return ordersLoadSuccess({ orders })
          })
        )
      )
    )
  )

  createOrder$ = createEffect(() => 
    this.actions$.pipe(
      ofType(createOrder),
      exhaustMap(action => {
        return this.orderService.createOrder(action.order).pipe(
          map(order => appendOrder({ order }))
        )
      }
      )
    )
  )
  
  constructor (private actions$: Actions, private orderService: OrderService) {}
}

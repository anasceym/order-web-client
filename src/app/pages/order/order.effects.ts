import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mergeMap } from 'rxjs/operators'

import { loadOrders, ordersLoadSuccess } from './order.actions'
import { OrderService } from './order.service'

@Injectable()
export class OrderEffects {

  loadOrders$ = createEffect(() => this.actions$.pipe(
    ofType(loadOrders),
    mergeMap(() => this.orderService.getOrders()
      .pipe(
        map(orders => {
          return (ordersLoadSuccess({ orders }));
        })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}
}

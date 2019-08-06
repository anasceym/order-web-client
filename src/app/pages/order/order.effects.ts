import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mergeMap } from 'rxjs/operators'

import { OrderService } from './order.service'

@Injectable()
export class OrderEffects {

  loadOrders$ = createEffect(() => this.actions$.pipe(
    ofType('[Order Page] Load Orders'),
    mergeMap(() => this.orderService.getOrders()
      .pipe(
        map(orders => {
          return ({ type: '[Order API] Orders Loaded Success', payload: orders });
        })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}
}

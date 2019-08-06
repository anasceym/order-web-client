import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Order, State as OrderState } from './order.reducer'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private nzTableData = [
    {
      id: 1,
      name: 'test'
    }
  ]

  private orders$: Observable<Order[]> = this.store.select(
    state => state.order.orders
  )

  constructor (private store: Store<{ order: OrderState }>) {}

  ngOnInit () {
    this.store.dispatch({ type: '[Order Page] Load Orders' })
    console.log('==============> ', this.orders$)
  }
}

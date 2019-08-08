import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { cancelViewOrder, createOrder, loadOrders, viewOrder } from './order.actions'
import { Order, State as OrderState } from './order.reducer'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders$: Observable<Order[]> = this.store.select(state => state.order.orders)
  isVisible = false;
  isVisibleViewModal = false;
  orderName: string
  viewingOrder: Order = {
    id: '',
    name: ''
  }

  viewingOrder$: Observable<Order> = this.store.select((state) => {
    return state.order.orders.find((order) => {
      return order.id === state.order.viewingOrderId
    })
  })

  isVisibleViewModal$: Observable<boolean> = this.viewingOrder$.pipe(
    map(order => !!order)
  )

  constructor (private store: Store<{ order: OrderState }>) {}

  ngOnInit () {
    this.store.dispatch(loadOrders())
    
    setInterval(() => {
      this.store.dispatch(loadOrders())
    }, 2000)

    this.isVisibleViewModal$.subscribe((val) => {
      this.isVisibleViewModal = val
    })

    this.viewingOrder$.subscribe((order) => {
      if (order) {
        this.viewingOrder = order
      }
    })
  }

  showModal(): void {
    this.isVisible = true;
  }

  showViewModal(orderId: string): void {
    this.store.dispatch(viewOrder({ id: orderId }))
    this.isVisibleViewModal = true;
  }

  handleOk(): void {
    this.store.dispatch(
      createOrder({ 
        order: { 
          name: this.orderName
        }
      })
    )
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  
  handleCancelViewModal(): void {
    this.store.dispatch(cancelViewOrder())
    this.isVisibleViewModal = false;
  }
}

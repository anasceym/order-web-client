import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { createOrder, loadOrders } from './order.actions'
import { Order, State as OrderState } from './order.reducer'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders$: Observable<Order[]> = this.store.select(state => state.order.orders)
  isVisible = false;
  orderName: string

  constructor (private store: Store<{ order: OrderState }>) {}

  ngOnInit () {
    this.store.dispatch(loadOrders())
    
    setInterval(() => {
      this.store.dispatch(loadOrders())
    }, 2000)
  }

  showModal(): void {
    this.isVisible = true;
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
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

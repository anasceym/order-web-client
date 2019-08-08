import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { CreateOrderDto } from './order.dto'
import { Order } from './order.reducer'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor (private http: HttpClient) {}

  getOrders () {
    return this.http.get<Order[]>('http://18.139.229.55/orders')
  }

  createOrder (order: CreateOrderDto) {
    return this.http.post<Order>('http://18.139.229.55/orders', order)
  }

  cancelOrder (orderId: string) {
    return this.http.delete<Order>(`http://18.139.229.55/orders/${orderId}`)
  }
}

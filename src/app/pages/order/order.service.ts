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
    return this.http.get<Order[]>('http://localhost:2700/orders')
  }

  createOrder (order: CreateOrderDto) {
    return this.http.post<Order>('http://localhost:2700/orders', order)
  }

  cancelOrder (orderId: string) {
    return this.http.delete<Order>(`http://localhost:2700/orders/${orderId}`)
  }
}

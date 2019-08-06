import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Order } from './order.reducer'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<Order[]>('http://localhost:2700/orders');
  }
}

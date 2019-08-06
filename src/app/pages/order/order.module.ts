import { NgModule } from '@angular/core'

import { OrderRoutingModule } from './order-routing.module'
import { OrderComponent } from './order.component'



@NgModule({
  declarations: [OrderComponent],
  imports: [
    OrderRoutingModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgZorroAntdModule } from 'ng-zorro-antd'

import { OrderRoutingModule } from './order-routing.module'
import { OrderComponent } from './order.component'



@NgModule({
  declarations: [OrderComponent],
  imports: [
    OrderRoutingModule,
    NgZorroAntdModule,
    CommonModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }

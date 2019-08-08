import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { NgZorroAntdModule } from 'ng-zorro-antd'

import { OrderRoutingModule } from './order-routing.module'
import { OrderComponent } from './order.component'
import { OrderEffects } from './order.effects'
import { OrderService } from './order.service'

@NgModule({
  declarations: [OrderComponent],
  imports: [
    OrderRoutingModule,
    NgZorroAntdModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forFeature([OrderEffects])
  ],
  exports: [OrderComponent],
  providers: [OrderService]
})
export class OrderModule {}

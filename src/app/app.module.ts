import { registerLocaleData } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import en from '@angular/common/locales/en'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { en_US, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppEffects } from './app.effects'
import { IconsProviderModule } from './icons-provider.module'
import { OrderEffects } from './pages/order/order.effects'
import { metaReducers, reducers } from './reducers'

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects, OrderEffects])
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

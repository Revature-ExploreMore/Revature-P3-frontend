import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LandingComponent } from './landing/landing.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { OrdersComponent } from './orders/orders.component';
import { DisplayComponent } from './display/display.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    LandingComponent,
    StorefrontComponent,
    CartComponent,
    UserComponent,
    OrdersComponent,
    DisplayComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

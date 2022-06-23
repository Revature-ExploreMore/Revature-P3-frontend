import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { OrdersComponent } from './orders/orders.component';
//import { DisplayComponent } from './display/display.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './user-info/login/login.component';
import { LogoutComponent } from './user-info/logout/logout.component';
import { RegisteruserComponent } from './user-info/registeruser/registeruser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,   
    LandingComponent,
    StorefrontComponent,
    CartComponent,
    UserComponent,
    OrdersComponent,   
    CheckoutComponent,
         LoginComponent,
         LogoutComponent,
         RegisteruserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

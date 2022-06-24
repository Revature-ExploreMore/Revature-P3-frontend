import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { ViewUserProfileComponent } from './user/view-user-profile/view-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoutComponent,
    LandingComponent,
    StorefrontComponent,
    CartComponent,
    UserComponent,
    OrdersComponent,   
    CheckoutComponent,
    LoginComponent,
    LogoutComponent,
    RegisteruserComponent
    EditUserProfileComponent,
    ViewUserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

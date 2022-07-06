import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './user-info/logout/logout.component';
import { LandingComponent } from './landing/landing.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { OrdersComponent } from './orders/orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { RegisteruserComponent } from './user-info/registeruser/registeruser.component';
import { LoginComponent } from './user-info/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { ViewUserComponent } from './user/view-user-profile/view-user-profile.component';
import { HttpClientModule } from '@angular/common/http';


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
    CheckoutComponent,
    CourseComponent,
    RegisteruserComponent,
    EditUserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

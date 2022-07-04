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
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { ViewUserComponent } from './user/view-user-profile/view-user-profile.component';
import { LogoutComponent } from './user-info/logout/logout.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AdminComponent } from './admin/admin.component';
>>>>>>> a6e1b1d (admin's add-course component)

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
<<<<<<< HEAD
    CourseComponent,
    RegisteruserComponent
=======
    LoginComponent,
    RegisteruserComponent,
    EditUserProfileComponent,
    ViewUserComponent,
    LogoutComponent,
    AddCourseComponent,
    AdminComponent
>>>>>>> a6e1b1d (admin's add-course component)
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

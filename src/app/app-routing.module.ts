import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user-info/login/login.component';
import { RegisteruserComponent } from './user-info/registeruser/registeruser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { LandingComponent } from './landing/landing.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewUserComponent } from './user/view-user-profile/view-user-profile.component';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { LogoutComponent } from './user-info/logout/logout.component';
import { CourseComponent } from './course/course.component';
import { AuthenticationGuard } from './user-info/authentication.guard';

const routes: Routes = [
  {path: "", component:LandingComponent,}, 
  {path: "login", component:LoginComponent},
  {path: "registeruser", component:RegisteruserComponent},
  {path: "store", component: StorefrontComponent, canActivate: [AuthenticationGuard]},
  {path: "checkout/:courses", component: CheckoutComponent, canActivate: [AuthenticationGuard]},
  {path: "cart", component: CartComponent, canActivate: [AuthenticationGuard]},
  {path: "orders", component: OrdersComponent, canActivate: [AuthenticationGuard]},
  {path:"landing", component:LandingComponent},
  {path: "profile", component: ViewUserComponent, canActivate: [AuthenticationGuard]},
  {path: "profile/edit", component: EditUserProfileComponent, canActivate: [AuthenticationGuard]},
  {path: "logout",component:LogoutComponent},
  {path: "viewCourse()",component:LandingComponent, canActivate: [AuthenticationGuard]},
  {path: "course", component:CourseComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
<<<<<<< HEAD
import { CourseComponent } from './course/course.component';
=======
import { AddCourseComponent } from './admin/add-course/add-course.component';
>>>>>>> a6e1b1d (admin's add-course component)

const routes: Routes = [
  {path: "", component:LandingComponent}, 
  {path: "login", component:LoginComponent},
  {path: "registeruser", component:RegisteruserComponent},
  {path: "store", component: StorefrontComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "cart", component: CartComponent},
  {path: "orders", component: OrdersComponent},
  {path:"landing", component:LandingComponent},
  {path: "profile", component: ViewUserComponent},
  {path: "profile/edit", component: EditUserProfileComponent},
<<<<<<< HEAD
  {path: "logout",component:LogoutComponent},
  {path: "viewCourse()",component:LandingComponent},
  {path: "course", component:CourseComponent}

=======
  {path: "store", component:StorefrontComponent},
  {path: "logout",component:LogoutComponent},
  {path: "add-course", component: AddCourseComponent}
>>>>>>> a6e1b1d (admin's add-course component)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

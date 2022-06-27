import { LoginComponent } from './user-info/login/login.component';
import { RegisteruserComponent } from './user-info/registeruser/registeruser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { LandingComponent } from './landing/landing.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path: "", component:LandingComponent},
  {path: "login", component:LoginComponent},
  {path: "registeruser", component:RegisteruserComponent},
  {path: "store", component: StorefrontComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path:"orders",component:OrdersComponent},
  {path: "cart", component: CartComponent},
  {path: "orders", component: OrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { LoginComponent } from './user-info/login/login.component';
import { RegisteruserComponent } from './user-info/registeruser/registeruser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { LandingComponent } from './landing/landing.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"registeruser", component:RegisteruserComponent},
  {path: "store", component: StorefrontComponent},
  {path:"landing", component:LandingComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path:"orders",component:OrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

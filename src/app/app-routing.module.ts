import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

import { StorefrontComponent } from './storefront/storefront.component';

const routes: Routes = [
  {path: "store", component: StorefrontComponent},
  {path:"landing", component:LandingComponent}, 
  {path: 'checkout', component: CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StorefrontComponent } from './storefront/storefront.component';

const routes: Routes = [
  {path: "store", component: StorefrontComponent},
  {path:"landing", component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

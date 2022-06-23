import { LoginComponent } from './user-info/login/login.component';
import { RegisteruserComponent } from './user-info/registeruser/registeruser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"registeruser", component:RegisteruserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

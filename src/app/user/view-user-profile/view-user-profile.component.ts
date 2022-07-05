import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from 'src/app/cart/cart.component';
import { Cart } from 'src/app/models/cart.model';
import { User } from 'src/app/models/user.model';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { UserService } from 'src/app/user-info/user.service';


@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserComponent implements OnInit {


  storeMessage: string = "";
  shouldDisplay: boolean = false;
  userData:any=sessionStorage.getItem('user')
  user = JSON.parse(this.userData) as User
  updateUser: User = {
    id: this.user.id,
    name:  this.user.name,
    email: this.user.email,
    phoneNumber: this.user.phoneNumber,
    username: this.user.username,
    password: this.user.password,
    darkModePreference: this.user.darkModePreference,
    registerDate: this.user.registerDate,
    roleId: this.user.roleId
  }
  

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
  this.userService.getUser(this.user.id);
  }

  goToEditUser() {
    this.router.navigate(['profile/edit']);
  }

  displayUserForm() {
    if (this.shouldDisplay) {
      this.shouldDisplay = false;
    } else {
      this.shouldDisplay = true;
    }
  }
  goToOrderHistory() {
    this.router.navigate(['orders']);
  }
}



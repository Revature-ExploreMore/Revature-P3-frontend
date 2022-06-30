import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from 'src/app/cart/cart.component';
import { Cart } from 'src/app/models/cart.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user-info/user.service';


@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserComponent implements OnInit {

  currentAllUsers: User[];
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
    this.currentAllUsers = [];
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.userService.getAllUsers().subscribe(
      {
        next: (response) => {
          console.log(response);
          this.storeMessage = '';
          this.currentAllUsers = response;
        },
        error: (error) => {
          console.log(error.error.errorMessage);
          this.storeMessage = error.error.errorMessage;
        }
      })
  }
  goToEditUser(user: User) {
    this.router.navigate(['profile/edit', user]);
  }

  displayUserForm() {
    if (this.shouldDisplay) {
      this.shouldDisplay = false;
    } else {
      this.shouldDisplay = true;
    }
  }

  getOrderHistory(): Cart[]{
   let cart:Cart[] = 
      [{id: 1,
      createdAt:'date',
      modifiedAt: 'date',
      isRemoved: true,
      cartTotal: 10,
      userId: 6,
      orderId: 8}]
    return cart;


  }
}


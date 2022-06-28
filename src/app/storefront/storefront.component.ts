import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Cart } from '../models/cart.model';
import { Course } from '../models/course.model';
import { AuthService } from '../user-info/auth.service';


@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  user: User = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    darkModePreference: false,
    registerDate : new Date(),
    roleId: 0
  }

  cart: Cart = {
    id: 0,
    created_at: '',
    modified_at: '',
    is_removed: false, 
    cart_total: 0,
    user_id: this.user.id,
    order_id: 0
  }

  courses: Course[] = [];

  constructor(
    private authServ : AuthService
  ) {}

  ngOnInit(): void {
  }

}

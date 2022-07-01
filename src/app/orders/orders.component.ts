import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/order.model';
import { User } from '../models/user.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

 // orders!: Order[];
 orderHistoryList:Order[]=[];
 user: User = {
  id: 0,
  name: '',
  email: '',
  phoneNumber: '',
  username: '',
  password: '',
  darkModePreference: false,
  registerDate : new Date,
  roleId: 0
}


  constructor(private ordersService:OrdersService, private router: Router) { }

  ngOnInit(): void {
  this.handleOrderHistory();
  }
/*
  we should call a function from backend that retrieves all
  order (maybe order_course objects) using the user id from
  the user already stored in sessionStore. You may retrieve
  the user details by calling sessionStorage.getItem as below:

  let userData : any = sessionStorage.getItem('user');
    if(userData!=null){
      return JSON.parse(userData) as User;
    }
    return null;

  We need to use the user id as the backend should have implemented
  a route  "...order/orders/{uid}"
*/

   handleOrderHistory() {

      let userData : any = sessionStorage.getItem('user');
      if(userData != null){
        this.user = JSON.parse(userData) as User;
        console.log(this.user);
      } else {
        this.router.navigateByUrl('');
      }
      this.ordersService.getOrderHistory(this.user.id).subscribe({
        next:(response)=>{
          console.log(response);
        },
        error:(err)=>{
          console.log(err);
        }
      })



   }
}

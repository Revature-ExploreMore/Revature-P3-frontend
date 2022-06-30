import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

 // orders!: Order[];
 orderHistoryList:Order[]=[];
 storage : Storage =sessionStorage;


  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
//  this.handleOrderHistory();
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

//   handleOrderHistory() {
// // @ts-ignore: Object is possibly 'null'.
//     const theEmail=JSON.parse(this.storage.getItem('userEmail'));
//     this.ordersService.getOrderHistory(theEmail).subscribe(
//       data=>{
//         this.orderHistoryList=data.orders;
//       }

//     );
//   }


}

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
 this.handleOrderHistory();
  }
  handleOrderHistory() {
// @ts-ignore: Object is possibly 'null'.
    const theEmail=JSON.parse(this.storage.getItem('userEmail'));
    this.ordersService.getOrderHistory(theEmail).subscribe(
      data=>{
        this.orderHistoryList=data.orders;
      }

    );
  }


}

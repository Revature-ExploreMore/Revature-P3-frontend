import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders!: Order[];

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.listOrders();
  }
  listOrders(){
    this.ordersService.getOrdersList().subscribe(
      data=>{
         this.orders=data;
      }
    );
  }

}

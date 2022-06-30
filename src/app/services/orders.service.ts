import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private baseUrl = 'Http://localhost:7474/orders';


  constructor(private http:HttpClient) { }

  // getOrderHistory(theEmail: string): Observable<Order> {
  //   const orderHistoryUrl = `${this.baseUrl}/search/findByCustomerEmail?email=${theEmail}`;
  //   return this.http.get<GetResponseOrderHistory>(orderHistoryUrl);
  // }

  viewOrderId (orderId: Order): Observable<Order>{
    

    return this.http.get<Order>(this.baseUrl + '/' + orderId);
  }

  viewAllOrders (): Observable<Order[]>{

    return this.http.get<Order[]>(this.baseUrl);
  }

  //need to retrieve all orders by userid in the form of a list
  //of order and course objects, may need to create and orderCourse model
  //similar to cartCourse

}

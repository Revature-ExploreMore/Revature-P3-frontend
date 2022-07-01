import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { map } from 'rxjs/operators';
import { OrderCourse } from '../models/orderCourse.model';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private baseUrl = 'http://localhost:7474/orders';



  constructor(private http:HttpClient) { }

   getOrderHistory(userId: number): Observable<OrderCourse[]> {
    return this.http.get<OrderCourse[]>(`${this.baseUrl}/orderCourse/${userId}`);

   }

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

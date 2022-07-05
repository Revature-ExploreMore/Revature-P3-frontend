import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { map } from 'rxjs/operators';
import { OrderCourse } from '../models/orderCourse.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // baseUrl = 'http://localhost:7474/order';
  private baseUrl: string = environment.apiUrl+"/order";


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

  addOrder (newOrder : Order) : Observable<Order> {
    return this.http.post<Order>(this.baseUrl + "/addorders", newOrder);
  }

  //need to retrieve all orders by userid in the form of a list
  //of order and course objects, may need to create and orderCourse model
  //similar to cartCourse

}

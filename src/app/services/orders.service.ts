import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { map } from 'rxjs/operators';
import { OrderCourse } from '../models/orderCourse.model';
//import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private baseUrl: string = "http://ec2-50-16-56-23.compute-1.amazonaws.com:8484/order";


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
}

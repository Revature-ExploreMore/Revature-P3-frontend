import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  baseUrl:string = 'http://localhost/api/'

  viewOrderId (orderId: order): Observable<order>{
    

    return this.http.get<order>(this.baseUrl + '/' + orderId);
  }

  viewAllOrders (): Observable<order[]>{

    return this.http.get<order[]>(this.baseUrl);
  }

}

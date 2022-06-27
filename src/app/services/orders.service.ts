import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Order } from '../models/order.model';
import{map}from'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

private baseUrl="Http://localhost:8080/api/orders";
  constructor(private httpClient:HttpClient) { }

  getOrdersList():Observable<Order[]>{

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
    map(response=>response._embedded.orders)
    );

  }
}
interface GetResponse{

  _embedded:{
    orders:Order[];
  }

}

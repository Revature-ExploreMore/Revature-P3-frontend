import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: string = "http://localhost:7474/api/cartCourse"
  constructor(private http: HttpClient) { }

  getCartCourses(cartId: number): Observable<Cart[]>{
    return this.http.get<Cart[]>(this.baseUrl+'/'+ cartId);
  }

  deleteItem(cartCourseId: number): Observable<boolean>{
    return this.http.delete<boolean>(this.baseUrl+'/'+ cartCourseId);
  }
}

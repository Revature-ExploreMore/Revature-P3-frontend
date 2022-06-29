import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartCourse } from '../models/cartcourse.model';
import { Course } from '../models/course.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseURL: string = "http://localhost:7474/cart/";
  constructor(private http: HttpClient) { }

  getCartByUserID(id : number) : Observable<Cart> {
    return this.http.get<Cart>(`${this.baseURL}cart/${id}`);
  }

  newCartForUser(user : User) : Observable<Cart> {
    return this.http.post<Cart>(`${this.baseURL}cart`, user);
  }

  getCartCourses(id : number) : Observable<CartCourse[]> {
    return this.http.get<CartCourse[]>(`${this.baseURL}cartCourse/${id}`);
  }

  addCourseToCart(cartCourse : CartCourse) : Observable<CartCourse> {
    return this.http.post<CartCourse>(`${this.baseURL}cartCourse`, cartCourse);
  }
}

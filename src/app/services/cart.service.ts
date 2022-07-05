import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartCourse } from '../models/cartcourse.model';
import { Course } from '../models/course.model';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // baseURL: string = "http://localhost:7474/cart/";
  baseURL: string = environment.apiUrl+"/cart/";

  constructor(private http: HttpClient) { }

  deleteItem(cartCourseId: number): Observable<boolean>{
    return this.http.delete<boolean>(this.baseURL+'cartCourse/'+ cartCourseId);
  }
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
  emptyCart(cartId: number): Observable<boolean>{
    return this.http.delete<boolean>(this.baseURL+ cartId);
  }
    updateCart(cart : Cart) : Observable<Cart> {
    return this.http.put<Cart>(`${this.baseURL}update`, cart);
  }


  
 // allPassedData: BehaviorSubject<CartCourse[]> = new BehaviorSubject<CartCourse[]>([]);
 // private allPassedData = new BehaviorSubject(null);
// data = this.allPassedData.asObservable();

 // changeData(data: any[]){
  //  this.allPassedData.next(data)
 // }
 /* 
  storePassedObject(passedData: CartCourse[]) {
    this.allPassedData.next(passedData);
   
}

retrievePassedObject() {
  return this.allPassedData;
  
}
*/
}

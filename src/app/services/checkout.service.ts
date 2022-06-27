import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentInfo } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'http://localhost/api/'

  addPaymentInfo(paymentInfo:PaymentInfo):Observable<PaymentInfo>{
    return this.http.post<PaymentInfo>(this.baseUrl+'payment',paymentInfo);

  }


}

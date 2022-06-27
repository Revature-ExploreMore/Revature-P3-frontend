import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from '../models/billing.model';
import { PaymentInfo } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'http://localhost:7474/api/'

  addPaymentInfo(paymentInfo:PaymentInfo):Observable<PaymentInfo>{
    return this.http.post<PaymentInfo>(this.baseUrl+'payment',paymentInfo);

  }

  addBillingInfo(billingInfo:Billing):Observable<Billing>{
    return this.http.post<Billing>(this.baseUrl+'billing-address',billingInfo);
  }


}

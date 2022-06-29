import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentInfo } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }
  baseUrl:string = environment.apiUrl;

  addPaymentInfo(paymentInfo:PaymentInfo):Observable<PaymentInfo>{
    return this.http.post<PaymentInfo>(this.baseUrl+'payment',paymentInfo);

  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from '../models/billing.model';
import { Country } from '../models/countries.model';
import { Order } from '../models/order.model';
import { PaymentInfo } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { 
    
  }
  baseUrl:string = 'http://localhost:7474/'

  addPaymentInfo(paymentInfo:PaymentInfo):Observable<PaymentInfo>{
    return this.http.post<PaymentInfo>(this.baseUrl + 'payment/payment',paymentInfo);

  }

  addBillingInfo(billingInfo:Billing):Observable<Billing>{
    return this.http.post<Billing>(this.baseUrl+'billing/billing-address',billingInfo);
  }

  addOrder(order: Order):Observable<Order>{

    return this.http.post<Order>(`${this.baseUrl}order/orders`,order);

  }

  getPaymentInfo(userId:any){
    return this.http.get<PaymentInfo[]>(`${this.baseUrl}payment/payment/`+userId)
  }
  
  getCountries():Country[]{
  return this.countries;
    
}
countries : Country[] = [
  {

  name: 'Alabama',
  abbreviation: 'AL',
},
{
  name: 'Alaska',
  abbreviation: 'AK',
},
{
  name: 'American Samoa',
  abbreviation: 'AS',
},
{
  name: 'Arizona',
  abbreviation: 'AZ',
},
{
  name: 'Arkansas',
  abbreviation: 'AR',
},
{
  name: 'California',
  abbreviation: 'CA',
},
{
  name: 'Colorado',
  abbreviation: 'CO',
},
{
  name: 'Connecticut',
  abbreviation: 'CT',
},
{
  name: 'Delaware',
  abbreviation: 'DE',
},
{
  name: 'District Of Columbia',
  abbreviation: 'DC',
},
{
  name: 'Federated States Of Micronesia',
  abbreviation: 'FM',
},
{
  name: 'Florida',
  abbreviation: 'FL',
},
{
  name: 'Georgia',
  abbreviation: 'GA',
},
{
  name: 'Guam',
  abbreviation: 'GU',
},
{
  name: 'Hawaii',
  abbreviation: 'HI',
},
{
  name: 'Idaho',
  abbreviation: 'ID',
},
{
  name: 'Illinois',
  abbreviation: 'IL',
},
{
  name: 'Indiana',
  abbreviation: 'IN',
},
{
  name: 'Iowa',
  abbreviation: 'IA',
},
{
  name: 'Kansas',
  abbreviation: 'KS',
},
{
  name: 'Kentucky',
  abbreviation: 'KY',
},
{
  name: 'Louisiana',
  abbreviation: 'LA',
},
{
  name: 'Maine',
  abbreviation: 'ME',
},
{
  name: 'Marshall Islands',
  abbreviation: 'MH',
},
{
  name: 'Maryland',
  abbreviation: 'MD',
},
{
  name: 'Massachusetts',
  abbreviation: 'MA',
},
{
  name: 'Michigan',
  abbreviation: 'MI',
},
{
  name: 'Minnesota',
  abbreviation: 'MN',
},
{
  name: 'Mississippi',
  abbreviation: 'MS',
},
{
  name: 'Missouri',
  abbreviation: 'MO',
},
{
  name: 'Montana',
  abbreviation: 'MT',
},
{
  name: 'Nebraska',
  abbreviation: 'NE',
},
{
  name: 'Nevada',
  abbreviation: 'NV',
},
{
  name: 'New Hampshire',
  abbreviation: 'NH',
},
{
  name: 'New Jersey',
  abbreviation: 'NJ',
},
{
  name: 'New Mexico',
  abbreviation: 'NM',
},
{
  name: 'New York',
  abbreviation: 'NY',
},
{
  name: 'North Carolina',
  abbreviation: 'NC',
},
{
  name: 'North Dakota',
  abbreviation: 'ND',
},
{
  name: 'Northern Mariana Islands',
  abbreviation: 'MP',
},
{
  name: 'Ohio',
  abbreviation: 'OH',
},
{
  name: 'Oklahoma',
  abbreviation: 'OK',
},
{
  name: 'Oregon',
  abbreviation: 'OR',
},
{
  name: 'Palau',
  abbreviation: 'PW',
},
{
  name: 'Pennsylvania',
  abbreviation: 'PA',
},
{
  name: 'Puerto Rico',
  abbreviation: 'PR',
},
{
  name: 'Rhode Island',
  abbreviation: 'RI',
},
{
  name: 'South Carolina',
  abbreviation: 'SC',
},
{
  name: 'South Dakota',
  abbreviation: 'SD',
},
{
  name: 'Tennessee',
  abbreviation: 'TN',
},
{
  name: 'Texas',
  abbreviation: 'TX',
},
{
  name: 'Utah',
  abbreviation: 'UT',
},
{
  name: 'Vermont',
  abbreviation: 'VT',
},
{
  name: 'Virgin Islands',
  abbreviation: 'VI',
},
{
  name: 'Virginia',
  abbreviation: 'VA',
},
{
  name: 'Washington',
  abbreviation: 'WA',
},
{
  name: 'West Virginia',
  abbreviation: 'WV',
},
{
  name: 'Wisconsin',
  abbreviation: 'WI',
},
{
  name: 'Wyoming',
  abbreviation: 'WY',
},
];

}

import { CheckoutService } from './../services/checkout.service';
import { PaymentInfo } from './../models/payment.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;
  paymentInfo:PaymentInfo ={
    id: 0,
    cardType: '',
    cardNumber: '',
    expDate: '',
    cvv: 0,
    userId: 0
  }

  constructor(private formBuilder: FormBuilder,private checkOut:CheckoutService) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customerBilling : this.formBuilder.group({
        street:[''],
        city:[''],
        state:[''],
        zipCode:['']
        //user id = sessionStorage of the user
      }),
    
      paymentInfo: this.formBuilder.group({
        cardType:[''],
        cardNumber:[''],
        expDate:[''],
        cvv:[''],

      })
    })
    
  }

  addPaymentInfo(){

    this.paymentInfo ={
      id: 0,
      cardType: this.checkoutFormGroup.get('paymentInfo')?.get('cardType')?.value,
      cardNumber: this.checkoutFormGroup.get('paymentInfo')?.get('cardNumber')?.value,
      expDate: this.checkoutFormGroup.get('paymentInfo')?.get('expDate')?.value,
      cvv: this.checkoutFormGroup.get('paymentInfo')?.get('cvv')?.value,
      userId: 0
    }
    this.checkOut.addPaymentInfo(this.paymentInfo).subscribe({

      next: (response)=> console.log(response),
      error: (error)=> console.log(error)
    })

  }




  // copyShippingAddressToBillingAddress(event:any){

  //   if (event.target.checked){
  //     this.checkoutFormGroup.controls['customerBilling']
  //     .setValue(this.checkoutFormGroup.controls['customerBilling']);
  //   }else{
  //     this.checkoutFormGroup.controls['customerBilling'].reset();
  //   }
  // }

  onSubmit() {
    console.log("Handling form data");
    console.log(this.checkoutFormGroup.get('customerBilling')?.value);
    console.log(this.checkoutFormGroup.get('paymentInfo')?.value);

  }




}

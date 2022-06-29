import { Country } from './../models/countries.model';
import { CheckoutService } from './../services/checkout.service';
import { PaymentInfo } from './../models/payment.model';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Billing } from '../models/billing.model';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
    countries: Country[] = []; 
  checkoutFormGroup : FormGroup;
  paymentInfo: PaymentInfo = {
    id: 0,
    cardType: '',
    cardNumber: '',
    expDate: '',
    cvv: 0,
    userId: 0,
  };
  billinInfo: Billing = {
    id: 0,
    streetName: '',
    city: '',
    state: '',
    zipCode: 0,
    userId: 0,
  };

  

  constructor(
    private formBuilder: FormBuilder,
    private checkOut: CheckoutService
  ) {


    this.checkoutFormGroup = this.formBuilder.group({
        customerBilling: this.formBuilder.group({
          street: new FormControl('', [Validators.required,Validators.minLength(2)]),
          city: new FormControl('', [Validators.required]),
          state: new FormControl('', [Validators.required]),
          zipCode: new FormControl('', [Validators.required,Validators.minLength(2)]),
          //user id = sessionStorage of the user
        }),
  
        paymentInfo: this.formBuilder.group({
          cardType: new FormControl('', [Validators.required]),
          cardNumber: new FormControl('', [Validators.required,Validators.pattern('[0-9]{16}')]),
          expDate: new FormControl('', [Validators.required, Validators.pattern('/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/')]),
          cvv: new FormControl('', [Validators.required,Validators.pattern('[0-9]{3}'),]),
        }),
      });
  }



  ngOnInit(): void {
    this.countries = this.checkOut.getCountries();
 
  }

  addPaymentInfo() {
    this.billinInfo = {
      id: 0,
      streetName: this.checkoutFormGroup.get('customerBilling')?.get('street')
        ?.value,
      city: this.checkoutFormGroup.get('customerBilling')?.get('city')?.value,
      state: this.checkoutFormGroup.get('customerBilling')?.get('state')?.value,
      zipCode: this.checkoutFormGroup.get('customerBilling')?.get('zipCode')
        ?.value,
      userId: 4,
    };
    this.paymentInfo = {
      id: 0,
      cardType: this.checkoutFormGroup.get('paymentInfo')?.get('cardType')
        ?.value,
      cardNumber: this.checkoutFormGroup.get('paymentInfo')?.get('cardNumber')
        ?.value,
      expDate: this.checkoutFormGroup.get('paymentInfo')?.get('expDate')?.value,
      cvv: this.checkoutFormGroup.get('paymentInfo')?.get('cvv')?.value,
      userId: 3,
    };

    this.checkOut.addBillingInfo(this.billinInfo).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
    this.checkOut.addPaymentInfo(this.paymentInfo).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });

    
  }

  get billingAddressStreet() {return this.checkoutFormGroup.get('customerBilling.street');}
  get billingAddressCity() {return this.checkoutFormGroup.get('customerBilling.city');}
  get billingAddressState() {return this.checkoutFormGroup.get('customerBilling.state');}
  get billingAddressZipCode() {return this.checkoutFormGroup.get('customerBilling.zipCode');}

  get creditCardType() {return this.checkoutFormGroup.get('paymentInfo.cardType');}
  get creditCardNameOnCard() {return this.checkoutFormGroup.get('paymentInfo.nameOnCard');}
  get creditCardNumber() {return this.checkoutFormGroup.get('paymentInfo.cardNumber');}
  get creditCardExpDate() {return this.checkoutFormGroup.get('paymentInfo.expDate');}
  get creditCardSecurityCode() {return this.checkoutFormGroup.get('paymentInfo.cvv');}

  
  onSubmit() {
    console.log('Handling form data');
    console.log(this.checkoutFormGroup.get('customerBilling')?.value);
    console.log(this.checkoutFormGroup.get('paymentInfo')?.value);
  }

  
}

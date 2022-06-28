import { Country } from './../models/countries.model';
import { CheckoutService } from './../services/checkout.service';
import { PaymentInfo } from './../models/payment.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { Billing } from '../models/billing.model';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutFormGroup!: FormGroup;
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
  ) {}

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customerBilling: this.formBuilder.group({
        street: new FormControl('',[Validators.required,Validators.minLength(2)]),
        city: new FormControl('',[Validators.required]),
        state: new FormControl('',[Validators.required]),
        zipCode: new FormControl('',[Validators.required,Validators.minLength(2)])
        //user id = sessionStorage of the user
      }),

      paymentInfo: this.formBuilder.group({
        cardType:  new FormControl('',[Validators.required]),
        cardNumber: new FormControl('',[Validators.required, Validators.pattern('[0-9]{16}')]),
        expDate: [Validators.required, Validators.pattern('/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]')],
        cvv: new FormControl('',[Validators.required, Validators.pattern('[0-9]{3}')]),
      }),
    });
  }

  addPaymentInfo() {

    this.billinInfo = {
      id: 0,
      streetName: this.checkoutFormGroup.get('customerBilling')?.get('street')
      ?.value,
      city: this.checkoutFormGroup.get('customerBilling')?.get('city')
      ?.value,
      state: this.checkoutFormGroup.get('customerBilling')?.get('state')
      ?.value,
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
      error: (error) => console.log(error)
    })
    this.checkOut.addPaymentInfo(this.paymentInfo).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  get billingAddressStreet(){return this.checkoutFormGroup.get('customerBilling.street');}
  get billingAddressCity(){return this.checkoutFormGroup.get('customerBilling.city');}
  get billingAddressState(){return this.checkoutFormGroup.get('customerBilling.state');}
  get billingAddressZipCode(){return this.checkoutFormGroup.get('customerBilling.zipCode');}

  get creditCardType() { return this.checkoutFormGroup.get('paymentInfo.cardType'); }
  get creditCardNameOnCard() { return this.checkoutFormGroup.get('paymentInfo.nameOnCard'); }
  get creditCardNumber() { return this.checkoutFormGroup.get('paymentInfo.cardNumber'); }
  get creditCardExpDate() { return this.checkoutFormGroup.get('paymentInfo.expDate'); }
  get creditCardSecurityCode() { return this.checkoutFormGroup.get('paymentInfo.cvv'); }
  
  

  
  
  get cardNumber(){return this.checkoutFormGroup.get('paymentInfo.cardNumber');}

  // copyShippingAddressToBillingAddress(event:any){

  //   if (event.target.checked){
  //     this.checkoutFormGroup.controls['customerBilling']
  //     .setValue(this.checkoutFormGroup.controls['customerBilling']);
  //   }else{
  //     this.checkoutFormGroup.controls['customerBilling'].reset();
  //   }
  // }

  onSubmit() {
    console.log('Handling form data');
    console.log(this.checkoutFormGroup.get('customerBilling')?.value);
    console.log(this.checkoutFormGroup.get('paymentInfo')?.value);
  }


countries:Country[]=
  [
    {
        name: "Alabama",
        abbreviation: "AL"
    },
    {
        name: "Alaska",
        abbreviation: "AK"
    },
    {
        name: "American Samoa",
        abbreviation: "AS"
    },
    {
        name: "Arizona",
        abbreviation: "AZ"
    },
    {
        name: "Arkansas",
        abbreviation: "AR"
    },
    {
        name: "California",
        abbreviation: "CA"
    },
    {
        name: "Colorado",
        abbreviation: "CO"
    },
    {
        name: "Connecticut",
        abbreviation: "CT"
    },
    {
        name: "Delaware",
        abbreviation: "DE"
    },
    {
        name: "District Of Columbia",
        abbreviation: "DC"
    },
    {
        name: "Federated States Of Micronesia",
        abbreviation: "FM"
    },
    {
        name: "Florida",
        abbreviation: "FL"
    },
    {
        name: "Georgia",
        abbreviation: "GA"
    },
    {
        name: "Guam",
        abbreviation: "GU"
    },
    {
        name: "Hawaii",
        abbreviation: "HI"
    },
    {
        name: "Idaho",
        abbreviation: "ID"
    },
    {
        name: "Illinois",
        abbreviation: "IL"
    },
    {
        name: "Indiana",
        abbreviation: "IN"
    },
    {
        name: "Iowa",
        abbreviation: "IA"
    },
    {
        name: "Kansas",
        abbreviation: "KS"
    },
    {
        name: "Kentucky",
        abbreviation: "KY"
    },
    {
        name: "Louisiana",
        abbreviation: "LA"
    },
    {
        name: "Maine",
        abbreviation: "ME"
    },
    {
        name: "Marshall Islands",
        abbreviation: "MH"
    },
    {
        name: "Maryland",
        abbreviation: "MD"
    },
    {
        name: "Massachusetts",
        abbreviation: "MA"
    },
    {
        name: "Michigan",
        abbreviation: "MI"
    },
    {
        name: "Minnesota",
        abbreviation: "MN"
    },
    {
        name: "Mississippi",
        abbreviation: "MS"
    },
    {
        name: "Missouri",
        abbreviation: "MO"
    },
    {
        name: "Montana",
        abbreviation: "MT"
    },
    {
        name: "Nebraska",
        abbreviation: "NE"
    },
    {
        name: "Nevada",
        abbreviation: "NV"
    },
    {
        name: "New Hampshire",
        abbreviation: "NH"
    },
    {
        name: "New Jersey",
        abbreviation: "NJ"
    },
    {
        name: "New Mexico",
        abbreviation: "NM"
    },
    {
        name: "New York",
        abbreviation: "NY"
    },
    {
        name: "North Carolina",
        abbreviation: "NC"
    },
    {
        name: "North Dakota",
        abbreviation: "ND"
    },
    {
        name: "Northern Mariana Islands",
        abbreviation: "MP"
    },
    {
        name: "Ohio",
        abbreviation: "OH"
    },
    {
        name: "Oklahoma",
        abbreviation: "OK"
    },
    {
        name: "Oregon",
        abbreviation: "OR"
    },
    {
        name: "Palau",
        abbreviation: "PW"
    },
    {
        name: "Pennsylvania",
        abbreviation: "PA"
    },
    {
        name: "Puerto Rico",
        abbreviation: "PR"
    },
    {
        name: "Rhode Island",
        abbreviation: "RI"
    },
    {
        name: "South Carolina",
        abbreviation: "SC"
    },
    {
        name: "South Dakota",
        abbreviation: "SD"
    },
    {
        name: "Tennessee",
        abbreviation: "TN"
    },
    {
        name: "Texas",
        abbreviation: "TX"
    },
    {
        name: "Utah",
        abbreviation: "UT"
    },
    {
        name: "Vermont",
        abbreviation: "VT"
    },
    {
        name: "Virgin Islands",
        abbreviation: "VI"
    },
    {
        name: "Virginia",
        abbreviation: "VA"
    },
    {
        name: "Washington",
        abbreviation: "WA"
    },
    {
        name: "West Virginia",
        abbreviation: "WV"
    },
    {
        name: "Wisconsin",
        abbreviation: "WI"
    },
    {
        name: "Wyoming",
        abbreviation: "WY"
    }
]


}

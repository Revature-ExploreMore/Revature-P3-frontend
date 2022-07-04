import { Country } from '../models/countries.model';
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
import { AuthService } from '../user-info/auth.service';
import { Cart } from '../models/cart.model';
import { CartCourse } from '../models/cartcourse.model';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  countries: Country[] = [];
  savedPaymentInfo: PaymentInfo[] = [];
  savedBillingInfo: Billing[] = [];

  checkoutFormGroup: FormGroup;
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
    street: '',
    city: '',
    state: '',
    zipCode: 0,
    userId: 0,
  };
  cart: Cart = {
    id: 0,
    createdAt: new Date(),
    modifiedAt: new Date(),
    cartTotal: 0,
    isRemoved: false,
    userId: 0,
    orderId: 0,
  };
  courses: CartCourse[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private checkOut: CheckoutService,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {
    this.checkoutFormGroup = this.formBuilder.group({
      customerBilling: this.formBuilder.group({
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        //user id = sessionStorage of the user
      }),

      paymentInfo: this.formBuilder.group({
        cardType: new FormControl('', [Validators.required]),
        cardNumber: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{16}'),
        ]),
        expDate: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '/([12]d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]d|3[01]))/'
          ),
        ]),
        cvv: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{3}'),
        ]),
      }),
    });

    this.getPaymentInfo();
  }

  // Validators.pattern('/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/')

  ngOnInit(): void {
    this.countries = this.checkOut.getCountries();
    this.setCart();
    this.setCourses();
    this.getBillingInfo();
  }

  copyPaymentInfo(event: any) {
    this.savedPaymentInfo.forEach((paymentInfo) => {
      event.target.checked
        ? this.checkoutFormGroup.controls['paymentInfo'].setValue({
            cardType: paymentInfo.cardType,
            cardNumber: paymentInfo.cardNumber,
            expDate: paymentInfo.expDate,
            cvv: paymentInfo.cvv,
          })
        : this.checkoutFormGroup.controls['paymentInfo'].reset();
    });
  }
  copyBillingInfo(event:any){
    this.savedBillingInfo.forEach((billingInfo) => {
      if(event.target.checked){

        this.checkoutFormGroup.controls['customerBilling'].setValue({
            street: billingInfo.street,
            city: billingInfo.city,
            state: billingInfo.state,
            zipCode: billingInfo.zipCode

        });

      }else{
        this.checkoutFormGroup.controls['cutomerBilling'].reset()
      }
    });
  
  }


  backToCart() {
    this.router.navigateByUrl('cart').catch((error) => console.log(error));
  }
  getPaymentInfo() {
    let user = this.authService.getUserDetails();

    return this.checkOut.getPaymentInfo(user?.id).subscribe({
      next: (response) => {
        this.savedPaymentInfo = response as PaymentInfo[];
      },
    });
  }
  getBillingInfo() {
    let user = this.authService.getUserDetails(); 

    return this.checkOut.getBillingInfo(user?.id).subscribe({

      next:(response) => {

        this.savedBillingInfo = response as Billing[]
      },
      error: (error) => console.log(error)
    }

    )

  }

  setCart() {
    let cart: any = sessionStorage.getItem('cart');
    if (cart != null) {
      this.cart = JSON.parse(cart) as Cart;
      console.log(this.cart);
    }
  }

  setCourses() {
    let cidParam = this.cart.id;
    this.cartService.getCartCourses(cidParam).subscribe({
      next: (response) => {
        console.log(response);
        this.courses = response;
        console.log(this.courses);
      },
    });
  }

  addPaymentInfo() {
    let user: any = this.authService.getUserDetails();

    this.billinInfo = {
      id: 0,
      street: this.checkoutFormGroup.get('customerBilling')?.get('street')
        ?.value,
      city: this.checkoutFormGroup.get('customerBilling')?.get('city')?.value,
      state: this.checkoutFormGroup.get('customerBilling')?.get('state')?.value,
      zipCode: this.checkoutFormGroup.get('customerBilling')?.get('zipCode')
        ?.value,
      userId: user?.id,
    };
    this.paymentInfo = {
      id: 0,
      cardType: this.checkoutFormGroup.get('paymentInfo')?.get('cardType')
        ?.value,
      cardNumber: this.checkoutFormGroup.get('paymentInfo')?.get('cardNumber')
        ?.value,
      expDate: this.checkoutFormGroup.get('paymentInfo')?.get('expDate')?.value,
      cvv: this.checkoutFormGroup.get('paymentInfo')?.get('cvv')?.value,
      userId: user?.id,
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

  get billingAddressStreet() {
    return this.checkoutFormGroup.get('customerBilling.street');
  }
  get billingAddressCity() {
    return this.checkoutFormGroup.get('customerBilling.city');
  }
  get billingAddressState() {
    return this.checkoutFormGroup.get('customerBilling.state');
  }
  get billingAddressZipCode() {
    return this.checkoutFormGroup.get('customerBilling.zipCode');
  }

  get creditCardType() {
    return this.checkoutFormGroup.get('paymentInfo.cardType');
  }
  get creditCardNameOnCard() {
    return this.checkoutFormGroup.get('paymentInfo.nameOnCard');
  }
  get creditCardNumber() {
    return this.checkoutFormGroup.get('paymentInfo.cardNumber');
  }
  get creditCardExpDate() {
    return this.checkoutFormGroup.get('paymentInfo.expDate');
  }
  get creditCardSecurityCode() {
    return this.checkoutFormGroup.get('paymentInfo.cvv');
  }

  onSubmit() {
    console.log('Handling form data');
    console.log(this.checkoutFormGroup.get('customerBilling')?.value);
    console.log(this.checkoutFormGroup.get('paymentInfo')?.value);
    this.router.navigateByUrl('orders');
  }
}

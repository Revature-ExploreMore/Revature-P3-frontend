import { Country } from '../models/countries.model';
import { CheckoutService } from './../services/checkout.service';
import { PaymentInfo } from './../models/payment.model';
import { Component, NgModule, OnInit } from '@angular/core';
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
import { User } from '../models/user.model';
import { OrderCourseSet } from '../models/ordercourseset.model';
import { Course } from '../models/course.model';
import { Order } from '../models/order.model';

import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [CartService],
})
export class CheckoutComponent implements OnInit {
  countries: Country[] = [];

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
    streetName: '',
    city: '',
    state: '',
    zipCode: 0,
    userId: 0,
  };
  newUser: User = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    darkModePreference: false,
    registerDate: new Date(),
    roleId: 0,
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
  coursesAct: Course[] = [];

  order: Order = {
    id: 0,
    orderTimestamp: new Date(),
    orderTotal: 0,
    user: this.newUser,
  };

  orderCourseSet: OrderCourseSet = {
    order: this.order,
    courses: this.coursesAct,
  };

  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private checkOut: CheckoutService,
    private authService: AuthService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subscription = route.params.subscribe(
      (param: any) => (this.courses = JSON.parse(param['courses']))
    );

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
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.countries = this.checkOut.getCountries();
    this.setUser();
    this.setCart();
  }

  setUser() {
    let userData: any = sessionStorage.getItem('user');
    if (userData != null) {
      this.newUser = JSON.parse(userData) as User;
    }
  }

  setCart() {
    let cart: any = sessionStorage.getItem('cart');
    if (cart != null) {
      this.cart = JSON.parse(cart) as Cart;
    }
  }

  addPaymentInfo() {
    this.order.orderTimestamp = new Date();
    this.order.orderTotal = this.cart.cartTotal;
    this.order.user = this.newUser;

    this.orderCourseSet.order = this.order;
    this.coursesAct = [];
    for (let cc of this.courses) {
      this.coursesAct.push(cc.course);
    }
    this.orderCourseSet.courses = this.coursesAct;

    console.log(this.orderCourseSet);
    this.checkOut.addOrder(this.orderCourseSet).subscribe({
      next: (response) => console.log(response),
      error: (err) => console.log(err),
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
  }
}

import { Country } from '../models/countries.model';
import { CheckoutService } from './../services/checkout.service';
import { PaymentInfo } from './../models/payment.model';
import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormArray,
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
import { Order } from '../models/order.model';
import { Course } from '../models/course.model';

import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [CartService]
})
export class CheckoutComponent implements OnInit {
  countries: Country[] = [];
  savedPaymentInfo: PaymentInfo[] = [];
  savedBillingInfo: Billing[] = [];
  userId:any = this.authService.getUserDetails()?.id;    //checkoutFormGroup: FormGroup;
  checkOutFormGroup: FormGroup;
 
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
    roleId: 0
  }

  cart: Cart = {
    id: 0,
    createdAt: new Date(),
    modifiedAt: new Date(),
    cartTotal: 0,
    isRemoved: false,
    userId: 0,
    orderId: 0,
  }
  courses: CartCourse [] = [];
  coursesAct: Course [] = [];

  order: Order = {
    id: 0,
    orderTimestamp: new Date(),
    orderTotal: 0,
    user: this.newUser
  }

  orderCourseSet: OrderCourseSet = {
    order: this.order,
    courses: this.coursesAct
  }

  

  constructor(
    private subscription: Subscription,
    private formBuilder: FormBuilder,
    private checkOut: CheckoutService,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.checkOutFormGroup = this.formBuilder.group({
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
        userId:this.userId
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
  
    this.subscription = route.params.subscribe(
      (param: any) => this.courses = JSON.parse(param['courses'])
    );
  

    this.getPaymentInfo();
    
    
  }
  ngOnDestroy() { 
    this.subscription.unsubscribe();
  }

  

  // Validators.pattern('/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/')

  ngOnInit(): void {
    this.countries = this.checkOut.getCountries();
    this.setUser();
    this.setCart();
    //this.setCourses();
    this.getBillingInfo();
    
  }   

  

  

  copyPaymentInfo(paymentInfo: any) {
      console.log(paymentInfo);
   
        this.checkOutFormGroup.controls['paymentInfo'].setValue({
            cardType: paymentInfo.cardType,
            cardNumber: paymentInfo.cardNumber,
            expDate: paymentInfo.expDate,
            cvv: paymentInfo.cvv
            
          });
        
    
  }
  copyBillingInfo(billingInfo:any){
    
    console.log(billingInfo);
    this.checkOutFormGroup.controls['customerBilling'].setValue({
      cardType: billingInfo.cardType,
      cardNumber: billingInfo.cardNumber,
      expDate: billingInfo.expDate,
      cvv: billingInfo.cvv
      
    });

  
  }


  backToCart() {
    this.router.navigateByUrl('cart').catch((error) => console.log(error));
  }
  getPaymentInfo() {
    let user = this.authService.getUserDetails();

    return this.checkOut.getPaymentInfo(2).subscribe({
      next: (response) => {
        this.savedPaymentInfo = response as PaymentInfo[];
      },
    });
  }
  getBillingInfo() {
    let user = this.authService.getUserDetails(); 

    return this.checkOut.getBillingInfo(2).subscribe({

      next:(response) => {

        this.savedBillingInfo = response as Billing[]
      },
      error: (error) => console.log(error)
    }

    )

  //  this.setCourses();

 
 console.log(this.route.snapshot.queryParams['data']);
    
 
  //  this.cartService.allPassedData.subscribe((allPassedData)=>{
    //  this.courses = allPassedData;
    //  console.log(this.courses); 
  //  }) 
  }
  


  setUser(){
    let userData: any = sessionStorage.getItem('user');
    if (userData != null){
      this.newUser = JSON.parse(userData) as User;
      console.log(this.newUser);
    }
  }

  setCart(){
    let cart : any = sessionStorage.getItem("cart");
    if (cart != null){
      this.cart = JSON.parse(cart) as Cart;
      console.log(this.cart);
    }
  }

  // setCourses(){
  //   let cidParam = this.cart.id;
  //   this.cartService.getCartCourses(cidParam).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this.courses = response;
  //       console.log(this.courses);
  //     },
  //   });
  // }

  addBillingInfo(){
    let user:any  = this.authService.getUserDetails();

    this.billinInfo = {
      id: 0,
      streetName: this.checkOutFormGroup.get('customerBilling')?.get('street')
        ?.value,
      city: this.checkOutFormGroup.get('customerBilling')?.get('city')?.value,
      state: this.checkOutFormGroup.get('customerBilling')?.get('state')?.value,
      zipCode: this.checkOutFormGroup.get('customerBilling')?.get('zipCode')
        ?.value,
      userId: 2,
    };

    this.checkOut.addBillingInfo(this.billinInfo).subscribe({
      next: (response)=> console.log(response),
      error:(error) => console.log(error)
    });

  }

  addPaymentInfo() {
    let user: any = this.authService.getUserDetails();

    this.billinInfo = {
      id: 0,
      streetName: this.checkOutFormGroup.get('customerBilling')?.get('street')
        ?.value,
      city: this.checkOutFormGroup.get('customerBilling')?.get('city')?.value,
      state: this.checkOutFormGroup.get('customerBilling')?.get('state')?.value,
      zipCode: this.checkOutFormGroup.get('customerBilling')?.get('zipCode')
        ?.value,
      userId: user?.id,
    };
    this.paymentInfo = {
      id: 0,
      cardType: this.checkOutFormGroup.get('paymentInfo')?.get('cardType')
        ?.value,
      cardNumber: this.checkOutFormGroup.get('paymentInfo')?.get('cardNumber')
        ?.value,
      expDate: this.checkOutFormGroup.get('paymentInfo')?.get('expDate')?.value,
      cvv: this.checkOutFormGroup.get('paymentInfo')?.get('cvv')?.value,
      userId: 2,
    };

    // this.checkOut.addBillingInfo(this.billinInfo).subscribe({
    //   next: (response) => console.log(response),
    //   error: (error) => console.log(error),
    // });
    // this.checkOut.addPaymentInfo(this.paymentInfo).subscribe({
    //   next: (response) => console.log(response),
    //   error: (error) => console.log(error),
    // });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    // this.courses[0].cart = this.cart;
    // this.order.orderTimestamp = new Date();
    // this.order.orderTotal = this.cart.cartTotal;
    // this.order.user = this.newUser;

    // this.orderCourseSet.order = this.order;
    // this.coursesAct = [];
    // for (let cc of this.courses) {
    //   this.coursesAct.push(cc.course);
    // }
    // this.orderCourseSet.courses = this.coursesAct;

    // console.log(this.orderCourseSet);
    // this.checkOut.addOrder(this.orderCourseSet).subscribe({
    //   next: (response) => console.log(response),
    //   error: (error) => console.log(error),
    // });


    this.checkOut.addPaymentInfo(this.paymentInfo).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  get billingAddressStreet() {
    return this.checkOutFormGroup.get('customerBilling.street');
  }
  get billingAddressCity() {
    return this.checkOutFormGroup.get('customerBilling.city');
  }
  get billingAddressState() {
    return this.checkOutFormGroup.get('customerBilling.state');
  }
  get billingAddressZipCode() {
    return this.checkOutFormGroup.get('customerBilling.zipCode');
  }

  get creditCardType() {
    return this.checkOutFormGroup.get('paymentInfo.cardType');
  }
  get creditCardNameOnCard() {
    return this.checkOutFormGroup.get('paymentInfo.nameOnCard');
  }
  get creditCardNumber() {
    return this.checkOutFormGroup.get('paymentInfo.cardNumber');
  }
  get creditCardExpDate() {
    return this.checkOutFormGroup.get('paymentInfo.expDate');
  }
  get creditCardSecurityCode() {
    return this.checkOutFormGroup.get('paymentInfo.cvv');
  }

  onSubmit() {
    console.log('Handling form data');
    console.log(this.checkOutFormGroup.get('customerBilling')?.value);
    console.log(this.checkOutFormGroup.get('paymentInfo')?.value);
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
      next: (response) => {
        console.log(response)
        this.router.navigateByUrl('orders')
      
      },
      
      error: (error) => console.log(error),
    });
    
  }
}

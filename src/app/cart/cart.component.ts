import { Component, Injectable, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { Cart } from '../models/cart.model';
import { CartCourse } from '../models/cartcourse.model';
import { Category } from '../models/category.model';
import { Course } from '../models/course.model';
import { User } from '../models/user.model';
import { CartService } from '../services/cart.service';
import { CoursesService } from '../services/courses.service';
import { AuthService } from '../user-info/auth.service';
// import { NgEventBus } from 'ng-event-bus';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
@Injectable()
export class CartComponent implements OnInit {
  
  newCategory: Category = {
    id: 0,
    categoryName: ''
  }
  newCourse : Course = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: this.newCategory,
  }

  courses: CartCourse [];
   
    
 cartMessage: string = '';
newCart: Cart = {
  id: 0,
  createdAt: new Date(),
  modifiedAt: new Date(),
  cartTotal: 0,
  isRemoved: false, 
  userId: 0,
  orderId: 0,
}
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
cartCourse : CartCourse = {
  id: 0,
  cart: this.newCart,
  course: this.newCourse,
}

title = 'My Cart';

  
  constructor(private cartService: CartService,
              private authService: AuthService,
              private courseService: CoursesService,
              // private eventBus: NgEventBus,
              private router: Router) { 
    this.courses = [];
     this.cartMessage = '';
  }
  ngOnInit(): void {
    this.setCart();
    this.setUser();
    this.setCourses();
    
  }


  // navigationExtras: NavigationExtras = {
  //   state: {
  //     courses: this.courses;
  //   }
  // }
setUser(){
  let userData: any = sessionStorage.getItem('user');
  if (userData != null){
    this.newUser = JSON.parse(userData) as User;
    console.log(this.newUser);
  }
}

 
/*
  getCartId(userId: number){
    this.cartService.getCartId(userId).subscribe({
      next: (response) => {
        console.log(response);
        this.currentCartId = response;
      }
    })
  }
  */
setCart(){
  let cart : any = sessionStorage.getItem("cart");
  if (cart != null){
    this.newCart = JSON.parse(cart) as Cart;
    console.log(this.newCart);
  }
}
 /*
 setCartCourses() {
  this.cartServ.getCartCourses(this.cart.id).subscribe({
    next: (response) => {
      console.log("cartCourses", response);
      this.cartCourse.cart = this.cart;
      for(let cartCourse of response) {
        if(cartCourse.course) {
          this.cartCourseIDs.push(cartCourse.course.id);
        }
      }
      console.log("cartCourseIDs", this.cartCourseIDs);
    },
    error: (err) => {
      console.log(err);
    }
  })
}
*/
  setCourses(){
    let cidParam = this.newCart.id;
    this.cartService.getCartCourses(cidParam).subscribe({
      next: (response) => {
        console.log(response);
        this.courses = response;
      
        console.log(this.courses);    
      },
      error: (error) => {
       console.log(error.error.errorMessage);
        this.cartMessage = error.error.errorMessage;
      }
    });
  
}

  deleteItem(cartCourse: CartCourse){
    this.cartService.deleteItem(cartCourse.id).subscribe({
      next: (response) => {
        console.log(response);
        this.setCourses();
        this.newCart.cartTotal -= cartCourse.course.price;
        this.newCart.modifiedAt = new Date;
        this.cartService.updateCart(this.newCart).subscribe({
          next: (response) => {
            console.log(response);
            this.newCart = response;
            sessionStorage.setItem("cart", JSON.stringify(this.newCart));
            console.log(this.newCart);
          },
          error: (err) => console.log(err)
        })
      },
      error: (err) => console.log(err)
    });
    
  }
  emptyCart(cartId: number){
    this.cartService.emptyCart(cartId).subscribe({
      next: (response) => {
      console.log(response);
      this.setCourses();
      this.newCart.cartTotal -= this.newCart.cartTotal;
        this.newCart.modifiedAt = new Date;
        this.cartService.updateCart(this.newCart).subscribe({
          next: (response) => {
            console.log(response);
            this.newCart = response;
            sessionStorage.setItem("cart", JSON.stringify(this.newCart));
            console.log(this.newCart);
          },
          error: (err) => console.log(err)
        })
      },
      error: (err) => console.log(err)
    });

  }
  
  passCoursesToCheckout(){
    
  
  }

  goToStoreFront() {
    this.router.navigateByUrl("store");
  }

  goToCheckout() {
    
    this.router.navigate(["checkout", JSON.stringify(this.courses)]);  
  //  ,JSON.stringify(this.courses)
  }
}


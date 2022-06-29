import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { CartCourse } from '../models/cartcourse.model';
import { Course } from '../models/course.model';
import { User } from '../models/user.model';
import { CartService } from '../services/cart.service';
import { CoursesService } from '../services/courses.service';
import { AuthService } from '../user-info/auth.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  courses: CartCourse [];

//  cartMessage: string "";
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
  course: null
}
  
  constructor(private cartService: CartService,
              private authService: AuthService,
              private courseService: CoursesService,
              private router: Router) { 
    this.courses = [];
  
  }
  ngOnInit(): void {
    this.setCart();
    this.setUser();
    this.setCourses();
  //  this.loadData();
  }
setUser(){
  let userData: any = sessionStorage.getItem('user');
  if (userData != null){
    this.newUser = JSON.parse(userData) as User;
    console.log(this.newUser);
  }
}

  loadData(){
    this.courses;
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
      //  for(let course of response){
      //    this.courses.push(course);

       // }
      //  this.cartMessage = '';
        
      },
 //     error: (error) => {
 //       console.log(error.error.errorMessage);
  //      this.cartMessage = error.error.errorMessage;
  //    }
    });
  
}

  deleteItem(cartCourseId: number){
    this.cartService.deleteItem(cartCourseId).subscribe((response)=>{
      console.log(response);
      this.loadData();
    });
  }

  goToStoreFront() {
    this.router.navigateByUrl("storefront");
  }

  goToCheckout() {
    this.router.navigateByUrl("checkout");
  }
}


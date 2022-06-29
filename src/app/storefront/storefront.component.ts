import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Cart } from '../models/cart.model';
import { Course } from '../models/course.model';
import { CartCourse } from '../models/cartcourse.model';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Category } from '../models/category.model';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  user: User = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    darkModePreference: false,
    registerDate : new Date,
    roleId: 0
  }

  cart: Cart = {
    id: 0,
    createdAt: '',
    modifiedAt: '',
    isRemoved: false, 
    cartTotal: 0,
    userId: this.user.id,
    orderId: 1
  }


  cartCourse : CartCourse = {
    id: 0,
    cart: this.cart,
    course: null
  }
  courses: Course[] = [];

  filteredCourses: Course [] = [];
  cartCourseIDs : number [] = [];
  categories: String[] = [];

  constructor(
    private courseServ : CoursesService,
    private cartServ : CartService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.setUser();
    this.setCourses();
    this.setCart();
  }

  setUser() {
    let userData : any = sessionStorage.getItem('user');
    if(userData != null){
      this.user = JSON.parse(userData) as User;
      console.log(this.user);
    } else {
      this.router.navigateByUrl('');
    }
  }
  
  setCourses() {
    this.courseServ.getAll().subscribe({
      next: (response) => {
        console.log(response);
        for(let course of response) {
          this.courses.push(course);
          if(!this.categories.includes(course.category.categoryName)) {
            this.categories.push(course.category.categoryName);
          }
        }
        this.filteredCourses = this.courses;
        console.log("courses", this.courses);
        console.log("categories", this.categories);
      },
      error: (err) => console.log(err)
    })
  }

  setCart() {
    this.cartServ.getCartByUserID(this.user.id).subscribe({
      next: (response) => {
        this.cart = response;
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
        console.log("cart", this.cart);
        this.setCartCourses();
        // let cart2 : any = sessionStorage.getItem("cart");
        // console.log("cart2", JSON.parse(cart2) as Cart);
      },
      error: (err) => {
        console.log(err);
        this.cartServ.newCartForUser(this.user).subscribe({
          next: (response) => {
            console.log(response);
            this.cart = response;
            sessionStorage.setItem("cart", JSON.stringify(this.cart))
            this.setCartCourses();
          },
          error: (err) => console.log(err)
        })
      }
    })
    
  }

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

  addCourseToCart(course : Course) {
    console.log("course",course);
    this.cartCourse.course = course;
    this.cartServ.addCourseToCart(this.cartCourse).subscribe({
      next: (response) => {
        console.log(response);
        this.cartCourseIDs.push(course.id);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  goToCart() {
    this.router.navigateByUrl("cart");
  }
}


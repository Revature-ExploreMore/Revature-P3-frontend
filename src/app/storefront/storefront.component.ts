import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Cart } from '../models/cart.model';
import { Course } from '../models/course.model';
import { CartCourse } from '../models/cartcourse.model';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Category } from '../models/category.model';
import { CartService } from '../services/cart.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'store',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css'],
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
    registerDate: new Date(),
    roleId: 0,
  };
  newCategory: Category = {
    id: 0,
    categoryName: '',
  };
  newCourse: Course = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: this.newCategory,
  };
  cart: Cart = {
    id: 0,
    createdAt: '',
    modifiedAt: '',
    isRemoved: false,
    cartTotal: 0,
    userId: this.user.id,
    orderId: 12
  }

  cartCourse: CartCourse = {
    id: 0,
    cart: this.cart,
    course: this.newCourse,
  };
  searchCourseName : string = "";
  courses: Course[] = [];
  purchasedCourseIDs: number[] = [];

  filteredCourses: Course[] = [];
  cartCourseIDs: number[] = [];
  categories: string[] = [];

  constructor(
    private courseServ: CoursesService,
    private cartServ: CartService,
    private ordersServ: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setUser();
    this.setCourses();
    this.setCart();
    this.setPurchasedCourses();
  }

  setUser() {
    let userData: any = sessionStorage.getItem('user');
    if (userData != null) {
      this.user = JSON.parse(userData) as User;
    } else {
      this.router.navigateByUrl('');
    }
  }

  setCourses() {
    this.courseServ.getAll().subscribe({
      next: (response) => {
        for (let course of response) {
          this.courses.push(course);
          if (!this.categories.includes(course.category.categoryName)) {
            this.categories.push(course.category.categoryName);
          }
        }
        this.filteredCourses = this.courses;
      },
      error: (err) => console.log(err),
    });
  }

  setCart() {
    this.cartServ.getCartByUserID(this.user.id).subscribe({
      next: (response) => {
        this.cart = response;
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
        this.setCartCourses();
      },
      error: (err) => {
        this.cartServ.newCartForUser(this.user).subscribe({
          next: (response) => {
            this.cart = response;
            sessionStorage.setItem('cart', JSON.stringify(this.cart));
            this.setCartCourses();
          },
          error: (err) => console.log(err),
        });
      },
    });
  }

  setCartCourses() {
    this.cartServ.getCartCourses(this.cart.id).subscribe({
      next: (response) => {
        this.cartCourse.cart = this.cart;
        for (let cartCourse of response) {
          if (cartCourse.course) {
            this.cartCourseIDs.push(cartCourse.course.id);
          }
        }
      },
      error: (err) => {
        // console.log(err);
      },
    });
  }

  addCourseToCart(course: Course) {
    this.cartCourse.course = course;
    this.cartCourse.cart = this.cart;
    this.cartServ.addCourseToCart(this.cartCourse).subscribe({
      next: (response) => {
        this.cartCourseIDs.push(course.id);
        this.cart.cartTotal += course.price;
        this.cart.modifiedAt = new Date();
        this.cartServ.updateCart(this.cart).subscribe({
          next: (response) => {
            this.cart = response;
            sessionStorage.setItem('cart', JSON.stringify(this.cart));
          },
          error: (err) => console.log(err),
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  goToCart() {
    this.router.navigateByUrl('cart');
  }

  filterByCategory(category : string) {
    this.filteredCourses = this.courses;
    if(category != 'all') {
      this.filteredCourses = this.filteredCourses.filter(course => course.category.categoryName == category);
    }
  }

  updateSearchName(val : string) {
    this.searchCourseName = val;
  }

  filterBySearch(search : string) {
    this.filteredCourses = this.courses;
    this.filteredCourses = this.filteredCourses.filter(course => course.name.includes(search));
  }

  setPurchasedCourses() {
    this.ordersServ.getOrderHistory(this.user.id).subscribe({
      next: (response) => {
        for (let orderCourse of response) {
          if(!this.purchasedCourseIDs.includes(orderCourse.course.id)) {
            this.purchasedCourseIDs.push(orderCourse.course.id);
          }
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

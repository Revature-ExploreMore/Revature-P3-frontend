import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { Cart } from '../models/cart.model';
import { CartCourse } from '../models/cartcourse.model';
import { Category } from '../models/category.model';
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


 setCart(){
 let cart : any = sessionStorage.getItem("cart");
 if (cart != null){
  this.newCart = JSON.parse(cart) as Cart;
  console.log(this.newCart);
}
 }
 
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

  deleteItem(cartCourseId: number){
    this.cartService.deleteItem(cartCourseId).subscribe((response)=>{
      console.log(response);
      this.setCourses();
    });
    
  }
  emptyCart(cartId: number){
    this.cartService.emptyCart(cartId).subscribe((response)=>{
      console.log(response);
      this.setCourses();
    });

  }

  goToStoreFront() {
    this.router.navigateByUrl("store");
  }

  goToCheckout() {
    this.router.navigateByUrl("checkout");
  }
}


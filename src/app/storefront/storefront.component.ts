import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Cart } from '../models/cart.model';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Category } from '../models/category.model';


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
    created_at: '',
    modified_at: '',
    is_removed: false, 
    cart_total: 0,
    user_id: this.user.id,
    order_id: 0
  }

  courses: Course[] = [];
  categories: String[] = [];

  constructor(
    private courseServ : CoursesService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.setUser();
    this.setCourses();
  }
  setCourses() {
    console.log("hello");
    this.courseServ.getAll().subscribe({
      next: (response) => {
        console.log(response);
        for(let course of response) {
          this.courses.push(course);
          if(!this.categories.includes(course.category.categoryName)) {
            this.categories.push(course.category.categoryName);
          }
        }
        console.log("courses", this.courses);
        console.log("categories", this.categories);
      },
      error: (err) => console.log(err)
    })
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

}


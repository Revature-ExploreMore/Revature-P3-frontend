import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { Category } from '../models/category.model';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  allCourse: Course[];
  categories: String[];

  newCategory: Category = {
    id: 0,
    categoryName: ''
  }

  newCourse: Course = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: this.newCategory
  };

  constructor(private coursesService: CoursesService,
    private router: Router) {
        this.allCourse = [];
        this.categories = [];
  }

  ngOnInit(): void {
    this.viewAllCourse();
    this.viewAllCategory();
  }

  addANewUser(){
    return this.router.navigate(['registeruser']);
   
    };

    
  viewAllCourse() {
    this.coursesService.getAll().subscribe(response => {
          console.log(response);
          this.allCourse = response;
        });
  }
  viewAllCategory(){
    this.coursesService.getAll().subscribe(response => {
      console.log(response);
      for(let course of response){
        this.allCourse.push(course);
        if(!this.categories.includes(course.category.categoryName)){
          this.categories.push(course.category.categoryName);
        }
      }
    })
  }
}

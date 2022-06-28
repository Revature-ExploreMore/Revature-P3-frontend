import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course.model';
import { Category } from '../models/category.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  allCourse: Course[];
  categories: String[];

  newCategory: Category = {
    categoryId: 0,
    categoryName: ''
  }

  
  constructor(private coursesService: CoursesService,
    private router: Router) {
        this.allCourse = [];
        this.categories = [];
  }

  ngOnInit(): void {
    this.viewAllCourse();
    this.viewAllCategory();
  }

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

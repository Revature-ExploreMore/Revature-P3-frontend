import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category.model';
import { Course } from '../models/course.model';
import { CoursesService } from '../services/courses.service';
import { AuthService } from '../user-info/auth.service';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  newCategory: Category = {
    id: 0,
    categoryName: ""
  }

  newCourse: Course = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
    category: this.newCategory
  } 

  updated: Course = {
    id: 0,
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
    category: this.newCategory
  }

  constructor(
    private courseService: CoursesService, 
    private authService: AuthService,
    private router: Router) {
    let update = this.authService.getUserDetails();
    }

  ngOnInit(): void {
  }

  updateCourse(){
    this.courseService.updatedCourse(this.updated).subscribe((response)=>{
    console.log(response);
    });
  }
}

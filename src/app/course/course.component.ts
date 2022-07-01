import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { Course } from '../models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { AuthService } from '../user-info/auth.service';




@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 
  courses: Course[];
  categories: String[];
  
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
    private router: Router,
    private activatedRoute: ActivatedRoute) 
      {
        this.courses = [];
        this.categories = [];
      }


  ngOnInit(): void {
    this.viewAllCourse();
    this.viewAllCategory();
  }

  viewAllCourse() {
    this.courseService.getAll().subscribe(response => {
          return this.courses=response;
        });
  }

  viewAllCategory(){
    this.courseService.getAll().subscribe(response => {
      console.log(response);
      for(let course of response){
        this.courses.push(course);
        if(!this.categories.includes(course.category.categoryName)){
          this.categories.push(course.category.categoryName);
        }
      }
    })
  }
  
  addANewCourse(){
    let course= this.courseService;
    let addCourse:Course={
    id: 0,
    name: this.newCourse.name,
    description: this.newCourse.description,
    price: 0,
    imageUrl: this.newCourse.imageUrl,
    category: this.newCategory
    };

    this.newCourse={
    id: 0,
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
    category: this.newCategory
    }
  
    this.courseService.addNewCourse(addCourse).subscribe((response)=>{
      console.log(response);
    })
  }
  
  updateCourse(){
    this.courseService.updatedCourse(this.updated).subscribe((response)=>{
      this.router.navigate(['course']);
    });
  }
}


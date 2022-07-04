import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { Course } from '../models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { AuthService } from '../user-info/auth.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courses: Course[];
  categories: String[];

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

  updated: Course = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: this.newCategory,
  };

  constructor(
    private courseService: CoursesService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.courses = [];
    this.categories = [];
  }

  ngOnInit(): void {
    this.viewAllCourse();
    this.viewAllCategory();

    let cidParam = this.activatedRoute.snapshot.paramMap.get('cid');
    this.courseService.getACourse(cidParam).subscribe((response) => {
    this.updated = response;
    });
  }

  viewAllCourse() {
    this.courseService.getAll().subscribe((response) => {
      return (this.courses = response);
    });
  }

  viewAllCategory() {
    this.courseService.getAll().subscribe((response) => {
      console.log(response);
      for (let course of response) {
        this.courses.push(course);
        if (!this.categories.includes(course.category.categoryName)) {
          this.categories.push(course.category.categoryName);
        }
      }
    });
  }

  addCourse() {
    switch(this.newCourse.category.categoryName){
      case "science":{
        this.newCourse.category.id = 1;
        break;
      }
      case "math":{
        this.newCourse.category.id = 2;
        break;
      }
      case "programming":{
        this.newCourse.category.id = 3;
        break;
      }
      case "writing":{
        this.newCourse.category.id = 4;
        break;
      }
      case "photography":{
        this.newCourse.category.id = 5;
        break;
      }
      case "digital art":{
        this.newCourse.category.id = 6;
        break;
      }
    }

    this.courseService.addNewCourse(this.newCourse).subscribe((response) => {
      console.log(response);
    });
  }

  setCurrentCourse(course: Course) {
    this.updated = course;
  }

  updateCourse() {
    this.courseService.updatedCourse(this.updated).subscribe((response) => {
      this.router.navigate(['course']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { Course } from '../models/course.model';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-course',
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


  constructor(
    private courseService : CoursesService,
  ) { }

  ngOnInit(): void {
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
    }
       

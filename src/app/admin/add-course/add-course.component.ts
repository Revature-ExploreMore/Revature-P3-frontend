import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

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
    category: this.newCategory,
  }

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.addCourse();
  }

  addCourse() {
    this.coursesService.addCourse(this.newCourse).subscribe((reponse)=> {
      this.newCategory = {
        id: 0,
        categoryName: ''
      }

      this.newCourse = {
        id: 0,
        name: '',
        description: '',
        price: 0,
        imageUrl: '',
        category: this.newCategory,
      }

    });
  }

}

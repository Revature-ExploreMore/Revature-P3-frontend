import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course.model';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  allCourse: Course [] = [] ;

  newCategory: Category = {
    categoryId: 0,
    categoryName: ''
  }

  newCourse: Course = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image_url: '',
    category: this.newCategory
  };

  

  constructor(
              private router: Router) { 
  
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
   // this.categoryHttpService.getAllCa
  }

}

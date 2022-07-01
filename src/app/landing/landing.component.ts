import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { Category } from '../models/category.model';
import { CoursesService } from '../services/courses.service';
import { User } from '../models/user.model';
import { AuthService } from '../user-info/auth.service';


@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  allCourse: Course[];
  categories: String[];
  user: number= this.getUserId();
 

  constructor(private coursesService: CoursesService, private authService: AuthService, 
    private router: Router) {
        this.allCourse = [];
        this.categories = [];
       
  }
  getUserId():number{
   let id:any = this.authService.getUserDetails();
   if(id.roleId == null){
    return 0;
   }else{
    return id.roleId;
   }
  }
  ngOnInit(): void {
    this.viewAllCourse();
    this.viewAllCategory();
    console.log(this.user);
  }

  addANewUser(){
    return this.router.navigate(['registeruser']);
   
    };

    
  viewAllCourse() {
    this.coursesService.getAll().subscribe(response => {
          //console.log(response);
          //this.allCourse = response;
          return this.allCourse=response;
        });
  }
  deleteCourse(id:number){
    this.coursesService.deleteCourse(id).subscribe({
      next: (response) =>{
        console.log(response);
      }, error: (error)=>{
        console.log(error)
      }
    })
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

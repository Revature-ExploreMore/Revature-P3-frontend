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
  user: number = 0;
 

  constructor(private coursesService: CoursesService, private authService: AuthService, 
    private router: Router) {
        this.allCourse = [];
        this.categories = [];
       
  }
  //used to enable or disable the delete button depending if its an admin or not
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
    this.user = this.getUserId();
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
  //method works to call the back end, but needs rework
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

//import { LandingComponent } from './../landing/landing.component';
import { Router } from '@angular/router';
import { Course } from './../models/course.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user-info/auth.service';
import { CoursesService } from '../services/courses.service';
import { LandingComponent } from '../landing/landing.component';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {
  allCourse: Course[];
  constructor(private authService:AuthService, private courseServise: CoursesService,
    private router:Router
    ) {  this.allCourse = [];  
    }

  ngOnInit(): void {
   
  }



  viewCourse() {
    
    
    this.courseServise.getAll().subscribe(response => {
      this.router.navigate(['landing']);
         // this.allCourse = response;
          return this.allCourse=response;
        });
  }
  hasLoggedIn(){
    return this.authService.isLoggedIn;
  }

  isAdmin(){
    return this.authService.isAdmin;
  }

  isUser(){
    return this.authService.isUser;
  }

  isAnonymous(){
    return this.authService.isAnonymous;
  }
}

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
    if(sessionStorage.getItem("darkmode")== "true"){
      this.toggleTheme();
      console.log("run it on oninit");
     }
  }
  darkMode: any= "false";
  theme = "light mode";

  myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 
  viewCourse() {
    
    
    this.courseServise.getAll().subscribe(response => {
      this.router.navigate(['landing']);
          console.log(response);
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

  toggleTheme (): void {
    document.body.classList.toggle("bg-dark");
    document.querySelector("h4.h1")?.classList.toggle("text-white");
    document.querySelector("h1")?.classList.toggle("text-white");
    document.querySelector("div.mt-5.p-4.text-white.text-center")?. 
      classList.remove("bg-dark");
    document.querySelector("div.mt-5.p-4.text-white.text-center")?.
      classList.toggle("bg-secondary");

    // For the explore more section -- only works when screen size reduces
    document.querySelectorAll("body p").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
    document.querySelectorAll("body u").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
    document.querySelectorAll("h5.card-title").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
    document.querySelectorAll("label").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
    document.querySelectorAll("body th").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
    document.querySelectorAll("body td").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
    document.querySelectorAll("body h2").forEach(
      (elem) => elem.classList.toggle("text-white")
    );
  
    if(sessionStorage.getItem("darkmode")==null && this.darkMode == "false"){ 
      sessionStorage.setItem("darkmode", "true");
      this.darkMode ="true";
      console.log("first local storage "+sessionStorage.getItem("darkmode"));
    }
    else if(sessionStorage.getItem("darkmode") =="true" && this.darkMode == "true"){
        sessionStorage.setItem("darkmode", "false");
        this.darkMode = "false";
        console.log("second local storage change (t-t)"+sessionStorage.getItem("darkmode"));
    }
    else if(sessionStorage.getItem("darkmode") =="true" && this.darkMode == "false"){
     this.darkMode = "true";
     console.log("refresh local storage change "+sessionStorage.getItem("darkmode"));
    }
    if(this.theme =="light mode"){
      this.theme = "darkmode";
    }else{
      this.theme = "light mode";
    }
  }

  
}

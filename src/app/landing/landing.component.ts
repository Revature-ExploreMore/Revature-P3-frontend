import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addANewUser(){
    return this.router.navigate(['registeruser']);
   
    };

    
  
  }




import { UserService } from './../user.service';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  userRegister:boolean=false;

  newUser: User={
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    darkModePreference: false,
    registerDate:new Date,
    roleId:2
  }

  constructor(private authService:AuthService, private userservice:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addANewUser(){
    let user= this.authService.getUserDetails();
    let addUser:User={
      id: 0,
      name: this.newUser.name,
      email: this.newUser.email,
      phoneNumber: this.newUser.phoneNumber,
      username: this.newUser.username,
      password: this.newUser.password,
      darkModePreference: false,
      registerDate:this.newUser.registerDate,
      roleId:2
    };

    this.newUser={
      id: 0,
      name: '',
      email: '',
      phoneNumber: '',
      username: '',
      password: '',
      darkModePreference: false,
      registerDate:new Date,
      roleId:2
    }

    this.userservice.registerUser(addUser).subscribe((response)=>{
      this.userRegister=false;
      this.router.navigate(['login']);
    })
  }

}

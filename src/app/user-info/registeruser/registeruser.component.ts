import { UserService } from './../user.service';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserDetails } from '../user.model';

@Component({
  selector: 'registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  
  userRegister:boolean=false;

  newUser: UserDetails={
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    userName: '',
    password: '',
    darkModePrefrence:false,
    registerDate:new Date("2022-07-07"),
    roleId:0
  }

  constructor(private authService:AuthService, private userservice:UserService) { }

  ngOnInit(): void {
  }

  addANewUser(){
    let user= this.authService.getUserDetails();
    let addUser:UserDetails={

      id: 0,
      name: this.newUser.name,
      email: this.newUser.email,
      phoneNumber: this.newUser.phoneNumber,
      userName: this.newUser.userName,
      password: this.newUser.password,
      darkModePrefrence:false,
      registerDate:this.newUser.registerDate,
      roleId:0
    };

    this.newUser={
      id: 0,
      name: '',
      email: '',
      phoneNumber: '',
      userName: '',
      password: '',
      darkModePrefrence:false,
      registerDate:new Date("2022-07-07"),
      roleId:0
    }
    //i need some code to add user here
  }

}

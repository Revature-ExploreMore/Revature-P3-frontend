import { UserService } from './../user.service';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/models/user.model';

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
    userName: '',
    hashedPassword: '',
    darkModePreference:false,
    registerDate:new Date("2022-07-07"),
    roleId:2
  }

  constructor(private authService:AuthService, private userservice:UserService) { }

  ngOnInit(): void {
  }

  addANewUser(){
    let user= this.authService.getUserDetails();
    let addUser:User={
      id: 0,
      name: this.newUser.name,
      email: this.newUser.email,
      phoneNumber: this.newUser.phoneNumber,
      userName: this.newUser.userName,
      hashedPassword: this.newUser.hashedPassword,
      darkModePreference:false,
      registerDate:this.newUser.registerDate,
      roleId:2
    };

    this.newUser={
      id: 0,
      name: '',
      email: '',
      phoneNumber: '',
      userName: '',
      hashedPassword: '',
      darkModePreference:false,
      registerDate:new Date("2022-07-07"),
      roleId:2
    }
    
    this.userservice.registerUser(addUser).subscribe((response)=>{
      console.log(response);
      console.log(user.id);
      this.userRegister=false;
    })
  }

}

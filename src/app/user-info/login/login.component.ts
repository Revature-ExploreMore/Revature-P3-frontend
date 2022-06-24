import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserDetails } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidMessage: string = "";
  userDetails:UserDetails={
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

  constructor(private userService:UserService, private authService:AuthService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  validateLogin(){
    this.userService.validLogin(this.userDetails).subscribe((response)=>{
      console.log(response)
      if(response.roleId!=0){
        this.authService.storeUserDetails(response);
        this.authService.isLoggedIn=true;
        if(response.roleId==1){
          this.authService.isAdmin=true;
        }else if(response.roleId==2){
        this.authService.isUser=true;
        }else{
          this.invalidMessage="Invalid username/password";
        }
      }
    })
  }

}

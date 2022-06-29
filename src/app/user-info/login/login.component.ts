import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidMessage: string = "";
  userDetails:User={
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    darkModePreference:false,
    registerDate:new Date,
    roleId:0
  }

  constructor(private userService:UserService, private authService:AuthService,
    private http:HttpClient, private router:Router) { }

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
         
          this.router.navigate(['store']);
        }else if(response.roleId==2){
        this.authService.isUser=true;
        this.router.navigate(['store']);
        }else if(response.roleId==3){
          this.authService.isAnonymous=true;
          this.router.navigate(['store']);
          }
        
        else{
          this.invalidMessage="Invalid username/password";
        }
      }
    })
  }

}

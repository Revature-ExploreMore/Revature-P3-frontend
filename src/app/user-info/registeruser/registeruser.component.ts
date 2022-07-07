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

  public isValidFlg:boolean = true;

validatePhoneNo(field: any) {
  var phoneNumDigits = field.value.replace(/\D/g, '');

  this.isValidFlg = (phoneNumDigits.length==0 || phoneNumDigits.length == 10);

  var formattedNumber = phoneNumDigits;
  if (phoneNumDigits.length >= 6)
    formattedNumber = '(' + phoneNumDigits.substring(0, 3) + ') ' + phoneNumDigits.substring(3, 6) + '-' + phoneNumDigits.substring(6);
  else if (phoneNumDigits.length >= 3)
    formattedNumber = '(' + phoneNumDigits.substring(0, 3) + ') ' + phoneNumDigits.substring(3);

  field.value = formattedNumber;
}

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

  validPassword() {
    return this.newUser.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&].{8,}$/);
  }

}

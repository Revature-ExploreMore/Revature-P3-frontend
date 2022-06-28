import { Injectable } from '@angular/core';
import { JsonpClientBackend } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

isLoggedIn:boolean=false;
isAdmin:boolean=false;
isUser:boolean=false;
isAnonymous:boolean=false;

  constructor() {
    this.getUserDetails();
   }

  getUserDetails(){
    let userData:any=sessionStorage.getItem('user');
    if(userData!=null){
      return JSON.parse(userData);
    }
  }

  storeUserDetails(userDetails:User){
    sessionStorage.setItem('user',JSON.stringify(userDetails));
  }

  removeUserDetails():void{
    sessionStorage.removeItem('user');
  }
}

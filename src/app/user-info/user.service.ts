import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //this url is just from my local to test for functions
  baseUrlLogin:string="http://localhost:7272/api/login-employee";

  constructor(private http:HttpClient) { }

  validLogin(userDetails:UserDetails):Observable<UserDetails>{
    return this.http.post<UserDetails>(this.baseUrlLogin, userDetails);
  }
}

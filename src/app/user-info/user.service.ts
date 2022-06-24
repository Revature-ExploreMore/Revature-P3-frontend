import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //this url is just from my local to test for functions
  baseUrl: string = "http://localhost:7272/api/login-employee";

  constructor(private http: HttpClient) { }

  validLogin(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }



  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
  getUser(id: any): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }
  updateUser(sentUser: User): Observable<User> {
    return this.http.put<User>(this.baseUrl, sentUser);

  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService { 
  baseUrlLogin: string = "http://localhost:7474/user/user-info/";
   constructor(private http: HttpClient) { }

  validLogin(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrlLogin+"login", user);
  }

  registerUser(newUser1: User):Observable<User>{
    return this.http.post<User>(this.baseUrlLogin+"register", newUser1);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrlLogin);
  }
  getUser(id: any): Observable<User> {
    return this.http.get<User>(this.baseUrlLogin + '/' + id);
  }
  updateUser(sentUser: User): Observable<User> {
    return this.http.put<User>(this.baseUrlLogin, sentUser);

  }
}

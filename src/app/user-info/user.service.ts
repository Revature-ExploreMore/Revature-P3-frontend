import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  //baseUrlLogin: string = "http://localhost:7474/user/user-info/";
  baseUrlLogin: string = environment.apiUrl+"/user/user-info/";

   constructor(private http: HttpClient) { }

  validLogin(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrlLogin+"login", user);
  }

  registerUser(addUser: User):Observable<User>{
    return this.http.post<User>(this.baseUrlLogin+"register", addUser);
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

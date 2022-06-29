import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseURL: string = environment.apiUrl + "/course/"; 
  //baseURL: string = "http://localhost:7474/course/";
  constructor(private http: HttpClient) { }

  getAll() : Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}getAll`);
  }
}

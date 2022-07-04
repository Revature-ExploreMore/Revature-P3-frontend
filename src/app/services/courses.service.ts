import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  //baseUrl: string = "http://localhost:7474/course/";
  baseUrl: string = environment.apiUrl+"/course/";
  constructor(private http: HttpClient) { }

  getACourse(id: any): Observable<Course>{
    return this.http.get<Course>(this.baseUrl + 'getById/' + id);
  }

  getAll() : Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}getAll`);
  }

  deleteCourse(id: number): Observable<Boolean>{
    return this.http.delete<Boolean>(`${this.baseUrl}`);
  }

  addNewCourse(newCourse: Course): Observable<Course>{
    return this.http.post<Course>(this.baseUrl + 'addNewCourse', newCourse); 
  }

  updatedCourse(updateCourse: Course): Observable<Course> {
    return this.http.put<Course>(this.baseUrl + 'updateCourse', updateCourse);
  }

  addCourse(newCourse : Course) : Observable<Course> {
    return this.http.post<Course>(this.baseURL + "addcourse", newCourse);
  }
}
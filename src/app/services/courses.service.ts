import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseURL: string = "http://localhost:8484/course/";
  constructor(private http: HttpClient) { }

  getAll() : Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}getAll`);
  }
}

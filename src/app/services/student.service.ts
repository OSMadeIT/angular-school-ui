import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './../students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private StudentsUrl: string = 'http://localhost:8080/angular-school-test/api/students/';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.StudentsUrl + 'list');
  }
}
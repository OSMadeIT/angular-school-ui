import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Students } from './../students';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private StudentsUrl: string = 'http://localhost:8080/angular-school-test/api/students/';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.StudentsUrl + 'list');
  }

  postStudent(student: Students): Observable<Students>{
    return this.http.post<Students>(this.StudentsUrl +'create',  student, httpOptions);
  }

}
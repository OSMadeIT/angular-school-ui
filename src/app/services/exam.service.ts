import { Exams } from './../exams';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private examsUrl: string = 'http://localhost:8080/angular-school-test/api/exams/';

  constructor(private http: HttpClient) { }

  getExams(): Observable<Exams[]>{
    return this.http.get<Exams[]>(this.examsUrl + 'list');
  }

  postExams(exam: Exams): Observable<Exams>{
    return this.http.post<Exams>(this.examsUrl +'create',  exam, httpOptions);
  }
}
